import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap/alert';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    AlertModule,
    TooltipModule
  ]
})
export class MainModule { }