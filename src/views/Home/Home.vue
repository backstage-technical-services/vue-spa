<template>
  <div class="landing-page">
    <div class="container">
      <carousel :images="carousel"/>
      <p>
        Backstage Technical Services is a society formed of students at the
        University of Bath, who provide technical expertise to other Students'
        Union Clubs and Societies and event organisers in Sound, Lighting and
        Stage Management.
      </p>
      <p>
        We offer support at a wide range of events including the Students'
        Union's Summer Ball and Freshers' Week, theatre performances from
        student and external performers, band and club nights in The Tub and
        many more.
      </p>
      <p>
        We work both on- and off-campus providing lighting, sound, set design,
        pyrotechnic, stage management and event management expertise.
      </p>
      <p>
        Whether you're interested in booking us to support your event, or are a
        student at the University of Bath interested in joining us, please
        explore the site and do not hesitate to
        <router-link to="/contact/enquiries">contact us</router-link>
        if you have any questions.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Carousel from '@/components/Carousel/Carousel.vue'
import { CarouselImage } from '@/components/Carousel/types'

@Component({
  components: {
    Carousel
  }
})
export default class Home extends Vue {
  readonly $title = 'Home'
  private readonly carousel: CarouselImage[] = [
    {
      text: 'BUSMS\' performance of Grease, 2015',
      url: '/carousel/grease2015.jpg'
    },
    {
      url: '/carousel/lighting_desk.jpg'
    }
  ]
}
</script>

<style lang="scss" scoped>
  .landing-page {
    margin-top: 0;
  }

  .carousel {
    margin-bottom: 3em;
  }
</style>
