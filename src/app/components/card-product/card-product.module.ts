import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoCoverComponent } from './photo-cover/photo-cover.component';
import { CardProductComponent } from './card-product.component';
import { CardLabelProductComponent } from './card-label-product/card-label-product.component';
import { ProductButtonComponent } from './product-button/product-button.component'


@NgModule({
  declarations: [
		PhotoCoverComponent,
  	CardProductComponent,
   	CardLabelProductComponent,
   	ProductButtonComponent,
	],
  imports: [
    CommonModule,
  ],
	exports:[
		PhotoCoverComponent,
		CardProductComponent,
		CardLabelProductComponent,
		ProductButtonComponent,
	]
})
export class CardProductModule { }
