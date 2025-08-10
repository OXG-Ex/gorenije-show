import {Button} from "@mui/material";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import {useCallback, type FC, type ReactNode} from "react";

type CarouselProps = {
  items: ReactNode[];
  disableButtons?: boolean;
};

export const Carousel: FC<CarouselProps> = ({items, disableButtons}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [
    AutoScroll({active: true, playOnInit: true, speed: 1}),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-2">
          {items.map((item, idx) => (
            <div
              className="embla__slide shrink-0 flex items-center justify-center "
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>

        {!disableButtons && (
          <>
            <Button
              className="embla__prev absolute top-1/2 "
              onClick={scrollPrev}
            >
              Prev
            </Button>
            <Button
              className="embla__next absolute top-1/2 "
              onClick={scrollNext}
            >
              Next
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
