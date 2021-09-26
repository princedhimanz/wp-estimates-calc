<template>
  <div class="calculator">
    <div class="categories">
      <h3>1.Choose A Category</h3>
    </div>
    <div class="items">
      <h3>2.Click on your items for estimation</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
};
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: 300px auto;
}
</style>
