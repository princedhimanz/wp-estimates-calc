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
            name: 'Bookcase / Shelving Unit',
          },
          {
            name: 'Bunk Bed / Cabin Bed',
          },
          {
            name: 'Cabinet (display & kitchen), Bureau',
          },
          {
            name: 'Cabinet or filling cabinet, small',
          },
          {
            name: 'Chair, Kitchen, Dining or Wooden',
          },
          {
            name: 'Chaise Longue',
          },
          {
            name: 'Chest-of-Drawers, Tallboy',
          },
          {
            name: 'Dressing table',
          },
          {
            name: 'Electric Armchair',
          },
          {
            name: 'Electric Bed, double',
          },
          {
            name: 'Electric Bed, single',
          },
          {
            name: 'Filing cabinet, large',
          },
          {
            name: 'Grandfather clock',
          },
          {
            name: 'Large Desk',
          },
          {
            name: 'Mattress, double',
          },
          {
            name: 'Mattress, king-size',
          },
          {
            name: 'Mattress, single',
          },
          {
            name: 'Piano',
          },
          {
            name: 'Small Desk, Computer Table',
          },
          {
            name: 'TV / Hi-fi unit',
          },
          {
            name: 'Table small eg. Cane, coffee',
          },
          {
            name: 'Table, large e.g. dining',
          },
          {
            name: 'Table, medium e.g. kitchen',
          },
          {
            name: 'Vanity Seat',
          },
          {
            name: 'Wardrobe, double',
          },
          {
            name: 'Wardrobe, single',
          },
          {
            name: 'Welsh Dresser',
          },
        ],
      },
      {
        name: 'Household',
        items: [
          {
            name: 'Bric-a-Brac',
          },
          {
            name: 'Bric-a-Brac (smaill packet)',
          },
          {
            name: 'Cot',
          },
          {
            name: 'High Chair',
          },
          {
            name: 'Large misc, eg carpet cleaner, large mirror, ladder, laundry basket, loose shelves',
          },
          {
            name: 'Medium misc, eg tea trolley, ironing board, plant stand, coat or hat stand, small mirror, clothes horse',
          },
          {
            name: 'toys, box full',
          },
        ],
      },
      {
        name: 'Carpent & Flooring',
        items: [
          {
            name: 'Small rug 3 x 6',
          },
          {
            name: 'Carpet tiles, lino, carpet, flooring or underlay for standard room 12 x 12',
          },
        ],
      },
      {
        name: 'Bedding & Window Dressing',
        items: [
          {
            name: 'Blanket, towel, throw, duvet cover',
          },
          {
            name: 'Blinds (fabric), light or mid weight curtains',
          },
          {
            name: 'Blinds (wood)',
          },
          {
            name: 'Pillow, pillow case',
          },
          {
            name: 'Sheet',
          },
        ],
      },
      {
        name: 'Bathroom',
        items: [
          {
            name: 'Bath (metal)',
          },
          {
            name: 'Bath (non-metal)',
          },
          {
            name: 'Shower Screen',
          },
          {
            name: 'Shower equipment / tray',
          },
          {
            name: 'Sink (ceramic)',
          },
          {
            name: 'Sink (metal)',
          },
          {
            name: 'Toilet',
          },
          {
            name: 'Vanity Unit, including sink',
          },

        ],
      },
      {
        name: 'DIY & Garden',
        items: [
          {
            name: 'BBQ',
          },
          {
            name: 'Chair (metal, plastic or wood)',
          },
          {
            name: 'Door (pvc)',
          },
          {
            name: 'Door (wood)',
          },
          {
            name: 'Gate (metal)',
          },
          {
            name: 'Gate (wood)',
          },
          {
            name: 'Lounger',
          },
          {
            name: 'Paint (5|)',
          },
          {
            name: 'Patio Door',
          },
          {
            name: 'Table (metal, plastic or wood)',
          },
          {
            name: 'Tiles (ceramic), per square metre',
          },
          {
            name: 'Tool (large) i.e. spade, fork',
          },
          {
            name: 'Tool (small) i.e. trowel',
          },
          {
            name: 'Waterbutt',
          },
          {
            name: 'Wheelbarrow',
          },
          {
            name: 'Window (glazed)',
          },
          {
            name: 'Window (wood)',
          },
          {
            name: 'Worktop (kitchen)',
          },
        ],
      },
      {
        name: 'Gas Appliances',
        items: [
          {
            name: 'Cooker, gas',
          },
          {
            name: 'Fire, gas',
          },
          {
            name: 'Hob, gas',
          },
        ],
      },
      {
        name: 'Electrical',
        items: [
          {
            name: 'Air Conditioner, Dehumidifier',
          },
          {
            name: 'American Style',
          },
          {
            name: 'Computer, base unit',
          },
          {
            name: 'Cooker hood',
          },
          {
            name: 'Cooker electric',
          },
          {
            name: 'Dishwasher',
          },
          {
            name: 'Electric sewing maching',
          },
          {
            name: 'Freezer, chest',
          },
          {
            name: 'Freezer, free standing',
          },
          {
            name: 'Freezer, undercounter',
          },
          {
            name: 'Fridge-Freezer',
          },
          {
            name: 'Gareden tools,electric (large) i.e. lawnmower, shredder',
          },
          {
            name: 'Gareden tools,electric (small) i.e. strimmer, hedge cutter, garden vac',
          },
          {
            name: 'Hair & Beauty elec i.e. hair dryer, foot massager, hair curlers, hair straignteners',
          },
          {
            name: 'Hi-fi, separates (amplifier, cassette deck, CD player, radio, speakers)',
          },
          {
            name: 'Hob, electric',
          },
          {
            name: 'Lamp / Light',
          },
          {
            name: 'Laptop',
          },
          {
            name: 'Medium elec - bread machine, video camera, trouser press',
          },
          {
            name: 'Microwave',
          },
          {
            name: 'Musical instruments i.e. keyboard, organ',
          },
          {
            name: 'PC printers, scanners, shredder',
          },
          {
            name: 'Photocopier',
          },
          {
            name: 'Power tools i.e. drill, electric screwdriver',
          },
          {
            name: 'TV',
          },
          {
            name: 'Tumble-Dryer',
          },
          {
            name: 'Vacuum',
          },
          {
            name: 'Video, DVD, Games Consoles, Digiboxes ',
          },
          {
            name: 'Washing Machine',
          },
          {
            name: 'Wordprocessor, Electric Typewritter',
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
