/**
 * Created by user on 17.07.17.
 */
import {AbstractControl} from '@angular/forms';
import {FormGroup} from '@angular/forms';
export class PasswordValidation {

  // static MatchPassword(AC: AbstractControl) {
  //   const password = AC.get('password').value; // to get value in input tag
  //   const confirmPassword = AC.get('confPassword').value; // to get value in input tag
  //   if (password !== confirmPassword) {
  //     console.log('false');
  //     AC.get('confPassword').setErrors( {MatchPassword: true} );
  //   } else {
  //     console.log('true');
  //     return null;
  //   }
  // }

  static MatchPassword(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }
}
