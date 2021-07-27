<script>
export default {
  data () {
    return {
      castingCallTypes: [
        {
          title: 'Modeling Jobs',
          to: '/modeling-jobs'
        },
        {
          title: 'Acting Jobs',
          to: '/modeling-jobs'
        },
        {
          title: 'Movie Auditions',
          to: '/modeling-jobs'
        }
      ],
      castingCalls: [
        {
          id: 1,
          title: 'Looking for Actors for Web Series',
          image: 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg',
          info: 'Some info',
          productionTypes: [{ title: 'Film & Movie' }],
          location: {
            city: 'Mumbai, India'
          }
        },
        {
          id: 1,
          title: 'Looking for Actors for Web Series',
          image: 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg',
          info: 'Some info',
          productionTypes: [{ title: 'Film & Movie' }],
          location: {
            city: 'Mumbai, India'
          }
        },
        {
          id: 1,
          title: 'Looking for Actors for Web Series',
          image: 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg',
          info: 'Some info',
          productionTypes: [{ title: 'Film & Movie' }],
          location: {
            city: 'Mumbai, India'
          }
        },
        {
          id: 1,
          title: 'Looking for Actors for Web Series',
          image: 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg',
          info: 'Some info',
          productionTypes: [{ title: 'Film & Movie' }],
          location: {
            city: 'Mumbai, India'
          }
        }
      ]
    }
  },

  methods: {}
}
</script>
<template>
  <v-container>
    <v-row class="my-1">
      <v-col cols="12" sm="7">
        <h1>
          100s of Casting Calls are posted daily
        </h1>
      </v-col>
      <v-col cols="12" sm="5" style="flex-grow: 0" class="text-sm-right">
        <v-btn color="primary" large outlined rounded>
          Post free casting call
        </v-btn>
      </v-col>
    </v-row>
    <p>
      Hundres of Casting Directors use Castkro to look for the talent for their requirements
    </p>
    <div>
      <div class="text-center my-8">
        <v-btn v-for="castingCallType in castingCallTypes" :key="castingCallType.title"  class="mr-3 mb-3 mb-sm-0" outlined rounded>
          {{ castingCallType.title }}
        </v-btn>
      </div>
      <v-row>
        <v-col v-for="castingCall in castingCalls" :key="castingCall.id" cols="12" sm="6">
          <v-card class="py-1" style="border-left: 5px solid #ff6b6b">
            <v-card-text>
              <v-row>
                <v-col style="flex-grow: 0">
                  <v-img width="64" height="64" :src="castingCall.image" />
                </v-col>
                <v-col>
                  <h3 class="py-sm-2">
                    {{ castingCall.title }}
                  </h3>
                  <div>
                    <v-icon>mdi-map-marker-outline</v-icon>&nbsp;{{ castingCall.location.city }}
                    <v-icon>mdi-video-outline</v-icon>&nbsp;{{ castingCall.productionTypes[0].title }}
                  </div>
                </v-col>
                <v-col cols="12" sm="4" class="text-right" style="flex-grow: 0">
                  <v-btn color="secondary">
                    Apply
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center my-5">
        <v-btn outlined rounded color="secondary">
          Load More Casting Calls
        </v-btn>
      </div>
    </div>
  </v-container>
</template>
<style lang="scss" scoped></style>
