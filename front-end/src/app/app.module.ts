import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule,AlertConfig } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { MainComponent } from './main/main.component';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent
   ],
   imports: [
      BrowserAnimationsModule,
      BrowserModule,
      AccordionModule,
      AlertModule,
      ButtonsModule,
      FormsModule,
      CarouselModule,
      CollapseModule,
      BsDatepickerModule.forRoot(),
      BsDropdownModule,
      ModalModule
   ],
   providers: [AlertConfig, BsDatepickerConfig, BsDropdownConfig,BsModalService],
   bootstrap: [AppComponent]
})
export class AppModule { }