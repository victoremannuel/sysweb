import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class CadastroFormComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Usuário cadastrado:', this.cadastroForm.value);
      alert('Cadastro realizado com sucesso!');
      this.cadastroForm.reset();
    }
  }
}
