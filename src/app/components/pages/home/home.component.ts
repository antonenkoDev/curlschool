import { Component } from '@angular/core';
import { Slide } from '../../../models/slide.model';
import { Card } from '../../../models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public slides: [Slide] = [
    {
      image: 'assets/home/images/curl-school-banner.jpg',
      title: 'Навчання завивці волосся',
      subtitle: 'З нами ви полюбите завивку волосся і навчитесь її робити',
      buttonText: '',
      buttonLink: '',
    },
  ];
  public currentSlide = 0;

  public studyPrograms: Card[] = [
    {
      image: 'assets/home/images/curly-studying-600px.jpg',
      title: 'Онлайн курси',
      buttonText: 'Детальніше',
      buttonLink: '/online',
      thesesList: [
        'Найзручніший спосіб навчання',
        'Лише практичні уроки',
        'Доступ до курсу 24/7 з усього світу',
        'Електронний сертифікат після закінчення',
      ],
    },
    {
      image: 'assets/home/images/seminars.jpg',
      title: 'Семінари',
      buttonText: 'Детальніше',
      buttonLink: '/offline/seminars',
      thesesList: [
        'Живе навчання в групах до 15 студентів',
        'Без привʼязки до брендів',
        'Відпрацювання на моделях',
        'Ексклюзивний досвід від міжнародних тренерів',
        'Унікальні практичні техніки',
        'Можливість отримати відповіді на ВСІ Ваші запитання',
      ],
    },
  ];

  setCurrentSlide(index: number): void {
    this.currentSlide = index;
  }
}
