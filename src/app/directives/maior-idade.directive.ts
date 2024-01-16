import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

// configurar pra dizer que é uma validadora e pertence as diretivas validadoras do angular
@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS, // permite adicionar novas diretivas validadoras
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})

export class MaiorIdadeDirective implements Validator {
  
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
      const dataNascimento = control.value
      const ano = new Date(dataNascimento).getFullYear()
      const anoAtual = new Date().getFullYear()
      const anoNascMais18 = ano + 18
      const ehMaior = anoNascMais18 <= anoAtual;

      return ehMaior ? null : {
        'maiorIdadeValidator': true
      }
  }
}
