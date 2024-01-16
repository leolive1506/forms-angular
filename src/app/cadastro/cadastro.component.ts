import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['./sucesso'])
    } else {
      alert('form invalido')
    }

  }

  consultaCep(event: any, f: NgForm): void {
    const cep = event.target.value
    if (cep !== '') {
      this.cepService.getConsultaCep(cep).subscribe((data) => this.populandoEndereco(data, f))
    }
  }

  populandoEndereco(data: any, f: NgForm) {
    console.log(data.logradouro)
    f.form.patchValue({
      endereco: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    })
  }
}
