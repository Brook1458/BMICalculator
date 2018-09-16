import { Component } from '@angular/core';

import { AboutPage, CalculatorPage } from '../index';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  aboutTab = AboutPage;
  calculatorTab = CalculatorPage;

  constructor() {

  }
}
