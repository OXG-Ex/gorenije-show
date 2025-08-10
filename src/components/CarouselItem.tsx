import clsx from "clsx";
import {useState, type FC} from "react";
import {Item} from "react-photoswipe-gallery";

interface CarouselItemProps {
  original: string;
  thumbnail: string;
  id: string;
  imageClassName: string;
}

const CarouselItem: FC<CarouselItemProps> = ({imageClassName, ...props}) => {
  const [size, setSize] = useState({width: 0, height: 0});

  return (
    <Item {...props} cropped height={size.height} width={size.width}>
      {({ref, open}) => (
        <img
          ref={ref}
          onClick={open}
          src={props.thumbnail}
          loading="lazy"
          onLoad={(image) =>
            setSize({
              width: image.currentTarget.naturalWidth,
              height: image.currentTarget.naturalHeight,
            })
          }
          className={clsx(
            "object-cover cursor-zoom-in z-10 transition-opacity duration-300 hover:opacity-20",
            imageClassName
          )}
        />
      )}
    </Item>
  );
};

export default CarouselItem;
