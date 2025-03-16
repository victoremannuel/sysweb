import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router: Router) {}

  navegarParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  navegarParaHome() {
    this.router.navigate(['/home']);
  }

  navegarParaLista() {
    this.router.navigate(['/lista']);
  }
  
}
