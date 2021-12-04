<template>
  <nav class="app-nav-bar">
    <p>nav bar</p>
  </nav>
</template>
<script>

export default {
  name: 'nav-bar',
  props: ['data']
}
</script>
<style lang="scss">

.app-nav-bar {
  color: red;
}

</style>