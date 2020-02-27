<template>
  <div class="bl-node">
    <div
      class="bl-node-signal"
      @click="$emit('update:open', !open)"
    >
      {{ signal }}
      <div class="bl-node-content">
        <slot v-if="open" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';

export default {
  name: 'BlTreeNode',
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const signal = computed(() => (props.open ? '-' : '+'));

    return {
      signal,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bl-node .bl-node-signal {
  cursor: pointer;
}
</style>
