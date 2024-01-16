# Formulários Angular
1. Template drive
- todo implementado no template do componente
- necessita da importação do módulo **FormsModule**
- funciona de forma assincrona
2. Data drive ou Reactive Forms
- Toda lógica é feita no componente
- Necessário importar o modulo **ReactiveFormsModule**
- Funciona de forma sincrona

# Template drive
- Criar uma variavel de referencia do formulario
```html
<!-- #f atraves dessa variavel acessa recurso que ngForm vai disponibilizar -->
<form #f="ngForm"></form>
```
- ngModel
  - faz referencia ao name do input e cria instancia de cada modelo do formulario 
  - ngForm valida form por inteiro, ngModel valida por input
  - tem algumas diretivas pra usar no input semalhantes html puro
```html
<input
  name="nome"
  id="nome"
  class="campo__escrita"
  ngModel
  required
  minlength="2"
  #nome="ngModel"
>

<!-- f.controls['nome']?.dirty -> campo foi mexido -->
<!-- <div
  *ngIf="f.controls['nome']?.invalid && f.controls['nome']?.touched || f.controls['nome']?.dirty">
  <span class="erro__texto" *ngIf="f.controls['nome']?.errors?.['required']">O nome é obrigatório</span>
  <span class="erro__texto" *ngIf="f.controls['nome']?.errors?.['minlength']">O nome deve ter no minimo 2 caracteres</span>
</div> -->
<div
  *ngIf="nome?.invalid && nome?.touched || nome?.dirty"
>
  <span class="erro__texto" *ngIf="nome?.errors?.['required']">O nome é obrigatório</span>
  <span class="erro__texto" *ngIf="nome?.errors?.['minlength']">O nome deve ter no minimo 2 caracteres</span>
</div>
```