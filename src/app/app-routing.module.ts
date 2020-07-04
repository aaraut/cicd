import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { DisplayComponent } from './display/display.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{path: '' , component: HomePageComponent},
{path: 'surveyForm' , component: SurveyFormComponent},
{path: 'display' , component: DisplayComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
