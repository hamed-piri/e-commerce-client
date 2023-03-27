import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import { TestErrorComponent } from './test-error/test-error.component';



@NgModule({
  declarations: [
    NavBarComponent,
    TestErrorComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { }
