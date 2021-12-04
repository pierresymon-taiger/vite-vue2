<template>
  <div>
    <NavBar></NavBar>
    <div>Main</div>
    <b-alert show variant="primary"><a href="#" class="alert-link">Test Alert</a></b-alert>
    <p>App key: {{ appKey }}</p>
  </div>
</template>
<script>

import NavBar from './components/NavBar/NavBar.vue';
import { BAlert } from 'bootstrap-vue'

export default {
  name: 'VueApp',
  components: {
    BAlert
  },
  data: function() {
    return {
      appKey: import.meta.env.VITE_APP_KEY
    }
  },
  mounted: function() {
    console.log(import.meta.env.VITE_APP_KEY);
  },
  components: {
    NavBar
  }
}
</script>