import {Pipe, PipeTransform} from '@angular/core';
import { EventService } from './event.service';
@Pipe({
    name:'timeInWords'
})
export class MyTimeWordsPipe implements PipeTransform {
    constructor(private eventService:EventService){}

    getAsPromise(hours, mins) {
        return new Promise(resolve => {
            this.eventService.getTimeInWords(hours, mins).subscribe(data => resolve(data))
        })
    }

    transform(hours, mins) {
        return 10
    }
}