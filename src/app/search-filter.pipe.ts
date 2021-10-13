import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any, args?: any): any {
    if (!items) return null;
    if (!args) return items;
    args = args.toLowerCase();
    return items.filter(function (item: any) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }
}
