import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'onchain-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  constructor() { }
  ngOnChanges(): void {
  }

  @Input() public contractName!:string

  @Input() public blockchain_is_busy!:boolean;
  
  ngOnInit(): void {
  }

  
}
