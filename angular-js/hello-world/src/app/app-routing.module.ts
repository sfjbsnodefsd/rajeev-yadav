import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { RegisterUsersComponent } from './Components/register-users/register-users.component';
import { PipeDemoComponent } from './Components/pipe-demo/pipe-demo.component';
import { InterpolationDemoComponent } from './Components/interpolation-demo/interpolation-demo.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: UserFormComponent },
  { path: 'registered', component: RegisterUsersComponent },
  { path: 'pipe', component: PipeDemoComponent },
  { path: 'interpolation', component: InterpolationDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
