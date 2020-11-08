import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IsAuthorizedUserCanloadService } from './shared/service/is-authorized-user-canload.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IsAuthorizedUserCanloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
