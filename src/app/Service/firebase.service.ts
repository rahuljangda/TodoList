import { Injectable } from '@angular/core';
import { BasicToDo } from '../basic-to-do';
import { common } from './common';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
    providedIn:'root'
})

export class FirebaseService {
    constructor(private firestore: AngularFirestore) {}

    getAllTodo() {
        return this.firestore.collection('BasicToDo').snapshotChanges();
    }

}
