import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalPipe'
})
export class CapitalPipePipe implements PipeTransform {

  makeCapital(str) {
    
    let splitStr = str.toLowerCase().replace(/ +/g, ' ').split(' ');
    console.log('procedured string - ', splitStr);
    for (let i = 0; i < splitStr.length; i ++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      str = splitStr.join(' ');
    }
    return str;
  }

  transform(value: any, ...args: any[]): any {
    return this.makeCapital(value);
  }

}
