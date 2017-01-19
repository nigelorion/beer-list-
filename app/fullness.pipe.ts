import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';


@Pipe({
  name: "fullness",
  pure: false
})

export class FullnessPipe implements PipeTransform {

    transform(input: Keg[], fullness){
      var output: Keg[] = [];
      if (fullness === "lowKegs"){

        for (var i = 0; i < input.length; i++) {
          if (input[i].pints <= 50) {
            output.push(input[i]);
          }
        }
        return output;
      } else {

      return input;
      }
    }


}
