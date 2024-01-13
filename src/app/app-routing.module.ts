import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspritComponent } from './esprit/esprit.component';
import { FormationComponent } from './formation/formation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'esprit', component: EspritComponent },
  { path: 'formation', component: FormationComponent },
  { path: '', redirectTo: '/esprit', pathMatch: 'full' }, // Redirect to /esprit by default

  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
