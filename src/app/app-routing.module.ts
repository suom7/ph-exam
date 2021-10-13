import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaIiComponent } from './area-ii/area-ii.component';
import { AreaIIiiIvComponent } from './area-i-iii-iv/area-i-iii-iv.component'; // CLI imports router

const routes: Routes = [
  { path: 'area-ii', component: AreaIiComponent },
  { path: 'area-i-iii-iv', component: AreaIIiiIvComponent },
  { path: '', redirectTo: 'area-ii', pathMatch: 'full'},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
