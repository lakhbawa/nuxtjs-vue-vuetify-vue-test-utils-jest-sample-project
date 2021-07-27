<script>
export default {
  data () {
    return {
      castingCallCategories: [
        {
          title: 'Modeling Jobs',
          to: '/modeling-jobs'
        },
        {
          title: 'Acting Jobs',
          to: '/acting-jobs'
        },
        {
          title: 'Movie Auditions',
          to: '/movie-auditions'
        }
      ]
    }
  },

  methods: {}
}
</script>
<template>
  <div style="background-color: #efefef;margin-top: 4rem;">
    <v-container class="py-15">
      <v-row>
        <v-col>
          <div style="position: relative">
            <v-img src="/images/homepage/auditions.png" />
          </div>
        </v-col>
        <v-col>
          <h3 class="primary--text" style="text-transform: uppercase">
            FOR ARTISTS
          </h3>
          <h1>
            Get notified of 100s of Relevant Casting Calls daily
          </h1>
          <p>
            Find latest casting calls, auditions from nearest places. Sign up and you will receive free notifications
            regarding the casting calls suitable to your skills
          </p>
          <div>
            <ul>
              <li>
                Find Perfect casting call faster
              </li>
              <li>
                Tips and tricks to be successful in film industry
              </li>
              <li>
                Free Online Portfolio that you can share with anyone
              </li>
              <li>
                Thousands of Casting Directors can see you profile and contact you
              </li>
            </ul>
          </div>
          <h3 class="mt-4 mb-2 font-weight-medium">
            Casting Call Categories:
          </h3>
          <v-btn v-for="(castingCallCategory,index) in castingCallCategories" :key="index" rounded outlined class="mr-3 mb-3 mb-sm-0">
            {{ castingCallCategory.title }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped></style>
