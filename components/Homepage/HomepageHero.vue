<script>
export default {
  data () {
    return {
      featuredAvatarIcons: ['https://uifaces.co/our-content/donated/1H_7AxP0.jpg', 'https://uifaces.co/our-content/donated/3799Ffxy.jpeg', 'https://randomuser.me/api/portraits/men/35.jpg']
    }
  },

  methods: {}
}
</script>
<template>
  <div
    style="background-image: url('/images/homepage/hero-bg.png');background-size: cover;background-position: center center;height: 700px"
  >
    <v-container>
      <v-row style="height: 650px">
        <v-col align-self="center" class="">
          <h1 class="white--text">
            Find Perfect Artist for<br> your Project. <span class="primary--text">Fast</span>
          </h1>
          <p style="max-width: 600px" class="white--text pb-2">
            Castkro helps you find perfect models, actors, writers etc. faster and easier
          </p>
          <div class="text-center text-sm-left">
            <v-btn color="primary" large class="mb-3 mb-sm-0">
              Find Talent
            </v-btn>
            &nbsp;&nbsp;
            <v-btn dark color="white" large outlined>
              Find Casting Calls
            </v-btn>
          </div>
          <v-row no-gutters style="max-width: 500px;padding-top: 3rem">
            <v-col align-self="center" class="white--text" style="white-space: nowrap;font-weight:bold; flex-grow: 0;     margin-right: 1.9rem;">
              100k+ Artists
            </v-col>
            <v-col>
              <v-avatar v-for="(avatar,index) in featuredAvatarIcons" :key="index" size="62" style="margin-left: -15px;border: 4px solid #ffffff">
                <img
                  :src="avatar"
                  alt="John"
                >
              </v-avatar>
              <v-avatar color="grey lighten-2" size="62" style="margin-left: -15px">
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-avatar>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-row style="margin-top: 0;padding-right: 10px">
      <v-col cols="0" md="6" />
      <v-col class="text-right" style="background-color: #eeeeee">
        <v-row>
          <v-col sm="3" cols="3">
            <v-img contain src="/images/homepage/companies/sony.svg" height="60" max-width="250" />
          </v-col>
          <v-col sm="3" cols="3">
            <v-img contain src="/images/homepage/companies/yashraj.svg" height="60" max-width="250" />
          </v-col>

          <v-col sm="3" cols="3">
            <v-img contain src="/images/homepage/companies/dharma.svg" height="60" max-width="250" />
          </v-col>
          <v-col sm="3" cols="3">
            <v-img contain src="/images/homepage/companies/eros.svg" height="60" max-width="250" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped></style>
