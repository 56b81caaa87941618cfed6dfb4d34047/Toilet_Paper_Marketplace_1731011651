<template>
  <section id="cta-section-container">
    <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-transparent">
      <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-gradient-to-br from-pink-400/30 to-purple-600/30 backdrop-filter backdrop-blur-lg shadow-lg">

        <!-- Radial gradient -->
        <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
          <div id="radial-gradient-outer" class="bg-pink-500 absolute inset-0 translate-z-0 rounded-full blur-[150px] opacity-50"></div>
          <div id="radial-gradient-inner" class="absolute w-1/3 h-1/3 translate-z-0 rounded-full blur-[60px] bg-purple-400"></div>
        </div>

        <!-- Blurred shape -->
        <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" class="#A855F7" />
                <stop offset="100%" class="6366F1" stop-opacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <!-- Content -->
        <div id="content" class="max-w-3xl mx-auto text-center">
          <div id="content-subtitle" class="flex">
            <div id="content-subtitle-text" class="flex-1 font-medium text-lg pb-3 text-pink-200">
              Cosmic Comfort for Your Throne
            </div>
          </div>
          <div class="flex" id="content-title-container">
            <h2 id="content-title" class="flex-1 h2 text-5xl font-bold pb-4 text-white">
              Explore the Galaxy of Softness
            </h2>
          </div>
          <div class="flex" id="content-body-container">
            <p id="content-body" class="flex-1 text-lg mb-8 text-pink-100">
              Embark on a journey through our celestial collection of toilet paper. From star-soft to planet-friendly options, we've got your intergalactic bathroom needs covered.
            </p>
          </div>
          <a id="content-cta-button" href="#0" class="btn transition duration-300 ease-in-out group text-purple-900 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 rounded-full px-8 py-4 shadow-lg text-lg font-semibold">
            Launch Your Journey
            <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-1 transition-transform duration-300 ease-in-out ml-2 text-purple-700">→</span>
          </a>
        </div>
        </div>
        <!-- Image Inclusion -->
        <div class="flex justify-center mt-10">
          <img src="https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Toilet_Paper_Marketplace_1731011651/main/images/002e3a253bd5421bb6747877ce6f459e.jpeg" alt="Cosmic Toilet Paper" class="rounded-2xl shadow-lg border-4 border-pink-300/50 max-w-md hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PurpleBackgroundCtaComponent",
  data() {
    return {
      expanded: false,
      tab: null
    };
  }
};
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>