import React, {ReactElement} from "react";
import useEmblaCarousel, {EmblaOptionsType} from "embla-carousel-react";
import {Typography} from "@components/common/Typography";
import Image from "next/image";
import * as S from './style';

interface Props<T> {
  options: EmblaOptionsType;
  items: T[];
}

export const CarouselUi: React.FC<Props<any>> = (props): ReactElement => {
  const {options, items} = props;
  const [emblaRef] = useEmblaCarousel(options)

  const imageSource = (index: number) => {
    const type = index !== 4 ? 'jpg' : 'jpeg';
    return `/images/sample/sample${index}.${type}`;
  }

  return (
    <S.CarouselContainer>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map((index) => (
            <div className="embla__slide" key={index}>

              <Typography $weight={'bold'} $variant={'body1'} $color={'textBlack000'}>Step {index+1}</Typography>
              <picture>
                <Image className={'embla__slide__img'} src={imageSource(index+1)} alt={'sample-guide'} width={120} height={80} />
              </picture>

              <div className="embla__slide__number">
                <Typography $weight={'bold'} $variant={'body2'} $color={'textBlack000'}>{index + 1} / {items.length}</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </S.CarouselContainer>
  )
}