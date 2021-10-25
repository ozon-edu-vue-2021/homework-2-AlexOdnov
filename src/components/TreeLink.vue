<template>
  <button class="item link" type="button" @click="select" ref="item">
    {{ text }}
  </button>
</template>

<script>
import TreeBaseItemMixin from '../mixins/TreeBaseItemMixin';

export default {
  name: 'TreeLink',
  mixins: [TreeBaseItemMixin],
};
</script>

<style scoped>
.link {
  background: wheat;
}
.link::before {
  content: '';
  position: absolute;
  bottom: 0.8rem;
  left: 0.9rem;
  display: block;
  width: 0;
  height: 0;
  border-top: 9px solid transparent;
  border-right: 9px solid currentColor;
}
.link::after {
  content: '';
  position: absolute;
  border: 0 solid transparent;
  border-top: 3px solid currentColor;
  border-radius: 20px 0 0 0;
  bottom: 0.65rem;
  left: 0.45rem;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}
</style>
