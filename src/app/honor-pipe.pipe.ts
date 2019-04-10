import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'honor'
})
export class HonorPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value}님`; //리턴값에 어떤식으로 반환되는지 정의
  }

}
