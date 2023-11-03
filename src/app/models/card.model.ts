export interface Card {
  image: string;
  date?: CardDate;
  title: string;
  description?: string;
  thesesList?: string[];
  buttonText?: string;
  buttonLink?: string;
  priceInEuro?: number;
  priceFromFlag?: boolean;
}
export interface CardDate {
  year?: string;
  month?: string;
  day?: string;
  weekday?: string;
}
