import useEmblaCarousel from "embla-carousel-react";
import {type FC, type ReactNode} from "react";

type CarouselProps = {
  items: ReactNode[];
};

export const Carousel: FC<CarouselProps> = ({items}) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
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
    </div>
  );
};
