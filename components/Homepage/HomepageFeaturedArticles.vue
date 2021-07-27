<script>
export default {
  data () {
    return {
      randomAvatarIcons: ['https://uifaces.co/our-content/donated/1H_7AxP0.jpg', 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg', 'https://randomuser.me/api/portraits/men/35.jpg']

    }
  },

  methods: {}
}
</script>
<template>
  <v-container>
    <v-row class="my-1">
      <v-col cols="12" sm="8">
        <div class="my-2">
          <h1>
            From Castkro Blog
          </h1>
          <p>
            Articles from industry experts to help you succeed
          </p>
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="text-sm-right">
        <v-btn color="primary" outlined large rounded>
          Read Our Blog
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-card v-for="i in 3" class="mb-4">
          <v-row no-gutters>
            <v-col cols="12" sm="4" style="">
              <v-avatar
                class="mr-3"
                size="100%"
                tile
              >
                <v-img :src="randomAvatarIcons[0]" />
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="8">
              <div class="text-left">
                <v-card-title
                  class="text-h6"
                >
                  How to Find Models for Commercial Video
                </v-card-title>

                <v-row no-gutters>
                  <v-col style="flex-grow: 0">
                    <v-avatar
                      size="36"
                      class="mx-4"
                    >
                      <v-img :src="randomAvatarIcons[1]" />
                    </v-avatar>
                  </v-col>
                  <v-col>Castkro<br><small>July 5, 2021</small></v-col>
                </v-row>
                <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur cum dolor error esse hic illo </v-card-text>

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-3"
                    outlined
                    rounded
                    small
                    text
                  >
                    Read More
                  </v-btn>
                </v-card-actions>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="5">
        <div>
          <v-row>
            <v-col cols="12" sm="3">
              <h3>Follow us:</h3>
            </v-col>
            <v-col>
              <v-row class="flex-space-between">
                <v-col>
                  <v-btn icon color="primary">
                    <v-icon large>
                      mdi-facebook
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn icon color="primary">
                    <v-icon large>
                      mdi-twitter
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col>
                  <v-btn icon color="primary">
                    <v-icon large>
                      mdi-youtube
                    </v-icon>
                  </v-btn>
                </v-col>
                <v-col class="">
                  <v-btn icon color="primary">
                    <v-icon large>
                      mdi-instagram
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-divider class="my-2" />
          <v-row>
            <v-col>
              <v-avatar
                class="ma-3"
                size="64"
              >
                <v-img :src="randomAvatarIcons[0]" />
              </v-avatar>
            </v-col>
            <v-col class="text-right">
              <v-btn color="primary">
                Follow us
              </v-btn>
            </v-col>
          </v-row>
          <div class="posts">
            <v-row>
              <v-col cols="6">
                <v-img :src="randomAvatarIcons[0]" height="198" />
              </v-col>
              <v-col cols="6">
                <v-img :src="randomAvatarIcons[1]" height="198" />
              </v-col>
              <v-col cols="6">
                <v-img :src="randomAvatarIcons[0]" height="198" />
              </v-col>
              <v-col cols="6">
                <v-img :src="randomAvatarIcons[2]" height="198" />
              </v-col>
              <v-col cols="6">
                <v-img :src="randomAvatarIcons[0]" height="198" />
              </v-col>
              <v-col cols="6">
                <v-img :src="randomAvatarIcons[1]" height="198" />
              </v-col>
            </v-row>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped></style>
