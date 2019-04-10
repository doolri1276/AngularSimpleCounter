import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'geekMark'
})
export class GeekMarkerPipePipe implements PipeTransform {

  transform(value: any, level?: any): any {
    switch(level){
      case 'A':
        return `Oh Geek! ${value}`;
      case 'I':
        return `Good man, ${value}`;
      case 'B':
      default:
        return `Novice ${value}`;
    }

  }

}
