import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaPagina } from './minha-pagina';

@NgModule({
  declarations: [
    MinhaPagina,
  ],
  imports: [
    IonicPageModule.forChild(MinhaPagina),
  ],
  exports: [
    MinhaPagina
  ]
})
export class MinhaPaginaModule {}
