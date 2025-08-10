import {Button} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import {useCallback, type FC, type ReactNode} from "react";

type CarouselProps = {
  items: ReactNode[];
};

export const Carousel: FC<CarouselProps> = ({items}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {items.map((item, idx) => (
            <div
              className="embla__slide w-full grow-0 shrink-0 basis-full flex items-center justify-center "
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>

        <Button className="embla__prev absolute top-1/2 " onClick={scrollPrev}>
          Prev
        </Button>
        <Button className="embla__next absolute top-1/2 " onClick={scrollNext}>
          Next
        </Button>
      </div>
    </div>
  );
};
