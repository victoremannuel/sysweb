import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { provideRouter, withHashLocation } from '@angular/router';
import { LayoutComponent } from './app/core/layout/layout.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));
