import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './pages/admin/add-user/add-user.component';
import { EmplListComponent } from './pages/employee/empl-list/empl-list.component';
import { RolesComponent } from './pages/admin/roles/roles.component';
import { SalaryComponent } from './pages/employee/salary/salary.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EmplListComponent,
    RolesComponent,
    SalaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
