import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListActasComponent } from './list-actas/list-actas.component';
import { AddActasComponent } from './add-actas/add-actas.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { DeleteActasComponent } from './delete-actas/delete-actas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListActasComponent,
    AddActasComponent,
    HeaderAppComponent,
    DeleteActasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
