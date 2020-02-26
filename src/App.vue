<template>
  <div id="app">
    <bl-node>
      <bl-node :fill=".2">
        Renda Fixa
      </bl-node>
      <bl-node :fill=".5">
        Renda Variável
      </bl-node>
      <bl-node :fill=".3">
        Fundos
      </bl-node>
    </bl-node>
  </div>
</template>

<script>
import BlNode from './components/BlNode.vue';

export default {
  name: 'App',
  components: {
    BlNode,
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
