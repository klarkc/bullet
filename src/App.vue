<template>
  <div id="app">
    <bl-tree v-bind="tree.bindings">
      <bl-tree-node
        #default="node"
        v-bind="node.bindings"
        v-on="node.listeners"
      />
    </bl-tree>
  </div>
</template>

<script>
import {
  useState as useTreeState,
  useBindings as useTreeBindings,
  useComponents as useTreeComponents,
} from './tree';

export default {
  name: 'App',
  components: {
    ...useTreeComponents(),
  },
  setup() {
    const treeState = useTreeState([
      { id: 1, open: true, children: [2, 3, 4] },
    ]);
    const treeBindings = useTreeBindings(treeState);

    return {
      tree: {
        bindings: treeBindings,
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
