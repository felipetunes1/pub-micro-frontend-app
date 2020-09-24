import { Component, OnInit } from '@angular/core';
import { DispatcherModel } from '../models/dispatcher.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DispatcherService } from '../service/dispatcher.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: '../view/dispatcher.view.html'
})
export class DetailComponent implements OnInit {
  title: string = "Detail";
  initialFormGroup: FormGroup;
  requestHeaderFormGroup: FormGroup;
  requestBodyFormGroup: FormGroup;
  xmlFormGroup: FormGroup;
  responseHeaderFormGroup: FormGroup;
  responseBodyFormGroup: FormGroup;
  errorHeaderFormGroup: FormGroup;
  errorBodyFormGroup: FormGroup;
  responseFormGroup: FormGroup;

  create: boolean = false;
  details: boolean = true;

  templateCode: string;

  showXml: boolean = true;

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute,
    private dispatcherService: DispatcherService, private location: Location) { }

  ngOnInit(): void {
    this.templateCode = this.route.snapshot.paramMap.get("id");

    this.dispatcherService.get(this.templateCode)
      .subscribe(subs => {
        if (!subs) {
          alert('Template Not Found')
          this.location.back();
        }
        this.initialFormGroup = this._formBuilder.group({
          method: [{ value: subs.method, disabled: this.details }],
          oldVersion: [{ value: subs.oldVersionMs, disabled: this.details }],
          internalUrl: [{ value: subs.internalUrl, disabled: this.details }],
          externalUrl: [{ value: subs.externalUrl, disabled: this.details }],
        });
        this.requestHeaderFormGroup = this._formBuilder.group({
          headerInput: [{ value: subs.header, disabled: this.details }],
        });
        this.requestBodyFormGroup = this._formBuilder.group({
          bodyInput: [{ value: subs.body, disabled: this.details }]
        });
        this.xmlFormGroup = this._formBuilder.group({
          removeAddAttribute: [{ value: subs.removeAddAttribute, disabled: this.details }],
          responseWithAttribute: [{ value: subs.responseWithAttribute, disabled: this.details }],
          cdataEnvelope: [{ value: subs.cdataEnvelope, disabled: this.details }],
          cdataInsertion: [{ value: subs.cdataInsertion, disabled: this.details }],
          bodyOutXml: [{ value: subs.bodyOutXml, disabled: this.details }],
        });
        this.responseHeaderFormGroup = this._formBuilder.group({
          headerOutput: [{ value: subs.headerOut, disabled: this.details }],
        });
        this.responseBodyFormGroup = this._formBuilder.group({
          bodyOutput: [{ value: subs.bodyOut, disabled: this.details }]
        });
        this.errorHeaderFormGroup = this._formBuilder.group({
          headerError: [{ value: subs.headerOutError, disabled: this.details }],
        });
        this.errorBodyFormGroup = this._formBuilder.group({
          bodyError: [{ value: subs.bodyOutError, disabled: this.details }]
        });

      })

  }

  submit() {
  }


}
