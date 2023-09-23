import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
      loginForm: FormGroup;

      constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService){}

      ngOnInit(): void {
          this.loginForm = this.formBuilder.group({
              userName: ['', Validators.required],
              password: ['', Validators.required]
          });
      }

      login(){
          const userName = this.loginForm.get('userName').value;
          const password = this.loginForm.get('password').value;
          this.authService
          .authenticate(userName,password)
          .subscribe(
            () => console.log('Sucesso.'),
            err => {
              console.log('Falha na Autenticação')
              this.loginForm.reset(),
              alert('Username or/and password invalid')
            }
          )
      }
}
