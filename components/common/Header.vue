<template>
  <Container>
    <div class="flex justify-between items-center py-8">
      <div class="flex items-center gap-20 w-1/2">
        <div class="flex-shrink-0 font-light tracking-widest uppercase text-white">
          <img src="@/assets/img/header/logo.svg" alt="">
        </div>
        <div class="flex justify-between py-3 pl-5 pr-4 rounded-md shadow-rounded bg-white bg-opacity-10 w-7/12">
          <input type="text" placeholder="Search collections and tokens" class="outline-none border-none w-full pr-5 bg-transparent text-white font-light">
          <!-- <i class="text-white">search</i> -->
          <img src="@/assets/img/header/search.svg" alt="search" class="w-5 ml-auto cursor-pointer">
        </div>
      </div>
      <div class="flex items-center gap-12">
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

<style scoped>
input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(235, 235, 235);
}
</style>
