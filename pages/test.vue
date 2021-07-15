<template>
  <div>
    {{ error }}
    <template v-if="$auth.loggedIn">
      Logged In {{ getName() }}
      <v-btn @click="logOut">
        Logout
      </v-btn>
      <v-btn @click="refreshToken">
        Refresh Token
      </v-btn>
    </template>
    <template v-else>
      <v-btn @click="loginPassportGrantFlow">
        Login Test with Passport
      </v-btn>
    </template>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      error: null
    }
  },
  methods: {
    getName () {
      return this.$auth.user.worker.name
    },
    logOut () {
      return this.$auth.logout()
    },
    refreshToken () {
      this.$auth.refreshTokens()
    },
    processSuccessfulLogin () {
      const self = this
      self.$router.push({
        path: '/dashboard',
        query: { ref: 'login' }
      })
    },
    loginPassportGrantFlow () {
      this.error = null
      // const self = this
      return this.$auth
        .loginWith('laravelPassportPassword', {
          data: {
            username: 'admin@admin.com',
            password: 'password'
          }
        }).then(() => {
          // self.processSuccessfulLogin()
        })
        .catch((e) => {
          this.error = e.response ? e.response.data.message : e.toString()
        })
    }

  }
}
</script>
