import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilterAng'})
export class SearchFilterPipeAng implements PipeTransform {
  transform(value: any, search: string): any {
    if  (!search) {return value; }
    let solution = value.filter(v => {
      if ( !v ) {return;}
      return  v['key'].toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    return solution;
  }
}
