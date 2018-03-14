<template>
  <div id="app">
      <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/static/logo.png" alt="Officient logo" width="112" height="28">
      </a>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>
      </div>
    </div>
  </nav>
    <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background: #7957d5;
}

.navbar a {
  color: #fff;
}

</style>
