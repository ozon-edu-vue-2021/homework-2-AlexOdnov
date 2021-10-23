<template>
  <div>
    <button
      class="item directory"
      :class="{ 'directory-open': isOpen }"
      type="button"
      @click="open"
    >
      {{ dir.name }}
    </button>
    <tree-list
      v-if="isOpen"
      :contents="dir.contents || []"
      @select="onSelect"
    />
  </div>
</template>

<script>
import treeList from './TreeList.vue';

export default {
  name: 'TreeDirectory',
  components: { treeList },
  props: {
    dir: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
      this.$emit('select', this.dir.name);
    },
    onSelect(path) {
      this.$emit('select', `${this.dir.name}/${path}`);
    },
  },
};
</script>

<style scoped>
.directory {
  padding-left: 2rem;
  background: #ececec;
  border: 2px solid currentColor;
}
.directory::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0.5rem;
  display: block;
  width: 0;
  height: 0;
  border-top: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 0.5rem solid currentColor;
  transform: translate(30%, -50%);
}
.directory-open::before {
  border-top: 0.5rem solid currentColor;
  border-left: 0.5rem solid transparent;
  transform: translate(0, -30%);
}
</style>
