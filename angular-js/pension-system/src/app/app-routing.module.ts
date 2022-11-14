import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ListPensionerComponent } from './Components/list-pensioner/list-pensioner.component';
import { AddPensionerComponent } from './Components/add-pensioner/add-pensioner.component';
import { PensionerDetailsComponent } from './Components/pensioner-details/pensioner-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list_pensioner', component: ListPensionerComponent },
  { path: 'add_pensioner', component: AddPensionerComponent },
  { path: 'pensioner_details', component: PensionerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
