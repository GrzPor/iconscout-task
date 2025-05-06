import { ref, onMounted, onUnmounted } from 'vue'

export default function useInfiniteScroll(
  callback: () => void,
  options = { threshold: 200, bannerDelay: 800, maxLoads: 2, showBanner: true }
) {
  const isLoading = ref(false)
  const showSignupBanner = ref(false)
  const maxLoads = ref(options.maxLoads ?? 2)
  const currentLoads = ref(0)
  const showBanner = options.showBanner !== undefined ? options.showBanner : true

  const handleScroll = () => {
    if (isLoading.value || showSignupBanner.value) return

    try {
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (
        scrollPosition >= documentHeight - options.threshold &&
        (maxLoads.value === Infinity || currentLoads.value < maxLoads.value)
      ) {
        isLoading.value = true
        currentLoads.value++

        // Execute the callback (load more data)
        callback()

        // After maxLoads, show signup banner with a delay
        if (showBanner && maxLoads.value !== Infinity && currentLoads.value >= maxLoads.value) {
          // Reset loading state first
          setTimeout(() => {
            isLoading.value = false

            // Then show the banner after a delay
            setTimeout(() => {
              showSignupBanner.value = true
            }, options.bannerDelay)
          }, 500)
        } else {
          // Reset loading state
          setTimeout(() => {
            isLoading.value = false
          }, 500)
        }
      }
    } catch (error) {
      console.error('Error in scroll handler:', error)
    }
  }

  // Client-side only
  if (typeof window !== 'undefined') {
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }

  return {
    isLoading,
    showSignupBanner
  }
}
