import "photoswipe/dist/photoswipe.css";
import type {FC} from "react";

import {Gallery as PhotoswipeGallery} from "react-photoswipe-gallery";
import CarouselItem from "./CarouselItem";

type GalleryItem = {
  original: string;
  thumbnail: string;
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
    {items.map((item, idx) => (
      <CarouselItem
        id={`${idx}-pic`}
        imageClassName="w-[12rem] h-[12rem]"
        original={item.original}
        thumbnail={item.thumbnail}
        key={idx}
      />
    ))}
  </PhotoswipeGallery>
);
