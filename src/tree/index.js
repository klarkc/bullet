import { ref } from '@vue/composition-api';
import BlTree from './components/BlTree.vue';
import BlTreeNode from './components/BlTreeNode.vue';

export function useComponents() {
  return { BlTree, BlTreeNode };
}

export function useState() {
  const openNodes = ref();
  return { openNodes };
}
