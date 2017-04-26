import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedProfile } from './components/profile/profile.page';

export const routes: Routes = [
  { path: 'shared/profile/profile', component: SharedProfile }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SharedProfile
  ]

})

export class SharedModule { }
