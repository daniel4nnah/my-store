import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterToNumber'
})
export class LetterToNumberPipe implements PipeTransform {

  transform(value: string): string {
    var s = [];
    s = value.split('');
    var final = s;
    for (let i = 0; i < s.length; i++){
      var letter = '';
      console.log('letra', s[i]);
      switch(letter = s[i]){
        case letter = 'a':
          final[i] = '4';
          break;
        case letter = 'e':
          final[i] = '3';
          break;
        case letter = 'i':
          final[i] = '1';
          break;
        case letter = 'o':
          final[i] = '0';
          break;
        case letter = 'u':
          final[i] = '9';
          break;
        default:
          break;
      }
    }
    return final.join('');
  }

}
