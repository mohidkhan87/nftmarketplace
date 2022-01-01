<template>
  <div class="body">
    <Header />
    <AllCollection />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/common/Header.vue'
import AllCollection from '~/components/pages/collection/AllCollection.vue'
import Footer from '~/components/common/Footer.vue'
export default {
  components: {
    Header,
    AllCollection,
    Footer
  }
}
</script>

<style scoped>
.body{
  background-image: url('https://armoonia.app/static/media/bg_light.b87968b8.png');
  background-repeat: no-repeat;
  /* background-position: center; */
  background-size: cover;
  background-color:  #044c62;
}
</style>
