import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


/** components import section */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './components/home-page.component';
import { ClaimsListComponent } from './components/claims-list.component';
import { CreateClaimsComponent } from './components/create-claims.component';
import { AlertComponent } from './shared-components/alert-component/alert.component';
import { HeaderComponent } from './shared-components/header-component/header.component';
import { FooterComponent } from './shared-components/footer.component';
import { InputComponent } from './input.component';
import { TablesComponent } from './shared-components/tables/tables.component';
import { ObjectValuesPipe } from './shared-components/tables/table.pipe';
import { AdminComponent } from './admin/admin/admin.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    ClaimsListComponent,
    CreateClaimsComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    InputComponent,
    TablesComponent,
    ObjectValuesPipe,
    AdminComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
