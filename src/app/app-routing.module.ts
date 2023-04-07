import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncObservableComponent } from './async-observable/async-observable.component';

const routes: Routes = [
   { path: "observable", component: AsyncObservableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
