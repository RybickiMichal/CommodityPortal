import {Component, Input, OnInit} from '@angular/core';
import {Commodity} from "../../app.module";

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  @Input() commodities: Commodity[] = [];
  @Input() rawMaterialName: String = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  isHigherThanActual(numberToCompare: string, number: string) {
    return parseFloat(numberToCompare) > parseFloat(number);
  }
  isLowerThanActual(numberToCompare: string, number: string) {
    return parseFloat(numberToCompare) < parseFloat(number);
  }
}
