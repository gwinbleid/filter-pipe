import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(data: any[], value: any): any[] {
        if (Object.keys(value).length !== 0) {
            for (let a in value) {
                if (a === 'all') {
                    return value['all'] === undefined ? data
                        : data.filter(p => {
                            for (let m in p) {
                                if (String(p[m]).toLowerCase().includes(String(value['all']).toLowerCase())) {
                                    return true;
                                }
                            }
                        });
                } else {
                    return value[a] === undefined ? data
                    : data.filter(p => {
                        if (String(p[a]).toLowerCase().includes(String(value[a]).toLowerCase())) {
                            return true;
                        }
                    });
                }
            }
        } else {
            return data;
        }
    }
}
