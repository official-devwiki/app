import {ReactElement} from 'react';
import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import styled from "styled-components";


type Props = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
};

const Embla = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 19rem;
  --brand-primary: rgb(47, 112, 193);
  --brand-secondary: rgb(116, 97, 195);
  
    padding: 1.6rem;

  .embla__viewport {
    overflow: hidden;
  }
  .embla__container {
    backface-visibility: hidden;
    display: flex;
    touch-action: pan-y;
    margin-left: calc(var(--slide-spacing) * -1);
  }
  .embla__slide {
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
    position: relative;
  }
  .embla__slide__img {
    display: block;
    height: var(--slide-height);
    width: 100%;
    object-fit: cover;
  }
  .embla__slide__number {
    width: 4.6rem;
    height: 4.6rem;
    z-index: 1;
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    border-radius: 50%;
    background-color: rgba(var(--background-site-rgb-value), 0.85);
    line-height: 4.6rem;
    font-weight: 900;
    text-align: center;
    pointer-events: none;
  }
  .embla__slide__number > span {
    color: var(--brand-primary);
    background-image: linear-gradient(
            45deg,
            var(--brand-primary),
            var(--brand-secondary)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.6rem;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;


import {Typography} from "@components/common/Typography";


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

export const QuizGuide = (props: PropType): ReactElement => {
  const { options, slides } = props; // props로 가져온 옵션과 슬라이드 리스트
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <Embla>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Typography>Text{index+1}</Typography>
            </div>
          ))}
        </div>
      </div>
    </Embla>
  );
};
