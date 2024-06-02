import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-1',
  templateUrl: './product-card-1.component.html',
  styleUrls: ['./product-card-1.component.scss']
})
export class ProductCard1Component {
  @Input() product: any;

}
