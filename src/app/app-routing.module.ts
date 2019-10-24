import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** components import here for config routing */
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ClaimsListComponent } from './components/claims-list/claims-list.component';
import { CreateClaimsComponent } from './components/create-claims/create-claims.component';
import { AdminComponent } from './admin/admin/admin.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';


/* config routing */
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'claim-list', component: ClaimsListComponent },
  { path: 'create-claims', component: CreateClaimsComponent },
  { path: 'admin', component: AdminComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
