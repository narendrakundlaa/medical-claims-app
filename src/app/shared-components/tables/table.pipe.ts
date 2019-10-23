import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'objectValues'
})
export class ObjectValuesPipe implements PipeTransform {
    transform(obj: any) {
        const result = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result.push(obj[key]);
            }
        }
        return result;
    }
}
