<template>
  <div>
    <NavBar></NavBar>
    <div>Main</div>
    <p>App key: {{ appKey }}</p>
  </div>
</template>
<script>

import NavBar from './components/NavBar/NavBar.vue';

export default {
  name: 'VueApp',
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