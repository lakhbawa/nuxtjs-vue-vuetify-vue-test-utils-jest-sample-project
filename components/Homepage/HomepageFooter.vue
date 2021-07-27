<script>
export default {
  data () {
    return {
      footer_links: {
        company: [
          {
            title: 'About Us',
            url: '/pages/about'
          },
          {
            title: 'How it works',
            url: '/pages/how-it-works'
          },
          {
            title: 'FAQ',
            url: '/pages/faq'
          },
          {
            title: 'Abuse',
            url: '/pages/abuse'
          },
          {
            title: 'Contact Us',
            url: '/pages/contact_us'
          }
        ],
        artists: [
          {
            title: 'Casting Calls',
            url: '/jobs'
          },
          {
            title: 'How it works',
            url: '/pages/artists'
          },
          {
            title: 'Join now',
            url: '/auth/register'
          }
        ],
        recruiters: [
          {
            title: 'Find Talent',
            url: '/explore-talent'
          },
          {
            title: 'How it works',
            url: '/pages/recruiters'
          },
          {
            title: 'Post job',
            url: '/jobs/manage-job/getting-started'
          },
          {
            title: 'Join now',
            url: '/auth/register'
          }
        ],
        terms: [
          {
            title: 'Privacy',
            url: '/pages/privacy'
          },
          {
            title: 'Terms',
            url: '/pages/terms'
          },
          {
            title: 'Code of conduct',
            url: '/pages/code-of-conduct'
          }
        ],
        support: [
          {
            title: 'Help',
            url: '/pages/faq'
          },
          {
            title: 'Contact',
            url: '/pages/about'
          },
          {
            title: 'Report Abuse',
            url: '/pages/abuse'
          }
        ],
        connect: [
          {
            title: 'Facebook',
            icon: 'mdi-facebook',
            url: 'https://www.facebook.com/castkro'
          },
          {
            title: 'Twitter',
            icon: 'mdi-twitter',
            url: 'https://twitter.com/castkro'
          },
          {
            title: 'Youtube',
            icon: 'mdi-youtube',
            url: '/'
          }
        ]
      }
    }
  },

  methods: {}
}
</script>
<template>
  <div>
    <div class="py-7" style="background-image: url(/images/homepage/footer-drawing.svg);background-position: center center;background-size: cover;">
      <v-container>
        <v-row class="text-sm-left">
          <v-col cols="12" sm="3" class="px-2">
            <v-img height="55" max-width="200" contain src="/logo.svg" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur cumque cupiditate ipsum laborum
            </p>
            <p>
              <strong>Email Address:</strong><br> Support@castkro.com
            </p>
            <v-row>
              <v-col>
                <v-icon large color="primary">
                  mdi-facebook
                </v-icon>
              </v-col>
              <v-col>
                <v-icon large color="primary">
                  mdi-twitter
                </v-icon>
              </v-col>
              <v-col>
                <v-icon large color="primary">
                  mdi-youtube
                </v-icon>
              </v-col>
              <v-col>
                <v-icon large color="primary">
                  mdi-instagram
                </v-icon>
              </v-col>
            </v-row>
          </v-col>
          <v-col sm="3" cols="12" class="px-2">
            <div class="footer-section-headline">
              Job Categories
            </div>
            <div class="footer-section-link">
              Modeling Jobs
            </div>
            <div class="footer-section-link">
              Acting Jobs
            </div>
            <div class="footer-section-link">
              Movie Auditions
            </div>
            <div class="footer-section-link">
              Film Auditions
            </div>
          </v-col>
          <v-col sm="3" cols="12" class="px-2">
            <div class="footer-section-headline">
              Talent Categories
            </div>
            <div class="footer-section-link">
              Modeling Jobs
            </div>
            <div class="footer-section-link">
              Acting Jobs
            </div>
            <div class="footer-section-link">
              Movie Auditions
            </div>
            <div class="footer-section-link">
              Film Auditions
            </div>
          </v-col>
          <v-col sm="3" cols="12" class="px-2">
            <div class="footer-section-headline">
              Job Categories
            </div>
            <div class="footer-section-link">
              Modeling Jobs
            </div>
            <div class="footer-section-link">
              Acting Jobs
            </div>
            <div class="footer-section-link">
              Movie Auditions
            </div>
            <div class="footer-section-link">
              Film Auditions
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div style="background-color: #eeeeee">
      <v-container>
        <v-row>
          <v-col cols="12" sm="3">
            2021 @ All Rights Reserved - Castkro Talent Hunt
          </v-col>
          <v-col cols="6" sm="3">
            Terms of Service
          </v-col>
          <v-col cols="6" sm="3">
            Terms of Service
          </v-col>
          <v-col cols="12" sm="3">
            Developed with ❤ in India
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<style lang="css">
.footer-section-headline {
  font-weight: 500;
  font-size: 1.3rem;
  /*border-bottom: 4px solid red;*/
}
.footer-section-link {
  padding: .35rem 0;
}
</style>
