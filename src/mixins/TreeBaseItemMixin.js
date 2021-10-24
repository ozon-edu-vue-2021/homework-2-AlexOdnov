export default {
  name: 'TreeBaseItemMixin',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    select() {
      this.$emit('select', this.text);
    },
  },
  inject: ['linkPath'],
  mounted() {
    if (this.linkPath[0] === this.text) {
      this.$refs.item.focus();
      window.scrollBy(
        0,
        this.$refs.item.getBoundingClientRect().top -
          document.documentElement.clientHeight / 2
      );
      this.linkPath.shift();
    }
  },
};
