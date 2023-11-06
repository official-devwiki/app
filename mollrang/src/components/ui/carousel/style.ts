import styled from "styled-components";

export const CarouselContainer = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 100%;
  --slide-height: 19rem;
  --brand-primary: rgb(47, 112, 193);
  --brand-secondary: rgb(116, 97, 195);
  padding: 1.6rem;
  position: relative;
  background-color: white;
  height: 500px;
  border-radius: 5px 5px 0 0;

  .embla__viewport {
    overflow: hidden;
    height: 100%;
  }
  
  .embla__container {
    backface-visibility: hidden;
    display: flex;
    touch-action: pan-y;
    margin-left: calc(var(--slide-spacing) * -1);
    height: 100%;
  }
  .embla__slide {
    flex: 0 0 var(--slide-size);
    min-width: 0;
    position: relative;
    height: 100%;
    padding: 1em;
  }
  .embla__slide__img {
    display: block;
    height: var(--slide-height);
    width: 100%;
    object-fit: cover;
  }
  
  .embla__slide__number {
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 1;
    border-radius: 50%;
    background-color: rgba(var(--background-site-rgb-value), 0.85);
    line-height: 4.6rem;
    font-weight: 900;
    text-align: center;
    pointer-events: none;
  }
  
  .embla__slide__number > p {
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
  }
`;
