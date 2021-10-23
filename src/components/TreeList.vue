<template>
  <div class="list">
    <tree-directory
      v-for="dir in directoryList"
      :key="dir.name"
      :dir="dir"
      v-on="$listeners"
    />
    <tree-file
      v-for="file in fileList"
      :key="file.name"
      :text="file.name"
      v-on="$listeners"
    />
    <tree-link
      v-for="link in linkList"
      :key="link.name"
      :text="link.name"
      v-on="$listeners"
    />
  </div>
</template>

<script>
import TreeFile from './TreeFile.vue';
import TreeLink from './TreeLink.vue';

export default {
  name: 'TreeList',
  components: {
    TreeFile,
    TreeLink,
    TreeDirectory: () => import('./TreeDirectory.vue'),
  },
  props: {
    contents: {
      type: Array,
      required: true,
    },
  },
  computed: {
    directoryList() {
      return this.contents.filter((el) => el.type === 'directory');
    },
    fileList() {
      return this.contents.filter((el) => el.type === 'file');
    },
    linkList() {
      return this.contents.filter((el) => el.type === 'link');
    },
  },
};
</script>

<style scoped>
.list {
  margin-left: 2rem;
}
</style>
