import "photoswipe/dist/photoswipe.css";
import type {FC} from "react";

import {Item, Gallery as PhotoswipeGallery} from "react-photoswipe-gallery";

type GalleryItem = {
  original: string;
  thumbnail?: string;
  width?: string;
  height?: string;
};

type GalleryProps = {
  items: GalleryItem[];
};

export const Gallery: FC<GalleryProps> = ({items}) => (
  <PhotoswipeGallery
    options={{showHideAnimationType: "zoom", thumbSelector: "true"}}
  >
    {items.map((item) => (
      <Item
        {...item}
        id={`${item.original}-pic`}
        cropped
        width={1920}
        height={1080}
      >
        {({ref, open}) => (
          <img
            ref={ref}
            onClick={open}
            src={item.thumbnail}
            className="w-[12rem] h-[12rem] object-cover cursor-zoom-in bg-white  z-10 transition-opacity duration-300 hover:opacity-20"
          />
        )}
      </Item>
    ))}
  </PhotoswipeGallery>
);
