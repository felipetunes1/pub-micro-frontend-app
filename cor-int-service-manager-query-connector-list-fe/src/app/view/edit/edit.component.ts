import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Database } from '../../models/database.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../query-connector.view.html'
})
export class EditComponent implements OnInit {

  title: string = 'Edit';
  create: boolean = false;
  detail: boolean = false;
  mode: string = 'sql';
  database: Database;
  registerForm: FormGroup;

  databases: Array<Database> = [
    new Database('SQL', 'sql'),
    new Database('MongoDB', 'javascript')
  ]

  constructor(private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      templateCode: [{ value: this.router.snapshot.paramMap.get('id'), disabled: true }, Validators.required],
      database: [this.databases[0], Validators.required],
      collection: ['', this.collectionCustomValidation()],
      description: ['Testando a vida', Validators.required],
      query: ['select * from users', Validators.required],
    });
    this.database = this.databases[0]

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
