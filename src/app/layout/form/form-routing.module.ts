import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '../../../../node_modules/@angular/forms';

const routes: Routes = [
    {
        path: '', component: FormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), ReactiveFormsModule],
    exports: [RouterModule]
})
export class FormRoutingModule {
}
