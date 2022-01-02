<template>
  <Container>
    <div class="flex justify-between items-center py-8">
      <div class="relative flex lg:justify-start justify-between items-center gap-20 lg:w-1/2 w-full">
        <div class="flex-shrink-0 font-light tracking-widest uppercase text-white">
          <img src="@/assets/img/header/logo.svg" alt="">
        </div>
        <div class="md:flex hidden justify-between py-3 pl-5 pr-4 rounded-md shadow-rounded bg-white bg-opacity-10 w-7/12">
          <input type="text" placeholder="Search collections and tokens" class="outline-none border-none w-full pr-5 bg-transparent text-white font-light">
          <!-- <i class="text-white">search</i> -->
          <img src="@/assets/img/header/search.svg" alt="search" class="w-5 ml-auto cursor-pointer">
        </div>
        <div class="flex-shrink-0 lg:hidden flex flex-col gap-1.5" @click="isOpen = !isOpen">
          <div class="flex-shrink-0 flex-grow-0 h-0.5 w-6 bg-white" />
          <div class="flex-shrink-0 flex-grow-0 h-0.5 w-6 bg-white" />
          <div class="flex-shrink-0 flex-grow-0 h-0.5 w-6 bg-white" />
        </div>
        <div :class="isOpen ? 'h-56' : 'h-0' " class="absolute top-full left-0 h-0 w-full my-2 rounded-md bg-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md transition-all duration-150 ease-linear overflow-hidden z-10">
          <nav class="flex flex-col items-center gap-4 text-white font-light mt-6">
            <a href="">Collections</a>
            <a href="">Stats</a>
            <a href="">FAQ</a>
          </nav>
          <div class="flex items-center w-max lg:mx-0 mx-auto gap-2 sm:py-3 py-2.5 px-5 rounded-md shadow-rounded text-white bg-gradient-to-br from-greenish to-skyBlue font-medium sm:text-base text-sm my-5">
            <img src="@/assets/img/header/wallet.svg" alt="wallet" class="w-5">
            <span>Connect Wallet</span>
          </div>
        </div>
      </div>
      <div class="lg:flex hidden items-center gap-12">
        <nav class="flex gap-8 text-white font-light">
          <a href="">Collections</a>
          <a href="">Stats</a>
          <a href="">FAQ</a>
        </nav>
        <div class="flex items-center gap-2 py-3 px-5 rounded-md shadow-rounded text-white bg-gradient-to-br from-greenish to-skyBlue font-medium">
          <img src="@/assets/img/header/wallet.svg" alt="wallet" class="w-5">
          <span>Connect Wallet</span>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  })
}
</script>

<style scoped>
input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(235, 235, 235);
}
</style>
