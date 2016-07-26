//forced webpack to include shims aysc too 
import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { webpackClass } from './app/app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(webpackClass, [
  disableDeprecatedForms(),
  provideForms()
 ])
 .catch((err: any) => console.error(err));
