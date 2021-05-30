import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './Mycomponent/skills/skills.component';
import { HeroComponent } from './Mycomponent/hero/hero.component';
import { InternComponent } from './Mycomponent/intern/intern.component';
import { PorComponent } from './Mycomponent/por/por.component';
import { AboutComponent } from './Mycomponent/about/about.component';
import { CvComponent } from './Mycomponent/cv/cv.component';
import { SkexComponent } from './Mycomponent/skex/skex.component';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './Mycomponent/basic/basic.component';
import { EduComponent } from './Mycomponent/edu/edu.component';
import { ProjectComponent } from './Mycomponent/project/project.component';
import { CourseComponent } from './Mycomponent/course/course.component';
import { AwardComponent } from './Mycomponent/award/award.component';
import { ExtraComponent } from './Mycomponent/extra/extra.component';
@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    HeroComponent,
    InternComponent,
    PorComponent,
    AboutComponent,
    CvComponent,
    SkexComponent,
    BasicComponent,
    EduComponent,
    ProjectComponent,
    CourseComponent,
    AwardComponent,
    ExtraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
