import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private db: AngularFireDatabase) { }

  getMessages(userId: string) {
    this.db.database.goOnline();
    return this.db.list(`/messages/${userId}`, ref => ref.orderByChild('read').equalTo(false))
      .snapshotChanges()
      .pipe(map(changes => changes.map(c => ({ $key: c.key, ...(c.payload.val() as any) }))))
  }

  dismissMessage(userId: string, messageKey: string) {
    this.db.object(`messages/${userId}/${messageKey}`).update({ 'dismissed': true })
  }

  unsubscribe() {
    this.db.database.goOffline();
  }
}
