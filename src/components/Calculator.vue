<template>
  <div class="calculator">
    <div class="categories">
      <h3>1.Choose A Category</h3>
      <ul>
        <li v-for="category of categories" :key="category.name">
          {{category.name}}
        </li>
      </ul>
    </div>
    <div class="items">
      <h3>2.Click on your items for estimation</h3>
       <div class="itemsContainer">
        <div v-for="item of categories[0].items" :key="item.name" class="item">
          <div>{{item.name}}</div>
          <NumberInputSpinner
            :min="0"
            :max="10"
            :step="2"
            :integerOnly="true"
            v-model="yourVModel"
          />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NumberInputSpinner from 'vue-number-input-spinner';

export default {
  name: 'Calculator',
  components: {
    NumberInputSpinner,
  },
  data: () => ({
    categories: [
      {
        name: 'Furniture',
        items: [
          {
            name: '2 Seater Sofa',
          },
          {
            name: '3 Seater Sofa',
          },
          {
            name: 'Arm Chair',
          },
          {
            name: 'Bed, Double Complete',
          },
          {
            name: 'Bed, King-size complete',
          },
          {
            name: 'Bed, Single Complete',
          },
          {
            name: 'Bed Side Unit, Cabnet or Table',
          },
          {
            name: 'Blanket Box, Ottoman',
          },
          {
            name: 'Bookcase/Shelving Unit',
          },
          {
            name: 'Bunk Bed / Cabin Bed',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },

        ],
      },
      {
        name: 'Household',
        items: [],
      },
      {
        name: 'Carpent & Flooring',
        items: [],
      },
      {
        name: 'Bedding & Window Dressing',
        items: [],
      },
      {
        name: 'Bathroom',
        items: [],
      },
    ],
  }),
};
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: 300px auto;
  margin: 2em;
  gap: 2em;
}

ul{
  list-style: none;
  margin: 2em 0
}
.categories li{
  background: #d3d3d3;
  padding: 1em 2em;
  margin-top:5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s linear;
  box-shadow: 1px 1px 4px #ddd;
}
.categories li:hover{
  background: #b3b3b3
}
.itemsContainer{
  margin: 2em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  padding: 0 2em;
}
.item{
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
}

</style>
