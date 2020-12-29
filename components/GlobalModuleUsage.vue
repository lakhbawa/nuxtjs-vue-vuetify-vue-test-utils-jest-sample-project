<template>
  <v-container>
    <div>
      Global
      {{ $helpers.convertPoundsToKilograms(200) }}
      <nuxt-link to="/auth/login">
        Login
      </nuxt-link>
    </div>
  </v-container>
</template>

<style>
.VuetifyLogo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
