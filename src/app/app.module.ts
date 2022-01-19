import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldContractModule } from './dapp/demos/1-hello-world-contract/hello-world-contract.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugContractModule } from './dapp/demos/2-debug-contract/debug-contract.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloWorldContractModule,
    BrowserAnimationsModule,
    DebugContractModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
