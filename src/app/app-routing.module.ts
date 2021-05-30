import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./Mycomponent/about/about.component"
import { CvComponent } from "./Mycomponent/cv/cv.component"
import { SkillsComponent } from './Mycomponent/skills/skills.component';

const routes: Routes = [
  { path: '', component: SkillsComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'cv', component:  CvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
