import { createContext } from 'react';

interface ISliderContext {
  changeSlide: (direction: -1 | 1) => void;
  currentSlide: number;
  slidesCount: number;
}

const defaultValue: ISliderContext = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeSlide: () => {},
  currentSlide: 1,
  slidesCount: 1,
};

export const SliderContext = createContext<ISliderContext>(defaultValue);
