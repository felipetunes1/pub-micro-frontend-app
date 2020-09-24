import { Database } from './database.model';

export class Register {
   database: Database;
   id: string;
 
   constructor(database: Database, id: string) {
     this.database = database;
     this.id = id;
   }
 }
 
 