<template>
  <component :is="layout" v-if="isReady"></component>
  <loading-layout v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LoadingLayout, resolveLayout } from '@/layouts'
import keycloak, { initConfig } from '@/config/auth'

@Component({
  components: {
    LoadingLayout
  }
})
export default class App extends Vue {
  get layout() {
    return resolveLayout(this.$route.meta.layout)
  }

  get isReady(): boolean {
    return this.$store.getters.isReady
  }

  mounted() {
    keycloak.init(initConfig)
      .then(() => this.$store.dispatch('updateReadiness', { key: 'keycloak', isReady: true }))
      .catch(error => console.error('Failed to mark Keycloak as ready', error))

    keycloak.onAuthSuccess = () => {
      this.$store
        .dispatch('auth/login')
        .then(() => {
          if (this.$route.hash.includes('state')) {
            this.$router.push(this.$route.fullPath.replace(this.$route.hash, ''))
          }
        })
        .then(() => keycloak
          .loadUserProfile()
          .then(profile => this.$store.dispatch('auth/setProfile', profile))
        )
        .catch(error => console.error('Failed to log in', error))
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/vars";

  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    font-size: $font-size-main;
    margin: 0;
    min-height: 100%;
    padding: 0;
    position: relative;
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    width: 100%;
  }
</style>
