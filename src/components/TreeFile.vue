<template>
  <button class="item file" type="button" @click="select" ref="item">
    {{ text }}
  </button>
</template>

<script>
import TreeBaseItemMixin from '../mixins/TreeBaseItemMixin';

export default {
  name: 'TreeFile',
  mixins: [TreeBaseItemMixin],
};
</script>

<style scoped>
.file {
  background: lightgreen;
}
.file::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0.5rem;
  display: block;
  width: 0.75rem;
  height: 1rem;
  background: currentColor;
  border-radius: 0% 50% 0% 0% / 0% 50% 0% 0%;
  transform: translate(0, -50%);
}
</style>
