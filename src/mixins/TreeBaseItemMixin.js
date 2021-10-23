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
};
