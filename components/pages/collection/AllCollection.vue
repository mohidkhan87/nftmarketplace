<template>
  <div class="my-16">
    <Container>
      <div class="text-white">
        <h1 class="text-3xl font-semilight text-center">
          All Collections
        </h1>
        <div class="relative w-max ml-auto mt-10 mb-14">
          <button class="w-72 bg-transparent rounded-md outline-none border border-skyBlue py-2.5 px-5" @click="filterBox = !filterBox" @blur="filterBox = false">
            <div class="flex justify-between items-center gap-3 font-light">
              <div class="flex items-center gap-3">
                <img src="@/assets/img/collection/filter.svg" alt="filter">
                <span>{{ selectedFilter }}</span>
              </div>
              <img src="@/assets/img/collection/arrow-down.svg" alt="arrow" class="w-3">
            </div>
          </button>
          <!-- Filter box -->
          <transition name="fade">
            <div v-if="filterBox" class="absolute top-full left-0 w-full transform translate-y-3 bg-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-md py-2.5 px-5 z-10">
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem'">
                lorem
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem, ipsum.'">
                Lorem, ipsum.
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem'">
                lorem
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem, ipsum.'">
                Lorem, ipsum.
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem'">
                lorem
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem, ipsum.'">
                Lorem, ipsum.
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem'">
                lorem
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem, ipsum.'">
                Lorem, ipsum.
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem'">
                lorem
              </p>
              <p class="cursor-pointer" @click="selectedFilter = 'Lorem, ipsum.'">
                Lorem, ipsum.
              </p>
            </div>
          </transition>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-16">
          <div v-for="(collection, index) in collections" :key="index" class="border-8 border-borderBlue rounded-2xl shadow-rounded bg-white">
            <div class="relative">
              <img :src="require(`@/assets/img/collection/${collection.cover}`)" alt="cover" class="w-full">
              <img :src="require(`@/assets/img/collection/${collection.profile}`)" alt="profile" class="absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2">
            </div>
            <div class="flex flex-col items-center mt-16 mb-5">
              <div class="flex flex-col items-center gap-3 text-secondary">
                <h2 class="text-lg font-semibold">
                  Harmoonies
                </h2>
                <div class="mx-3 sm:mx-5 lg:mx-7 2xl:mx-20 text-center leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe tempore molestiae.
                </div>
                <button class="bg-secondary hover:bg-lightBlue hover:text-secondary transition-all duration-150 ease-linear text-white rounded-md py-2.5 px-5 mt-2 font-medium">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="my-12 flex flex-col items-center">
          <img src="@/assets/img/collection/arrow-top.svg" alt="">
          <div class="flex flex-col items-center text-white mt-6 mb-36">
            <h1 class="text-3xl font-bold">
              Your collection could be here.
            </h1>
            <p class="text-lg font-light">
              Find out how to list your collection on Armoonia
            </p>
            <button class="bg-white py-3 px-6 text-skyBlue rounded-md font-medium shadow-rounded mt-5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
export default {
  data: () => ({
    selectedFilter: 'Daily Volume (Low To High)',
    filterBox: false,
    collections: [
      {
        id: 1,
        profile: 'profile.svg',
        cover: 'cover.svg'
      },
      {
        id: 2,
        profile: 'profile1.svg',
        cover: 'cover1.svg'
      },
      {
        id: 3,
        profile: 'profile2.svg',
        cover: 'cover2.svg'
      },
      {
        id: 4,
        profile: 'profile.svg',
        cover: 'cover.svg'
      },
      {
        id: 5,
        profile: 'profile1.svg',
        cover: 'cover1.svg'
      },
      {
        id: 6,
        profile: 'profile2.svg',
        cover: 'cover2.svg'
      }
    ]
  }),
  methods: {

  }
}
</script>

<style scoped>
.fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-in-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
