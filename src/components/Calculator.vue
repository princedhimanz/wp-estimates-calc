<template>
  <div class="calculator">
    <div class="categories">
      <h3>1.Choose A Category</h3>
      <ul>
        <li
          v-for="category of categories"
          :key="category.name"
          @click="activeCategory = category.name"
          :class="{active:activeCategory === category.name}"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
    <div class="items">
      <h3>2.Click on your items for estimation</h3>
      <div class="itemsContainer">
        <div v-for="item of activeCategoryItems" :key="item.name" class="item">
          <div>{{ item.name }}</div>
          <NumberInputSpinner
            :min="0"
            :max="100"
            :step="1"
            :integerOnly="true"
            v-model="yourVModel"
          />
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="d-flex">
        <h2>Logo Here</h2>
        <div class="progressBar d-flex">
          <h4>Capacity</h4>
          <div style="width:300px"><progress-bar
          size="huge"
          val="60"
          text="69 ㎥"
          bar-color="#69b2c5"
          :bar-border-radius="20"
          text-position="middle"
          :font-size="16"
          />
          </div>
          <h4>Max</h4>
          </div>
      </div>
      <div class="d-flex">
        <h3>Cost: ${{estimatedCost}}</h3>
        <button class="bookBtn">Book Now</button>
      </div>
    </footer>
  </div>
</template>

<script>
import NumberInputSpinner from 'vue-number-input-spinner';
import ProgressBar from 'vue-simple-progress';

export default {
  name: 'Calculator',
  components: {
    NumberInputSpinner,
    ProgressBar,
  },
  computed: {
    activeCategoryItems() {
      return this.categories.filter(
        (category) => category.name === this.activeCategory,
      )[0].items;
    },
  },
  data: () => ({
    activeCategory: 'Furniture',
    estimatedCost: 60.99,
    volume: 0,
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
        items: [
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
        ],
      },
      {
        name: 'Carpent & Flooring',
        items: [
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
        ],
      },
      {
        name: 'Bedding & Window Dressing',
        items: [
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
        ],
      },
      {
        name: 'Bathroom',
        items: [
          {
            name: '2 Seater Sofa',
          },
          {
            name: '2 Seater Sofa',
          },
        ],
      },
    ],
  }),
};
</script>

<style>
.calculator {
  display: grid;
  grid-template-columns: 300px auto;
  margin: 2em;
  gap: 2em;
}

ul {
  list-style: none;
  margin: 2em 0;
}
.categories li {
  background: #69b2c5;
  padding: 1em 2em;
  margin-top: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s linear;
  box-shadow: 1px 1px 4px #ddd;
  color: #fff;
}
.categories li:hover, .categories li.active {
  background: #5592a2;
}
.itemsContainer {
  margin: 2em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  padding: 0 2em;
  margin-bottom: 5em;
}
.item {
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer {
  background: #ddd;
  height: 5em;
  width: 100%;
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em;
}
.d-flex {
  display: flex;
  align-items: center;
}
.bookBtn {
  padding: 0.75em 2em;
  border: 2px solid #387e90;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  color: #244f5a;
  background: #fff;
  margin: 0 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.bookBtn:hover {
  background: #387e90;
  color:#fff
}
.progressBar{
  margin-left:2em;
}
.vue-simple-progress{
  margin: 0 1em;
}
.vue-simple-progress-text{
  font-size: 18px !important;
  color: #fff !important;
}
</style>
