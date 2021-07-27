<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      isLoggedIn: false,
      user: {
        name: 'Lakhveer Bawa',
        email: 'admin@admin.com',
        image: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
        current_account_type: 'WORKER'
      },
      userEmailIdsWhoCanSwitchAccount: ['admin@admin.com'],
      oppositeAccountType: {
        type: 'Recruiter',
        value: 'RECRUITER'
      },
      clipped: false,
      drawer: false,
      miniVariant: false,
      findJobsSubPages: {
        general: [
          {
            title: 'Modeling Jobs',
            uri: '/jobs/modeling-jobs',
            icon: null
          },
          {
            title: 'Movie Auditions',
            uri: '/jobs/movie-auditions',
            icon: null
          },
          {
            title: 'Acting Auditions',
            uri: '/jobs/acting-jobs',
            icon: null
          },
          {
            title: 'Modeling Photoshoot Jobs',
            uri: '/jobs/modeling-photoshoots',
            icon: null
          }
        ]
      },
      findTalentSubPages: {
        general: [
          {
            title: 'Male Models',
            uri: '/models/male-models',
            icon: null
          },
          {
            title: 'Female Models',
            uri: '/models/female-models',
            icon: null
          },
          {
            title: 'Male Actors',
            uri: '/actors/male-actors',
            icon: null
          },
          {
            title: 'Female Actors',
            uri: '/actors/female-actors',
            icon: null
          },
          {
            title: 'Child Models',
            uri: '/models/child-models',
            icon: null
          },
          {
            title: 'Baby Models',
            uri: '/models/baby-models',
            icon: null
          },
          {
            title: 'Senior Artists',
            uri: '/artists/senior-artists',
            icon: null
          }
        ],
        by_role_type: [
          {
            title: 'Models',
            uri: '/models/all-models',
            icon: null
          },
          {
            title: 'Actors',
            uri: '/actors/all-actors',
            icon: null
          },
          {
            title: 'Voiceover',
            uri: '/artists/voiceover',
            icon: null
          }
        ]
      }
    }
  },
  computed: {
    mobileNavigationItems (): Array<any> {
      const items = []

      if (this.isLoggedIn) {
        items.push({
          icon: 'mdi-home-account',
          title: 'Dashboard',
          to: '/auth/dashboard'
        })
        items.push({
          icon: 'mdi-message',
          title: 'My Messages',
          to: '/messaging'
        })
      } else {
        items.push({
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        })
      }
      items.push({
        icon: 'mdi-chart-arc',
        title: 'Find Talent',
        to: '/find-talent'
      })
      items.push({
        icon: 'mdi-magnify',
        title: 'Casting Calls',
        to: '/casting-calls'
      })
      if (this.isLoggedIn) {
        if (this.user.current_account_type === 'RECRUITER') {
          items.push({
            icon: 'mdi-book-plus',
            title: 'Post New Job',
            to: '/jobs/manage-job/getting-started'
          })

          /* items.push({
            icon: 'mdi-format-list-bulleted',
            title: 'My Posted Jobs',
            to: '/auth/posted-jobs',
          }) */

          items.push({
            icon: 'mdi-format-list-bulleted',
            title: 'Candidate Lists',
            to: '/candidate-lists'
          })

          if ('application' === 'preferences') {
            items.push({
              icon: 'mdi-format-list-text',
              title: 'Auditions',
              to: '/auditions'
            })
          }

          items.push({
            icon: 'mdi-database',
            title: 'Application Manager',
            to: '/auth/application-manager'
          })
        }

        if (this.user.current_account_type === 'WORKER') {
          items.push({
            icon: 'mdi-format-list-bulleted',
            title: 'My Applications',
            to: '/auth/applications-dashboard-artist'
          })
        }
      }

      if (this.isLoggedIn) {
        if (
          this.userEmailIdsWhoCanSwitchAccount.includes(
            this.user.email
          )
        ) {
          items.push({
            icon: 'mdi-toggle-switch',
            title: 'Use As ' + this.oppositeAccountType.title,
            to: '/switch-account/' + this.oppositeAccountType.value
          })
        }

        items.push({
          icon: 'mdi-account-cog',
          title: 'Profile Settings',
          to: '/auth/update'
        })
      } else {
        items.push({
          icon: 'mdi-login',
          title: 'Login',
          to: '/auth/login'
        })
        items.push({
          icon: 'mdi-login',
          title: 'Register',
          to: '/auth/register'
        })
      }

      return items
    }
  },

  methods: {
    logout () {}
  }
})
</script>
<template>
  <div>
    <div class="" style="border-bottom: 1px solid #eee">
      <v-navigation-drawer
        v-model="drawer"
        :clipped="clipped"
        :mini-variant.sync="miniVariant"
        app
        temporary
      >
        <div v-if="isLoggedIn" class="grey lighten-4 py-3">
          <div class="text-center">
            <v-img
              :src="user.image"
              class="rounded-circle"
              gradient=""
              width="64"
              style="margin: 10px auto"
            />
          </div>

          <div class="text-center">
            <div
              class="text-capitalize has-font-family-secondary"
              style="margin: auto"
            >
              {{ user.name }}
            </div>
            <small class="grey--text lighten-1">
              {{ user.email }}
            </small>
          </div>
        </div>

        <v-list v-if="mobileNavigationItems.length" dense nav>
          <v-list-item
            v-for="(item, i) in mobileNavigationItems"
            :key="i"
            :to="item.to"
            class="mb-1"
            exact
            router
          >
            <v-list-item-action>
              <v-icon color="primary">
                {{ item.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-if="isLoggedIn"
            class="mb-1"
            @click="logout()"
          >
            <v-list-item-action>
              <v-icon color="primary">
                mdi-logout
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar
        app
        class="customNavigation"
        color="white"
        fixed
        flat
      >
        <v-app-bar-nav-icon class="hidden-md-and-up" @click.native.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title class="pl-0">
          <nuxt-link to="/">
            <v-img contain max-height="40" max-width="120" src="/logo.svg" />
          </nuxt-link>
        </v-toolbar-title>
        <v-spacer />

        <v-btn
          v-if="!isLoggedIn"
          class="hidden-md-and-up"
          color="primary"
          dark
          depressed
          to="/auth/register"
        >
          <v-icon left>
            mdi-account-plus
          </v-icon>
          Register
        </v-btn>
        <template v-else>
          <div class="hidden-md-and-up">
          <!--            <v-btn-->

          <!--            class="hidden-sm-and-up"-->
          <!--            color="primary"-->
          <!--            depressed-->
          <!--            to="/auth/dashboard/"-->
          <!--            icon-->
          <!--          >-->
          <!--            <v-icon left color="primary">mdi-home-account</v-icon>-->
          <!--          </v-btn-->
          <!--          >-->
          </div>
        </template>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text style="font-weight: normal">
            Casting Calls
          </v-btn>

          <v-menu offset-y open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="black--text"
                dark
                v-bind="attrs"
                text
                to="/find-talent"
                style="font-weight: normal"
                v-on="on"
              >
                Find Talent
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in findTalentSubPages.general"
                :key="index"
                :to="item.uri"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

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
        <v-spacer class="hidden-sm-and-down" />

        <v-btn outlined color="secondary" class="hidden-sm-and-down">
          Sign up Free
        </v-btn>
        <v-btn color="primary" dark class="mx-2 hidden-sm-and-down">
          Post Casting Call
        </v-btn>
      </v-app-bar>
    </div>
  </div>
</template>
<style lang="css">
.customNavigation .v-toolbar__content {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 960px) {
  .customNavigation .v-toolbar__content {
    max-width: 900px;
  }
}

@media (min-width: 1264px) {
  .customNavigation .v-toolbar__content {
    max-width: 1185px;
  }
}

@media (min-width: 1904px) {
  .customNavigation .v-toolbar__content {
    max-width: 1785px;
  }
}
</style>
