import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilterPL'})
export class SearchFilterPipePL implements PipeTransform {
  transform(value: any, search: string): any {
    if  (!search) {return value; }
    let solution = value.filter(v => {
      if ( !v ) {return;}
      return  v['word'].toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    return solution;
  }
}
