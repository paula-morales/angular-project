import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {
  isLoading: boolean;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  articleForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  filePath: String;
  constructor(private afStorage: AngularFireStorage) {}
  ngOnInit(): void {}

  async upload(event) {
    const file = event.target.files[0];
    const filePath = Math.random().toString(36).substring(2);
    // const ref = this.afStorage.ref(filePath);
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);
    // const id = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(id);
    // this.task = this.ref.put(event.target.files[0]);

    task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = fileRef.getDownloadURL())))
      .subscribe();
  }

  uploadImage() {
    console.log(this.filePath);
    // this.afStorage
    //   .upload('/images' + Math.random() + this.filePath, this.filePath)
    //   .then((data) => {
    //     console.log(data._delegate.task._uploadUrl);
    //   });
  }

  onSubmitForm() {}

  onImageAdded(e) {}
}
