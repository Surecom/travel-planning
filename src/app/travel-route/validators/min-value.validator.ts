/**
 * Created by Andrei_Furs on 3/6/2017.
 */
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function minValueValidator(minValue: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const value = control.value;
    const numValue: number = +value;
    if (numValue <= minValue) {
        return {'minValueValidator': {value}};
    } else {
      return null;
    }
  };
}
