import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { ContactusComponent } from './contactus/contactus.component';
// import { BookticketComponent } from './bookticket/bookticket.component';
import { DisplaymoviesComponent } from './displaymovies/displaymovies.component';
import { EnglishComponent } from './english/english.component';
import { FailureComponent } from './failure/failure.component';
import { HindiComponent } from './hindi/hindi.component';
import { HinditicketbookComponent } from './hinditicketbook/hinditicketbook.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginguardGuard } from './loginguard.guard';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { TeluguComponent } from './telugu/telugu.component';
import { TeluguticketbookComponent } from './teluguticketbook/teluguticketbook.component';
import { TicketbookComponent } from './ticketbook/ticketbook.component';

const routes: Routes = [
  {
    path: 'display',
    component: DisplaymoviesComponent,
    children: [
      { path: 'telugu', component: TeluguComponent },
      { path: 'hindi', component: HindiComponent },
      { path: 'english', component: EnglishComponent },
    ],
    canActivate: [LoginguardGuard],
  },
  {
    path: 'afterlogin',
    component: AfterloginComponent,
    canActivate: [LoginguardGuard],
  },
  {
    path: 'success',
    component: SuccessComponent,
    canActivate: [LoginguardGuard],
  },
  {
    path: 'failure',
    component: FailureComponent,
    canActivate: [LoginguardGuard],
  },
  {
    path: 'ticketbook/:id',
    component: TicketbookComponent,
    canActivate: [LoginguardGuard],
  },
  {
    path: 'teluguticketbook/:id',
    component: TeluguticketbookComponent,
    canActivate: [LoginguardGuard],
  },
  {
    path: 'hinditicketbook/:id',
    component: HinditicketbookComponent,
    canActivate: [LoginguardGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contactus', component: ContactusComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
