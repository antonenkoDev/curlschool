export interface Card {
  image: string;
  date?: CardDate;
  title: string;
  description?: string;
  thesesList?: string[];
  buttonText?: string;
  buttonLink?: string;
}
export interface CardDate {
  year?: string;
  month?: string;
  day?: string;
  weekday?: string;
}
