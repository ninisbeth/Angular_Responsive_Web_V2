import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrl: './additional-information.component.css'
})
export class AdditionalInformationComponent {
  childForm: FormGroup;
  childFormSubmitted: boolean = false;
  saveSuccessMessage: string = '';

  @Output() colorChange = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.childForm = this.fb.group({
      color: [''],
      hobby: ['', Validators.required],
      inicio: ['', Validators.required],
      fin: ['', Validators.required],
      linkedin: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  onColorChange(newColor: string) {
    this.colorChange.emit(newColor);
  }
  
  submitChildForm() {
    if (this.childForm.valid) {
      this.childFormSubmitted = true;
      alert('Cambios guardados correctamente.');
      this.resetForm();
    }
  }

  resetForm() {
    this.childForm.reset();
    this.childFormSubmitted = false;
  }
}
