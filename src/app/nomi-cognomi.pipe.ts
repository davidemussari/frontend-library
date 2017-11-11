import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomiCognomi'
})
export class NomiCognomiPipe implements PipeTransform {

    str: string = "";
    autoriArray: any;

  transform(autori: string): any {
    this.str = "";
    this.autoriArray = autori.split(';');
    for (let persona of this.autoriArray){
    persona = persona.split(',');
    this.str += persona[0] + persona[1] + ' <br/><br/>';
    }
    return this.str;
  }

}
