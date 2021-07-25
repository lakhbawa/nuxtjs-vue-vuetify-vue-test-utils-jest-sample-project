<script>
export default {
  data () {
    return {}
  },

  methods: {}
}
</script>
<template>
  <v-container style="margin-top: 4rem;">
    <v-row>
      <v-col>
        <h3 class="primary--text" style="text-transform: uppercase">
          Finding Talent made easier
        </h3>
        <h1>
          Find Perfect match for any Roletype in record Time
        </h1>
        <p>
          With castkro, finding the perfect models, actors, writers etc will takes days instead of months
        </p>
        <div>
          <ul>
            <li>
              Get access to the the database of thousands of artists
            </li>
            <li>
              Check the Full Portfolio of artist for free
            </li>
            <li>
              Free Application dashboard to check the artist applications
            </li>
            <li>
              Organize and save the Artist profiles in lists
            </li>
          </ul>
        </div>
        <div class="mt-4">
          <v-btn color="secondary" rounded large>
            Browse Artists Database
          </v-btn>
        </div>
      </v-col>
      <v-col>
        <div style="position: relative">
          <v-img src="/images/homepage/finding-talent-made-easy.png" />
          <div style="position: absolute;bottom: 3rem;right: -2rem">
            <v-btn color="primary" rounded>
              Find Models
            </v-btn>
          </div>
          <div style="position: absolute;bottom: 6rem;right: -2rem">
            <v-btn color="secondary" rounded>
              Find Actors
            </v-btn>
          </div>
          <div style="position: absolute;top: 4rem;left: -2rem">
            <v-btn color="secondary" rounded>
              Find Writers
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>
