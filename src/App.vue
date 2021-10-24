<template>
  <div id="app">
    <h2>Текущий путь: {{ activePath }}</h2>
    <button class="item file-link" type="button" @click="copyPath">
      Ссылка на выбранный файл
    </button>
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
      linkPath: [],
    };
  },
  provide() {
    return {
      linkPath: this.linkPath,
    };
  },
  methods: {
    setActivePath(path) {
      this.activePath = path;
    },
    copyPath() {
      navigator.clipboard.writeText(
        `${window.location.host}?path=${this.activePath}`
      );
    },
  },
  async created() {
    const queryString = window.location.search;
    let path = null;
    if (queryString) {
      const params = new URLSearchParams(queryString);
      path = params.get('path');
      this.linkPath.splice(0, 1, ...path.split('/'));
    }

    const res = await fetch('./static/node_modules.json');
    this.dir = await res.json();
    this.activePath = path || this.dir.name;
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
.file-link {
  margin-bottom: 1rem;
}
.file-link:focus {
  outline: none;
}
.file-link:focus-visible {
  outline: 3px solid blue;
}
</style>
