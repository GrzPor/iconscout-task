<template>
  <section class="app-signup-blur-banner" aria-labelledby="signup-banner-title">
    <div class="d-flex flex-column mx-auto app-signup-blur-banner__content">
      <h2 class="app-signup-blur-banner__title" id="signup-banner-title">
        View all Limit 3D Illustrations
      </h2>
      <BButton variant="primary" aria-label="Get started with a free account"
        >Get Started - It's Free</BButton
      >
      <div class="app-signup-blur-banner__login">
        <span>Already have an account? </span>
        <a href="#" aria-label="Log in to your account">Log In</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use './AppSignupBlurBanner.scss';
</style>
