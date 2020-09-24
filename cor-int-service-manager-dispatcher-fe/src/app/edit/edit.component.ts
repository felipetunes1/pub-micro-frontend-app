import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DispatcherModel } from '../models/dispatcher.model';
import { DispatcherService } from '../service/dispatcher.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: '../view/dispatcher.view.html'
})
export class EditComponent implements OnInit {
  title: string = "Edit";
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
  details: boolean = false;

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
          method: [{ value: subs.method, disabled: this.details }, Validators.required],
          oldVersion: [{ value: subs.oldVersionMs, disabled: this.details }],
          internalUrl: [
            { value: subs.internalUrl, disabled: this.details },
            Validators.required],
          externalUrl: [{ value: subs.externalUrl, disabled: this.details }],
        });
        this.requestHeaderFormGroup = this._formBuilder.group({
          headerInput: [{ value: subs.header, disabled: this.details }],
        });
        this.requestBodyFormGroup = this._formBuilder.group({
          bodyInput: [{ value: subs.body, disabled: this.details }, Validators.required]
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
          bodyOutput: [{ value: subs.bodyOut, disabled: this.details }, Validators.required]
        });
        this.errorHeaderFormGroup = this._formBuilder.group({
          headerError: [{ value: subs.headerOutError, disabled: this.details }],
        });
        this.errorBodyFormGroup = this._formBuilder.group({
          bodyError: [{ value: subs.bodyOutError, disabled: this.details }, Validators.required]
        });

      })

  }

  submit() {
    let dispatcherModel: DispatcherModel = new DispatcherModel();

    // dispatcherModel.codeTmp = this.requestBodyFormGroup.controls.bodyInput.value;
    dispatcherModel.method = this.initialFormGroup.controls.method.value;
    dispatcherModel.oldVersionMs = this.initialFormGroup.controls.oldVersion.value;
    dispatcherModel.internalUrl = this.initialFormGroup.controls.internalUrl.value;
    dispatcherModel.externalUrl = this.initialFormGroup.controls.externalUrl.value;
    dispatcherModel.header = this.requestHeaderFormGroup.controls.headerInput.value;
    dispatcherModel.body = this.requestBodyFormGroup.controls.bodyInput.value;
    // dispatcherModel.isFluxoXml = this.xmlFormGroup.controls.bodyInput.value;
    dispatcherModel.removeAddAttribute = this.xmlFormGroup.controls.removeAddAttribute.value;
    dispatcherModel.responseWithAttribute = this.xmlFormGroup.controls.responseWithAttribute.value;
    dispatcherModel.cdataEnvelope = this.xmlFormGroup.controls.cdataEnvelope.value;
    dispatcherModel.cdataInsertion = this.xmlFormGroup.controls.cdataInsertion.value;
    dispatcherModel.bodyOutXml = this.xmlFormGroup.controls.bodyOutXml.value;
    dispatcherModel.headerOut = this.responseHeaderFormGroup.controls.headerOutput.value;
    dispatcherModel.bodyOut = this.responseBodyFormGroup.controls.bodyOutput.value;
    dispatcherModel.headerOutError = this.errorHeaderFormGroup.controls.headerError.value;
    dispatcherModel.bodyOutError = this.errorBodyFormGroup.controls.bodyError.value;
    
    this.dispatcherService.new(dispatcherModel)
    .subscribe(subs => {
      if(subs) {
        alert(`Template Updated Sucess`);
      } else {
        alert("Occur an error");
      }
    })

  }


}
