<template>
  <div id="app">
    <h2>Текущий путь: {{ activePath }}</h2>
    <tree-directory v-if="dir" :dir="dir" @select="setActivePath" />
    <preloader v-show="isLoad" />
  </div>
</template>

<script>
import Preloader from './components/Preloader.vue';
import TreeDirectory from './components/TreeDirectory.vue';

export default {
  name: 'App',
  components: { TreeDirectory, Preloader },
  data() {
    return {
      dir: null,
      activePath: null,
      isLoad: true,
    };
  },
  methods: {
    setActivePath(path) {
      this.activePath = path;
    },
  },
  async created() {
    const res = await fetch('./static/node_modules.json');
    this.dir = await res.json();
    this.activePath = this.dir.name;
    this.isLoad = false;
  },
};
</script>

<style>
@import './assets/style.css';
:root {
  font-size: 18px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1080px;
  margin: 0 auto;
}
</style>
