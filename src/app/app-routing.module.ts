import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningGraphComponent } from './learning-graph/learning-graph.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
