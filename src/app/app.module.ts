import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { FormsModule } from '@angular/forms' ;
 

const appRoutes: Routes = [
  { path : 'list'   ,   component   :   ListEmployeesComponent},
  { path : 'create' ,   component   :   CreateEmployeeComponent},
  { path : 'create' ,   redirectTo  :   '/list', pathMatch: 'full' }

];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports:[
    BrowserModule    ,
    FormsModule      ,
    AppRoutingModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
