import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConceptComponent } from './pages/product/concept/concept.component';

const routes: Routes = [
	{path: '', component: HomeComponent },
	{path: 'concept/:id', component: ConceptComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
