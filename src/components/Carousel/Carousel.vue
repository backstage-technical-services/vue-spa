<template>
  <div class="carousel">
    <b-carousel :interval="interval * 1000" fade indicators>
      <b-carousel-slide
        :caption="image.text"
        :img-src="image.url"
        :key="image.url"
        caption-tag="p"
        v-for="image in images"
      />
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CarouselProps } from './types'

@Component
export default class Carousel extends Vue {
  @Prop() readonly images!: CarouselProps['images'];
  @Prop({ default: 10 }) readonly interval!: CarouselProps['interval'];
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/vars";

  ::v-deep .carousel-inner {
    height: 180px;
    overflow: hidden;
    width: 100%;

    ::v-deep .carousel-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      ::v-deep img {
        height: auto;
        width: auto;
      }
    }

    @media (min-width: map-get($grid-breakpoints, sm)) {
      height: 255px;
    }

    @media (min-width: map-get($grid-breakpoints, md)) {
      height: 345px;
    }

    @media (min-width: map-get($grid-breakpoints, lg)) {
      height: 465px;
    }

    @media (min-width: map-get($grid-breakpoints, xl)) {
      height: 480px;
    }

    @media (min-width: map-get($grid-breakpoints, xxl)) {
      height: 570px;
    }
  }

  ::v-deep .carousel-caption {
    background: rgba(0, 0, 0, 0.5);
    bottom: 0;
    left: 0;
    padding-bottom: 60px;
    width: 100%;
    color: #aaa;

    p {
      margin-bottom: 0;
    }
  }
</style>
