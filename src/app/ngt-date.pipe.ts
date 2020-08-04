import {Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'ngtDate' })
export class NGTDatePipe implements PipeTransform {
    transform(date: number): string {
        let formattedDate: string;
        let stringFromNumber: string = date.toString();
        formattedDate = stringFromNumber[6] + stringFromNumber[7] + "/" + stringFromNumber[4] + stringFromNumber[5] + "/" + stringFromNumber[0] + stringFromNumber[1] + stringFromNumber[2] + stringFromNumber[3]
        return formattedDate;
    }
}