import React, {ReactElement} from 'react';
import { EmblaOptionsType } from "embla-carousel-react";
import {CarouselUi} from "@components/ui/carousel/CarouselUi";


const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const OPTIONS: EmblaOptionsType = { loop: true };

export const QuizGuide = (): ReactElement => {

  return (
    <CarouselUi items={SLIDES} options={OPTIONS} />
  );
};
