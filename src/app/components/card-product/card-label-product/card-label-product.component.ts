import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-label-product',
  templateUrl: './card-label-product.component.html',
  styleUrls: ['./card-label-product.component.css']
})
export class CardLabelProductComponent implements OnInit {

	@Input()
	gameTitle:string = ""
	@Input()
	nameDeveloper:string = ""
	@Input()
	ps4Console:string = ""
	@Input()
	ps5Console:string = ""
	@Input()
	versionGame:string = ""
	@Input()
	priceValue:string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
