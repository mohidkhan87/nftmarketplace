<template>
  <div class="bg-white bg-opacity-5 sm:py-20 py-12">
    <Container>
      <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-0 gap-3 ">
        <div class="col-span-2">
          <img src="@/assets/img/header/logo.svg" alt="logo" class="mt-2 mb-4">
          <div class="sm:w-1/2 w-full text-sm font-thin text-white leading-4 italic">
            Lorem ipsum, dolor sit amet adipisicing elit. Quaerat, deserunt.
          </div>
        </div>
        <div class=" text-white sm:mt-0 mt-8">
          <h2 class="mb-4 italic font-medium leading-5">
            Join the Community
          </h2>
          <div class="flex gap-3">
            <img src="@/assets/img/footer/discord.svg" alt="dicord" class="sm:w-auto w-6">
            <img src="@/assets/img/footer/twitter.svg" alt="twitter" class="sm:w-auto w-6">
            <img src="@/assets/img/footer/instagram.svg" alt="instagram" class="sm:w-auto w-6">
          </div>
        </div>
        <div class=" text-white md:mt-0 mt-8">
          <div class=" w-max md:mx-auto">
            <h2 class="mb-4 italic font-medium ">
              Marketplace
            </h2>
            <ul class="flex flex-col gap-3 text-sm font-thin italic">
              <li>Collections</li>
              <li>Stats</li>
            </ul>
          </div>
        </div>
        <div class=" text-white lg:mt-0 mt-8">
          <div class="w-max lg:mx-auto">
            <h2 class="mb-4 italic font-medium ">
              Account
            </h2>
            <ul class="flex flex-col gap-3 text-sm font-thin italic">
              <li>Collections</li>
              <li>Stats</li>
              <li>Collections</li>
              <li>Stats</li>
              <li>Collections</li>
              <li>Stats</li>
            </ul>
          </div>
        </div>
        <div class=" text-white lg:mt-0 mt-8">
          <div class=" w-max lg:mx-auto">
            <h2 class="mb-4 italic font-medium ">
              Company
            </h2>
            <ul class="flex flex-col gap-3 text-sm font-thin italic">
              <li>Collections</li>
              <li>Stats</li>
              <li>Collections</li>
              <li>Stats</li>
              <li>Stats</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
export default {
  data: () => ({

  })
}
</script>
