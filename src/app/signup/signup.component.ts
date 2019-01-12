import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    error: any;
    signupForm: FormGroup;
        constructor(private translate: TranslateService,
            private authService: AuthService,
            private router: Router,
            private fb: FormBuilder) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
    }

    ngOnInit() {
        this.signupForm = this.fb.group({
            name: [''],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    signUpWithEmail() {
        this.authService.signUpRegular(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password)
           .then((res) => {
              this.router.navigate(['/login']);
           })
           .catch((err) => this.error = err);
     }
}
