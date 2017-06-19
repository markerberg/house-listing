import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): any {
    if (array){

      let sortField = args[0];
      let sortDirection = args[1];
      let modifer = 1;

      if(sortDirection === 'desc') {
        modifer = -1; // this flips the values in arr.sort
      }

      array.sort((a: any,b: any) => {
        //1 means a>b, -1 mean a<b, 0 mean they're equal
        if(a[sortField] < b[sortField]) {
          return -1 * modifer;
        } else if (a[sortField] > b[sortField]) {
          return 1 * modifer;
        } else {
          return 0;
        }
      });
      return array;
    }
  }

}
