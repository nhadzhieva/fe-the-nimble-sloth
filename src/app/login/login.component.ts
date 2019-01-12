import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { FormControl } from '../../../node_modules/@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    error: any;
    loginForm: FormGroup;
    constructor(
        private translate: TranslateService,
        public router: Router,
        private authService: AuthService,
        private fb: FormBuilder
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    loginWithEmail() {
        this.authService.signInRegular(this.loginForm.value.email, this.loginForm.value.password)
        .then((res) => {
            this.router.navigate(['/dashboard']);
        })
        .catch((err) =>
        //  console.log('error: ' + err)
         this.error = err
        );
        }
}