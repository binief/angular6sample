import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SiginRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule, SiginRoutingModule,FormsModule
  ],
  providers: [
  
  ]
})
export class SigninModule { }
