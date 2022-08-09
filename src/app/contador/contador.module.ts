import { NgModule } from "@angular/core";
import { CuentaComponent } from './cuenta/cuenta.component';

@NgModule({
    declarations: [
        CuentaComponent,
    ],
    exports: [CuentaComponent],
    
})


export class ContadorModule {
}
