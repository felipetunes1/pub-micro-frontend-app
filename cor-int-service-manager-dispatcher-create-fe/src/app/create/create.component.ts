import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DispatcherModel } from '../models/dispatcher.model';
import { DispatcherService } from '../service/dispatcher.service';

@Component({
  selector: 'app-create',
  templateUrl: '../view/dispatcher.view.html'
})
export class CreateComponent implements OnInit {
  title: string = "New";
  initialFormGroup: FormGroup;
  requestHeaderFormGroup: FormGroup;
  requestBodyFormGroup: FormGroup;
  xmlFormGroup: FormGroup;
  responseHeaderFormGroup: FormGroup;
  responseBodyFormGroup: FormGroup;
  errorHeaderFormGroup: FormGroup;
  errorBodyFormGroup: FormGroup;
  responseFormGroup: FormGroup;

  create: boolean = true;
  details: boolean = false;

  templateCode: string;

  showXml: boolean = true;
  queryConnectorCode: string;

  constructor(private _formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,
    private dispatcherService: DispatcherService, private router: Router) { }

  ngOnInit(): void {
    this.queryConnectorCode = this.activatedRoute.snapshot.queryParamMap.get("queryConnectorCode");
    this.showXml = !this.queryConnectorCode;

    this.initialFormGroup = this._formBuilder.group({
      method: [{ value: '', disabled: this.details }, Validators.required],
      oldVersion: [{ value: '', disabled: this.details }],
      internalUrl: [
        { value: `${this.queryConnectorCode ? '"http://corp-cr-query-connector-np/corporate/integration/v1/queryconnector?code=" + ' + this.queryConnectorCode : ''}`, disabled: this.details },
        Validators.required],
      externalUrl: [{ value: '', disabled: this.details }],
    });
    this.requestHeaderFormGroup = this._formBuilder.group({
      headerInput: [{ value: '', disabled: this.details }],
    });
    this.requestBodyFormGroup = this._formBuilder.group({
      bodyInput: [{ value: '.body', disabled: this.details }, Validators.required]
    });
    this.xmlFormGroup = this._formBuilder.group({
      removeAddAttribute: [{ value: '', disabled: this.details }],
      responseWithAttribute: [{ value: '', disabled: this.details }],
      cdataEnvelope: [{ value: '', disabled: this.details }],
      cdataInsertion: [{ value: '', disabled: this.details }],
      bodyOutXml: [{ value: '', disabled: this.details }],
    });
    this.responseHeaderFormGroup = this._formBuilder.group({
      headerOutput: [{ value: '', disabled: this.details }],
    });
    this.responseBodyFormGroup = this._formBuilder.group({
      bodyOutput: [{ value: '.body', disabled: this.details }, Validators.required]
    });
    this.errorHeaderFormGroup = this._formBuilder.group({
      headerError: [{ value: '', disabled: this.details }],
    });
    this.errorBodyFormGroup = this._formBuilder.group({
      bodyError: [{ value: '.body', disabled: this.details }, Validators.required]
    });
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
          alert(`Your Template Code is ${subs.codeTmp}`);
          this.router.navigate(['/dispatcher'])
        } else {
          alert("Occur an error");
        }
      })

  }

}
