import { Component } from '@angular/core';

/**
 * Generated class for the Box component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'box',
  templateUrl: 'box.html'
})
export class Box {

  text: string;

  constructor() {
    console.log('Hello Box Component');
    this.text = 'Hello World';
  }

}
