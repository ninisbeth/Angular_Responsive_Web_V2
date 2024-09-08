import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AdditionalInformationComponent } from './additional-information/additional-information.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myParentForm!: FormGroup;
  fileSelected: boolean = false;
  parentFormSubmitted: boolean = false;
  registrationSuccessMessage: string = '';
  
  @ViewChild(AdditionalInformationComponent) childFormComponent!: AdditionalInformationComponent;

  constructor(private fb: FormBuilder) {
    this.myParentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      number: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.fileSelected = true;
    } else {
      this.fileSelected = false;
    }
  }
  
  submitParentForm() {
    if (this.myParentForm.valid && this.childFormComponent.childForm.valid) {
      alert('Registro completado exitosamente.');
      this.resetForms();
    }
  }

  resetForms() {
    this.myParentForm.reset(); // Restablece el formulario principal
    this.childFormComponent.resetForm(); // Llama al método para restablecer el formulario hijo
    this.parentFormSubmitted = false; // Restablece el estado de enviado del formulario principal
  }

  changeBackgroundColor(color: string) {
    document.body.style.backgroundColor = color;
  }

  isFormValid(): boolean {
    return this.myParentForm.valid && (this.childFormComponent ? this.childFormComponent.childForm.valid : false);
  }
}
