import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

	@Input()
	photoCover:string= ""
	@Input()
	gameTitle:string= ""
	@Input()
	nameDeveloper:string= ""
	@Input()
	ps4Console:string= ""
	@Input()
	ps5Console:string= ""
	@Input()
	versionGame:string= ""
	@Input()
	priceValue:string= ""

  constructor() { }

  ngOnInit(): void {
  }

}
