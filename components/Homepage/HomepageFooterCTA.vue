<script>
export default {
  data () {
    return {}
  },

  methods: {}
}
</script>
<template>
  <div class="primary" style="margin-top: 8rem;position: relative">
    <v-container>
      <v-row>
        <v-col class="d-none d-sm-block" cols="0" sm="4" style="margin-top: -5rem;flex-grow: 0">
          <v-img
            contain
            height="350"
            width="350"
            src="/images/homepage/pointing_girl.png"
          />
        </v-col>
        <v-col>
          <div class="ml-sm-8">
            <h2 style="font-size: 3rem" class="my-8">
              Ready to get started?
            </h2>
            <v-btn color="secondary" large rounded>
              Sign up for Free
            </v-btn>
            <v-btn color="secondary" outlined large rounded>
              Contact us
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-img class="d-none d-sm-block" src="/images/homepage/vector1.svg" style="position: absolute;top:1px;left:1px;opacity: 0.5"></v-img>

    <v-img class="d-none d-sm-block" src="/images/homepage/vector.svg" style="position: absolute;bottom:1px;right:1px;opacity: 0.5"></v-img>
  </div>
</template>
<style lang="scss" scoped></style>
