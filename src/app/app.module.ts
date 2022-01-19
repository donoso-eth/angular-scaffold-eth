import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MinimalContractModule } from './dapp/demos/0-minimal-contract/minimal-contract.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MinimalContractModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
