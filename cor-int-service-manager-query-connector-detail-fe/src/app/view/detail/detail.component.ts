import { Component, OnInit } from '@angular/core';
import { Database } from '../../models/database.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: '../query-connector.view.html'
})
export class DetailComponent implements OnInit {

  title: string = 'Detail';
  create: boolean = false;
  detail: boolean = true;
  mode: string = 'sql';
  database: Database = new Database('NOSql', 'javascript');
  registerForm: FormGroup;

  databases: Array<Database> = [
    new Database('SQL', 'sql'),
    new Database('MongoDB', 'javascript')
  ]

  constructor(private fb: FormBuilder, private router: ActivatedRoute) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      templateCode: [{ value: this.router.snapshot.paramMap.get('id'), disabled: true }],
      database: [{ value: this.databases[0], disabled: true }],
      collection: [{ value: '', disabled: true }],
      description: [{ value: 'Testando a vida', disabled: true }],
      query: [{ value: 'select * from users', disabled: true }],
    });
    this.database = this.databases[0]

  }

  getDatabaseName(database: Database) {
    return database.name;
  }
  submit() { }

}
