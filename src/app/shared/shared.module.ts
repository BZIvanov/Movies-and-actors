import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownMenuDirective } from './directives/dropdown-menu.directive';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    DropdownMenuDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
