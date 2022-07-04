import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pokemon/components';


const routes: Routes = [
  { path: '', redirectTo: "pokemons", pathMatch: "full" },
  // A définir en dernier => page 404
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
