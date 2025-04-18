<template>
  <footer class="app-footer">
    <div class="container">
      <div class="d-flex py-4 flex-wrap justify-content-between">
        <div class="d-flex flex-col flex-sm-row flex-wrap align-items-center">
          <img
            src="@images/brand/iconscout_logo_for_white_bg.svg"
            alt="Iconcout Logo"
            class="me-3"
          />
          <span class="font-size-sm">Design Resource Marketplace</span>
        </div>
        <span class="d-flex align-items-center font-size-sm">
          <em class="app-footer__count mr-1">10,995,459</em>
          &nbsp;graphic resources & counting
        </span>
      </div>
      <hr class="m-0" />
      <div class="row py-4">
        <div class="col">
          <BaseNavList title="Graphic Resources" :items="graphicResourcesLinks" />
        </div>
        <div class="col">
          <BaseNavList title="Products" :items="productsLinks" />
        </div>
        <div class="col">
          <BaseNavList title="Company" :items="companyLinks" />
        </div>
        <div class="col">
          <BaseNavList title="Legal" :items="legalLinks" />
        </div>
        <div class="col">
          <div>
            <BaseSocialList title="Get IconScout for desktop" :items="desktopApps" />
          </div>
          <div class="my-4">
            <h5 class="font-size-sm mb-3-4">Get LottieFiles mobile app</h5>
            <div class="d-flex">
              <a href="#" target="_blank" rel="noopener noreferrer" class="me-3-4">
                <img src="@images/mobile-app/apple-store-btn.svg" alt="App Store Badge" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="@images/mobile-app/google-store-btn.svg" alt="Google Play Badge" />
              </a>
            </div>
          </div>
          <div>
            <BaseSocialList title="Follow us" :items="socialLinks" />
          </div>
        </div>
      </div>
    </div>
    <div class="app-copyright py-4 font-size-sm">
      <div class="container">
        <div class="d-flex justify-content-between">
          <div class="d-inline-flex align-items-center app-copyright__content">
            <span>&copy; {{ new Date().getFullYear() }} Design Barn Inc. Made with</span>
            <img src="@images/icons/heart.svg" alt="love" class="mx-1" />
            <span>in India</span>
          </div>
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center me-4">
              <img src="@images/icons/pad-lock.svg" alt="pad lock" class="me-1" />
              <span class="app-copyright__payments">Secure Payments</span>
            </div>
            <img src="@images/logo/stripe.svg" alt="Stripe" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import BaseNavList from '@components/base/BaseNavList/BaseNavList.vue'
import BaseSocialList from '@components/base/BaseSocialList/BaseSocialList.vue'

import apple from '@images/social/apple.svg'
import windows from '@images/social/windows.svg'
import fb from '@images/social/fb.svg'
import ig from '@images/social/ig.svg'
import tw from '@images/social/tw.svg'
import li from '@images/social/li.svg'
import dribble from '@images/social/dribble.svg'

const graphicResourcesLinks = [
  { name: 'Free Icons', link: 'https://iconscout.com/free-icons' },
  { name: 'Free Emoji Icons', link: '#' },
  { name: 'Free Logo Icons', link: '#' },
  { name: 'iOS Icons', link: 'https://iconscout.com/free-icons' },
  { name: 'Sticker Icons', link: '#' },
  { name: 'Gradient Icons', link: '#' },
  { name: 'Curated Bundle', link: '#' },
  { name: 'Calendar of Festival', link: '#' },
  { name: 'Free Assets of the day ', link: '#' },
  { name: 'Explore Design Assets', link: '#' }
]
const productsLinks = [
  { name: 'Unicon Icon Font', link: 'https://iconscout.com/unicons' },
  { name: 'Color editor', link: '#' },
  { name: 'Apps & Plugins', link: '#' },
  { name: 'Hire designers', link: '#' },
  { name: 'IconScout API', link: 'https://iconscout.com/api' },
  { name: 'Top Illustrations', link: 'https://iconscout.com/free-illustrations' },
  { name: 'Top 3D Assets', link: 'https://iconscout.com/free-3d-illustrations' },
  { name: 'Reverse Image Search', link: '#' },
  {
    name: 'Unicon Plugin for Figma',
    link: 'https://www.figma.com/community/plugin/1334018023334266887'
  }
]
const companyLinks = [
  { name: 'Blog', link: 'https://iconscout.com/blog' },
  { name: 'About', link: 'https://lottiefiles.com/team?utm_source=iconscout&utm_medium=footer' },
  { name: 'Access features ', link: 'https://iconscout.com/access' },
  { name: 'Sell on IconScout', link: 'https://iconscout.com/become-contributor' },
  { name: 'Startup program', link: '#' },
  {
    name: `We're hiring`,
    link: 'https://lottiefiles.com/careers?utm_source=iconscout&utm_medium=footer'
  }
]
const legalLinks = [
  { name: 'Terms of use', link: 'https://iconscout.com/legal/terms-of-use' },
  { name: 'Privacy policy', link: 'https://iconscout.com/legal/privacy-policy' },
  { name: 'License agreement', link: 'https://iconscout.com/licenses' },
  { name: 'Contributor terms', link: 'https://iconscout.com/legal/contributor-terms' },
  { name: 'Support center', link: 'https://help.iconscout.com/hc/en-gb' },
  { name: 'Join discord community', link: 'https://discord.gg/RfXAwxXXU9' }
]
const desktopApps = [
  { icon: apple, link: 'https://iconscout.com/desktop-app/for-mac' },
  { icon: windows, link: 'https://iconscout.com/desktop-app/for-windows' }
]
const socialLinks = [
  { icon: fb, link: 'https://www.facebook.com/theiconscout#' },
  { icon: ig, link: 'https://www.instagram.com/iconscout/#' },
  { icon: tw, link: 'https://x.com/iconscout' },
  { icon: li, link: 'https://www.linkedin.com/company/iconscout/' },
  { icon: dribble, link: 'https://dribbble.com/iconscout' }
]
</script>

<style lang="scss" scoped>
@use './AppFooter.scss';
</style>
