import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: FormularioComponent }
];

@NgModule({
    declarations: [
        FormularioComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes) // Configura las rutas del módulo
    ]
})
export class FormularioModule { }