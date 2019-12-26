import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { ErrorComponent } from './share/error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule ,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
