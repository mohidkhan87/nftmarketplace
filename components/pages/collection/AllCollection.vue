<template>
  <div class="lg:py-40 sm:py-32 py-24">
    <Container>
      <div class="text-white">
        <h1 class="sm:text-3xl text-2xl font-semilight text-center">
          All Collections
        </h1>
        <div class="relative sm:w-max w-full ml-auto lg:mt-10 mt-14 mb-10">
          <button class="sm:w-72 w-full bg-transparent rounded-md outline-none border border-skyBlue py-2.5 px-5" @click="filterBox = !filterBox" @blur="filterBox = false">
            <div class="flex justify-between items-center gap-3 font-light">
              <div class="flex items-center gap-3">
                <img src="@/assets/img/collection/filter.svg" alt="filter">
                <!-- <span class="sm:block hidden">{{ selectedFilter }}</span> -->
                <span v-if="selectedFilter.length > 23">{{ selectedFilter.substr(0, 23) }}...</span>
                <!-- <span v-if="selectedFilter.length > 30" class="sm:hidden block text-sm">{{ selectedFilter }}</span> -->

                <span v-else class="sm:text-base text-sm">{{ selectedFilter }}</span>
              </div>
              <img src="@/assets/img/collection/arrow-down.svg" alt="arrow" class="w-3">
            </div>
          </button>
          <!-- Filter box -->
          <transition name="fade">
            <div v-if="filterBox" class="absolute top-full left-0 w-full transform translate-y-3 bg-gray-500 sm:bg-opacity-30 bg-opacity-40 backdrop-filter backdrop-blur-2xl rounded-md overflow-hidden py-2 z-10">
              <p v-for="(sort, idx) in sortOptions" :key="idx" :class="selectedFilter === sort.title && 'bg-hoverBlue'" class="cursor-pointer text-sm hover:bg-hoverBlue transition-all duration-150 leading-4 ease-linear py-2.5 px-5" @click="selectedFilter = sort.title">
                {{ sort.title }}
              </p>
            </div>
          </transition>
        </div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-6 gap-8 mb-16">
          <div v-for="(collection, index) in collections" :key="index" class="border-8 border-borderBlue rounded-2xl shadow-rounded bg-white">
            <div class="relative">
              <img :src="require(`@/assets/img/collection/${collection.cover}`)" alt="cover" class="w-full">
              <img :src="require(`@/assets/img/collection/${collection.profile}`)" alt="profile" class="absolute bottom-0 left-1/2 md:w-5/12 sm:w-3/12 w-32 transform translate-y-1/2 -translate-x-1/2">
            </div>
            <div class="flex flex-col items-center xl:mt-16 lg:mt-10 mt-12 mb-5">
              <div class="flex flex-col items-center gap-3 text-secondary">
                <h2 class="text-lg font-semibold">
                  {{ collection.title }}
                </h2>
                <div class="collection-detail text-center h-16 leading-5">
                  {{ collection.description }}
                </div>
                <button class="hover:bg-secondary bg-lightBlue text-secondary transition-all duration-150 ease-linear hover:text-white rounded-md py-2.5 px-5 mt-2 sm:text-base text-sm font-medium">
                  Explore Collection
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="my-12 flex flex-col items-center">
          <img src="@/assets/img/collection/arrow-top.svg" alt="">
          <div class="flex flex-col items-center text-white mt-6 sm:mb-36 mb-24">
            <h1 class="sm:text-3xl text-2xl font-bold">
              Your collection could be here.
            </h1>
            <p class="sm:text-lg text-base font-light">
              Find out how to list your collection on Armoonia
            </p>
            <div class="bg-white shadow-rounded rounded-md mt-5">
              <button class="gradient-btn sm:py-3 py-2.5 px-6 font-medium sm:text-base text-sm ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
export default {
  data: () => ({
    selectedFilter: 'Daily Volume (Low to High)',
    filterBox: false,

    collections: [
      {
        id: 1,
        title: 'Harmoonies',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id.',
        profile: 'profile.svg',
        cover: 'cover.svg'
      },
      {
        id: 2,
        title: 'Your Collection',
        description: ' Et harum quidem rerum facilis est et expedita distinctio.',
        profile: 'profile1.svg',
        cover: 'cover1.svg'
      },
      {
        id: 3,
        title: 'Your Collection',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
        profile: 'profile2.svg',
        cover: 'cover2.svg'
      },
      {
        id: 4,
        title: 'Your Collection',
        description: ' Et harum quidem rerum facilis est et expedita distinctio.',
        profile: 'profile.svg',
        cover: 'cover.svg'
      },
      {
        id: 5,
        title: 'Space buddy',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
        profile: 'profile1.svg',
        cover: 'cover1.svg'
      },
      {
        id: 6,
        title: 'Harmoonies',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id.',
        profile: 'profile2.svg',
        cover: 'cover2.svg'
      }
    ],
    sortOptions: [
      {
        id: 1,
        title: 'A-Z'
      },
      {
        id: 2,
        title: 'Z-A'
      },
      {
        id: 3,
        title: 'Daily Volume (Low to High)'
      },
      {
        id: 4,
        title: 'Daily Volume (High to Low)'
      },
      {
        id: 5,
        title: 'Weekly Volume (Low to High)'
      },
      {
        id: 6,
        title: 'Weekly Volume (High to Low)'
      },
      {
        id: 7,
        title: 'Total Volume (Low to High)'
      },
      {
        id: 8,
        title: 'Total Volume (High to Low)'
      }
    ]
  })

}
</script>

<style scoped>
.collection-detail {
  display: block; /* or in-line block according to your requirement */
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  width: calc(90%);
  margin: 0 auto;
}
.gradient-btn {
   background: -webkit-linear-gradient(#01E8DA, #0096c4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-in-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
