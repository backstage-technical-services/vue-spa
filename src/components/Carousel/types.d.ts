export interface CarouselImage {
  url: string;
  text?: string;
}

export interface CarouselProps {
  images: CarouselImage[];
  interval: number;
}
