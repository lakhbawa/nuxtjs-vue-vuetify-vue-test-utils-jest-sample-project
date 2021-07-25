<script>
export default {
  data () {
    return {
      profiles: [
        {
          id: 1,
          name: 'Alex Garret',
          age_range: '11-20',
          image: '/images/artists/artist1.png',
          location: { city: 'Mumbai, india' },
          roletypes: [{ title: 'Model' }],
          height: '5.11 ft',
          weight: '75kg',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 1,
          name: 'Alex Garret',
          age_range: '11-20',
          image: 'https://randomuser.me/api/portraits/men/35.jpg',
          location: { city: 'Mumbai, india' },
          roletypes: [{ title: 'Model' }],
          height: '5.11 ft',
          weight: '75kg',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 1,
          name: 'Alex Garret',
          age_range: '11-20',
          image: 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg',
          location: { city: 'Mumbai, india' },
          roletypes: [{ title: 'Model' }],
          height: '5.11 ft',
          weight: '75kg',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 1,
          name: 'Alex Garret',
          age_range: '11-20',
          image: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
          location: { city: 'Mumbai, india' },
          roletypes: [{ title: 'Model' }],
          height: '5.11 ft',
          weight: '75kg',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 1,
          name: 'Alex Garret',
          age_range: '11-20',
          image: 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg',
          location: { city: 'Mumbai, india' },
          roletypes: [{ title: 'Model' }],
          height: '5.11 ft',
          weight: '75kg',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          id: 1,
          name: 'Alex Garret',
          age_range: '11-20',
          image: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
          location: { city: 'Mumbai, india' },
          roletypes: [{ title: 'Model' }],
          height: '5.11 ft',
          weight: '75kg',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
      ]
    }
  },

  methods: {}
}
</script>
<template>
  <v-container style="">
    <v-row class="my-4">
      <v-col>
        <h1>
          Find and Cast the Perfect Artists for you requirement
        </h1>
      </v-col>
      <v-col style="flex-grow: 0">
        <v-btn color="secondary" large rounded outlined>
          Create Free Profile
        </v-btn>
      </v-col>
    </v-row>

    <p>
      Search and Filter the Database of thousands of actors, models etc
    </p>
    <v-row class="">
      <v-col cols="12" sm="3">
        <v-btn rounded color="secondary" large width="250" class="mb-4">
          Find Models
        </v-btn>
        <v-btn outlined rounded large width="250" class="mb-4">
          Find Actors
        </v-btn>
        <v-btn outlined rounded large width="250" class="mb-4">
          Find Writers
        </v-btn>
        <v-btn outlined rounded large width="250" class="mb-4">
          Find Actors
        </v-btn>
        <v-btn outlined rounded large width="250" class="mb-4">
          Find Writers
        </v-btn>
      </v-col>
      <v-col>
        <v-row>
          <v-col v-for="profile in profiles" :key="profile.id" cols="12" sm="4">
            <template>
              <v-card class="mx-auto" max-width="344">
                <nuxt-link :to="'/artist/'+profile.id">
                  <div style="position: relative">
                    <v-img
                      :src="profile.image"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      aspect-ratio="1"
                      class="has-cursor-pointor"

                      height="280px"
                      :alt="`artist biography` "
                    />
                    <v-btn small style="position: absolute;bottom: 5px;right: 5px">
                      Mumbai, India
                    </v-btn>
                  </div>
                </nuxt-link>

                <v-card-text>
                  <div
                    v-if="true"
                    class="text-right"
                    style="font-size: 0.95rem"
                  >
                    <v-chip-group
                      class="buttons"
                      style="justify-content: flex-end"
                    >
                      <v-chip
                        v-for="(roletype, index) in profile.roletypes"
                        :key="index"
                        class="is-success is-outlined is-small is-shadowless"
                        color="primary"
                        outlined
                        small
                      >
                        {{ roletype.title }}
                      </v-chip>
                    </v-chip-group>
                  </div>

                  <v-row class="columns is-mobile font-weight-medium" no-gutters>
                    <v-col class="column" cols="8">
                      <nuxt-link
                        :to="'/artist/' + parseInt(profile.id)"
                        class="font-weight-medium"
                        style="font-weight: 600"
                      >
                        <strong style="text-decoration: none">{{ profile.name }}</strong>
                      </nuxt-link>
                    </v-col>
                    <v-col class="column text-right is-narrow">
                      <v-icon>mdi-bookmark-outline</v-icon>
                    </v-col>
                  </v-row>
                  <div class="my-2">
                    <div class="profile__info worker__quick_bar" style="">
                      <v-icon>mdi-human-male-height</v-icon>
                      <span v-if="profile.height">
                        {{ profile.height }} </span><span v-else> - </span>
                      <v-icon>mdi-scale-bathroom</v-icon>
                      <span v-if="profile.weight">
                        {{ profile.weight }} </span><span v-else> - </span>
                      <v-icon>mdi-face</v-icon>
                      <span v-if="profile.age_range"> {{ profile.age_range }} Y</span><span v-else> - </span>
                    </div>
                  </div>

                  <section class="mt-1">
                    <span class="text-caption">
                      {{ profile.info }}
                    </span>
                  </section>
                </v-card-text>

                <div class="text-center py-2">
                  <v-btn
                    :to="'/artist/' + parseInt(profile.id)"
                    class="primary--text font-weight-medium"
                    text
                  >
                    <span>View Profile</span>
                  </v-btn>
                </div>
              </v-card>
            </template>
          </v-col>
        </v-row>
        <div class="text-center my-5">
          <v-btn outlined rounded color="secondary">
            Load More Profiles
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>
