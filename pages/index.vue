<template>
  <div>
    <HomepageNavigation />
    <HomepageHero />
    <HomepagePitchForRecruiters />
    <HomepagePitchForArtists />
    <HomepageFeaturedArtists />
    <HomepageFeaturedJobs />
    <HomepageTestimonials />
    <HomepageFeaturedArticles />
    <HomepageFooterCTA />
    <HomepageFooter />
  </div>
</template>

<script>

import HomepageNavigation from '../components/Homepage/HomepageNavigation'
import HomepageHero from '../components/Homepage/HomepageHero'
import HomepagePitchForRecruiters from '../components/Homepage/HomepagePitchForRecruiters'
import HomepageFeaturedArtists from '../components/Homepage/HomepageFeaturedArtists'
import HomepageFeaturedJobs from '../components/Homepage/HomepageFeaturedJobs'
import HomepagePitchForArtists from '../components/Homepage/HomepagePitchForArtists'
import HomepageTestimonials from '../components/Homepage/HomepageTestimonials'
import HomepageFeaturedArticles from '../components/Homepage/HomepageFeaturedArticles'
import HomepageFooterCTA from '../components/Homepage/HomepageFooterCTA'
import HomepageFooter from '../components/Homepage/HomepageFooter'

export default {
  components: {
    HomepageNavigation,
    HomepageHero,
    HomepagePitchForRecruiters,
    HomepageFeaturedArtists,
    HomepageFeaturedJobs,
    HomepagePitchForArtists,
    HomepageTestimonials,
    HomepageFeaturedArticles,
    HomepageFooterCTA,
    HomepageFooter
  }
}
</script>
