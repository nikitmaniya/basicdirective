import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';



const routes: Routes = [
   
    {path:"ng-switch",component:NgSwitchComponent},
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
