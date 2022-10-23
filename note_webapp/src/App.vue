<template>
<div>
  <AppNavbar/>
  <div class="contrainer-fluid">
    <router-view/>      
  </div>

</div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',

  components: {
    AppNavbar,
  },

  data: () => ({
    //
  }),
}
</script>
