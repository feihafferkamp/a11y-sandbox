import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  exports: [HomeComponent, MainNavComponent]
})
export class CoreModule { }
