<script>
export default {
  data () {
    return {}
  },

  methods: {}
}
</script>
<template>
  <div>
    <v-container class="py-0 px-0">
      <v-toolbar flat class="px-0">
        <v-toolbar-title><v-img src="/logo.svg" /></v-toolbar-title>

        <v-toolbar-items>
          <v-btn text style="font-weight: normal">
            Casting Calls
          </v-btn>
          <v-btn text style="font-weight: normal">
            Find Talent
          </v-btn>
          <v-btn text style="font-weight: normal">
            Casting Director <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
          <v-btn text style="font-weight: normal">
            Talent <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
          <!--          <v-btn text style="font-weight: normal">-->
          <!--            Blog <v-icon>mdi-chevron-down</v-icon>-->
          <!--          </v-btn>-->
<!--          <v-btn text style="font-weight: normal">-->
<!--            More <v-icon>mdi-chevron-down</v-icon>-->
<!--          </v-btn>-->
        </v-toolbar-items>
        <v-spacer />

        <v-btn outlined color="secondary">
          Sign up Free
        </v-btn>
        <v-btn color="primary" dark class="mx-2">
          Post Casting Call
        </v-btn>
      </v-toolbar>
    </v-container>
  </div>
</template>
<style lang="scss" scoped></style>
