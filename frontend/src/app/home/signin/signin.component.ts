import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
      loginForm: FormGroup;

      constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router){}

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
            //() => this.router.navigateByUrl('user/'+userName),
            () => this.router.navigate(['user',userName]),
            err => {
              console.log('Falha na Autenticação')
              this.loginForm.reset(),
              alert('Username or/and password invalid')
            }
          )
      }
}
