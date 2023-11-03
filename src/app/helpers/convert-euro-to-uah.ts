import { EuroToUahRate } from '../config/exchange-rate';

export function convertEuroToUah(price: number): number {
  return price * EuroToUahRate;
}
