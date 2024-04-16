import { Component } from '@angular/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditorModule, MatCardModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // updateTitle() {
  //   this.title.setValue('TINYMCE');
  // }
  tinyMCEForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.tinyMCEForm.value);
  }
}
