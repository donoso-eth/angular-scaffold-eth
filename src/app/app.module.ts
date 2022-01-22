import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNftExampleModule } from './dapp/demos/3-simple-nft-example/simple-nft-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNftExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
