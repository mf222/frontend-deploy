import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NormalProfile } from './components/profile.page';

export const routes: Routes = [
  { path: 'normal/profile', component: NormalProfile }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NormalProfile
  ]

})

export class NormalModule { }
