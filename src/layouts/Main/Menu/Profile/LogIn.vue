<template>
  <b-link :href="loginLink" class="navbar-profile-link-wrapper">
    <div class="navbar-profile-link">
      <font-awesome-icon :icon="profileLinkIcon"></font-awesome-icon>
    </div>
  </b-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import keycloak, { loginRedirectUri } from '@/config/auth'

@Component
export default class LogIn extends Vue {
  private readonly profileLinkIcon = faUser

  get loginLink(): string {
    return keycloak.createLoginUrl({
      redirectUri: loginRedirectUri
    })
  }
}
</script>
