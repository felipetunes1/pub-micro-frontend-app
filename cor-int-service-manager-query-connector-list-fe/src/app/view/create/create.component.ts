import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Database } from '../../models/database.model';

@Component({
  selector: 'app-create',
  templateUrl: '../query-connector.view.html'
})
export class CreateComponent implements OnInit {

  title: string = 'New';
  create: boolean = true;
  detail: boolean = false;
  mode: string = 'sql'
  database: Database;
  registerForm: FormGroup;

  databases: Array<Database> = [
    new Database('SQL', 'sql'),
    new Database('MongoDB', 'javascript')
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      database: ['', Validators.required],
      collection: ['', this.collectionCustomValidation()],
      description: ['', Validators.required],
      query: ['', Validators.required],
    });

  }

  getDatabaseName(database: Database) {
    return database.name;
  }

  submit() {
    console.log(
      'is valid?',
      this.registerForm.controls.database.valid,
      this.registerForm.controls.collection.valid,
      this.registerForm.controls.description.valid,
      this.registerForm.controls.query.valid
    )
  }

  collectionCustomValidation(): Validators {
    return (control: AbstractControl) => {
      console.log(this.database && this.database.type == "javascript", !control.value)

      return this.database && this.database.type == "javascript" && !control.value ?
        {
          required: {
            valid: false
          }
        } : null;

    }
  }

}
