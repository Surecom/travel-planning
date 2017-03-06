/**
 * Created by Andrei_Furs on 3/6/2017.
 */
import { AbstractControl } from '@angular/forms';

export function numberValidator(control: AbstractControl): {[key: string]: any} {
  const value = control.value;
  const numValue: number = +value;
  if (isNaN(numValue)) {
    return {'numberValidator': {value}};
  } else {
    return null;
  }
}
