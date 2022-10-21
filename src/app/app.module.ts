import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaymoviesComponent } from './displaymovies/displaymovies.component';
import { HomeComponent } from './home/home.component';
import { TeluguComponent } from './telugu/telugu.component';
import { HindiComponent } from './hindi/hindi.component';
import { EnglishComponent } from './english/english.component';
import { TicketbookComponent } from './ticketbook/ticketbook.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';
import { TeluguticketbookComponent } from './teluguticketbook/teluguticketbook.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HinditicketbookComponent } from './hinditicketbook/hinditicketbook.component';
import { MatDialogModule} from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table' ;



import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';

import {MatInputModule} from '@angular/material/input';
import { ShowmoviesComponent } from './showmovies/showmovies.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplaymoviesComponent,
    HomeComponent,
    TeluguComponent,
    HindiComponent,
    EnglishComponent,
    TicketbookComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent,
    AfterloginComponent,
    SuccessComponent,
    FailureComponent,
    TeluguticketbookComponent,
    AdminComponent,
    HinditicketbookComponent,
    ShowmoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatNativeDateModule,
    MatTableModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
