import { Component, numberAttribute } from '@angular/core';
import { Slide } from '../../../models/slide.model';
import { Card } from '../../../models/card.model';
import { convertEuroToUah } from '../../../helpers/convert-euro-to-uah';

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

  public cards: Card[] = [
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
      priceFromFlag: true,
      priceInEuro: 249,
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
      priceInEuro: 50,
      priceFromFlag: true,
    },
    {
      image: 'assets/home/images/consultation-600px.jpg',
      title: 'Індивідуальні консультації',
      buttonText: 'Детальніше',
      buttonLink: '/online/consultation',
      thesesList: [
        'Дамо відповіді на всі питання',
        'Підберемо схему роботи з конкретним клієнтом',
        'Покроково допоможемо досягти вершин майстерності',
        'Допоможемо відкрити свою "Судію завивок"',
      ],
      priceFromFlag: true,
      priceInEuro: 10,
    },
    {
      image: 'assets/home/images/seminars_abroad.jpg',
      title: 'Виїздні семінари',
      buttonText: 'Детальніше',
      buttonLink: '/offline/adbroad',
      thesesList: [
        'Приїдемо у Вашу країну та місто',
        'Навчимо працювати на косметиці будь-якого бренду',
        'Проведемо майстер-клас для великої аудиторії',
        'Проведемо семінар з відпрацюванням для групи до 10 людей',
      ],
      priceFromFlag: true,
      priceInEuro: 500,
    },
    {
      image: 'assets/home/images/video-lessons.jpg',
      title: 'Записи семінарів',
      buttonText: 'Детальніше',
      buttonLink: '/online/seminars',
      thesesList: [
        'Записи минулих семінарів',
        'Концентрат знань',
        'Крупним планом всі етапи виконня завивки',
        'Ексклюзивні рекомендації викладачів',
        'Відповіді на питання з залу',
      ],
      priceInEuro: 35,
      priceFromFlag: true,
    },
  ];

  setCurrentSlide(index: number): void {
    this.currentSlide = index;
  }

  protected readonly convertEuroToUah = convertEuroToUah;
}
