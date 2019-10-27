<template>
  <div>
    <div>
      <font-awesome-icon :icon="icons.email"/>
      <a :href="emailLink">info@bts-crew.com</a>
    </div>
    <div>
      <font-awesome-icon :icon="icons.phone"/>
      <span>+44 (0) 1225 383067</span>
    </div>
    <div>
      <font-awesome-icon :icon="icons.office"/>
      <span>1E 3.4</span>
    </div>
    <div>
      <font-awesome-icon :icon="icons.address"/>
      <span>The SU, University of Bath, Bath, BA2 7AY</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AboutProps } from '@/layouts/Main/Footer/types'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHome, faMapMarker, faPhone } from '@fortawesome/pro-regular-svg-icons'

@Component
export default class About extends Vue {
  private emailAddress: AboutProps['emailAddress'] = 'info@bts-crew.com';
  private icons: AboutProps['icons'] = {
    email: faEnvelope,
    phone: faPhone,
    office: faHome,
    address: faMapMarker
  };

  get emailLink(): string {
    return `mailto:${this.emailAddress}`
  }
}
</script>

<style lang="scss" scoped>
  div {
    line-height: 1.4;
  }

  .svg-inline--fa {
    margin-right: 0.5em;
    text-align: center;
    width: 2em;
  }
</style>
