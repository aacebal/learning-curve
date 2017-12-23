import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningGraphComponent } from './learning-graph/learning-graph.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: LearningGraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
