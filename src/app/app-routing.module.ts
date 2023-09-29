import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { OnlineComponent } from './components/pages/online/online.component';
import { ExpertCourseComponent } from './components/pages/online/courses/expert/expert.component';
import { CoachCourseComponent } from './components/pages/online/courses/coach/coach.component';
import { BusinessCourseComponent } from './components/pages/online/courses/business/business.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      show: true,
      showChildren: false,
      navLabel: 'Home',
      title: 'Головна',
      description: 'Навчання завивці волосся. Курси, вебінари',
      icon: 'house',
    },
  },
  {
    path: 'online',
    component: OnlineComponent,
    children: [
      {
        path: 'expert',
        component: ExpertCourseComponent,
        data: { title: 'Курс Експерт з завивки волосся', show: true },
      },
      { path: 'coach', component: CoachCourseComponent, data: { title: 'Курс Тренер з завивки волосся', show: true } },
      {
        path: 'business',
        component: BusinessCourseComponent,
        data: { title: 'Курс Бізнес на завивці волосся', show: true },
      },
    ],
    data: {
      show: true,
      showChildren: true,
      navLabel: 'Онлайн курси',
      title: 'Онлайн курси',
      description: 'Онлайн курси з завивки волосся',
      icon: 'globe-alt',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
