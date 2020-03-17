<template lang="html">
  <div>
    <nav>my app</nav>
    <div id="app">
      <h1>{{ message }}</h1>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    name: 'app',
    data: () => ({
      message: 'Hey! 📦 🚀',
    }),
  }
</script>

<style lang="scss">
  @import "./assets/global.scss";
</style>
