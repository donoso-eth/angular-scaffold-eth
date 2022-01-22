import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNftExampleComponent } from './simple-nft-example/simple-nft-example.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { blockchain_imports, blockchain_providers } from './blockchain_wiring';
import { OnChainService } from './on-chain.service';



@NgModule({
  declarations: [
    SimpleNftExampleComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    blockchain_imports
  ],
  providers:[...blockchain_providers,OnChainService],
  exports: [
    SimpleNftExampleComponent
  ]
})
export class SimpleNftExampleModule { }
