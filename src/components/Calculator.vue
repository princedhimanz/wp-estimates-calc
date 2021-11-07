<template>
  <div class="calculator">
    <div class="modal" v-if="modal" tabindex="0">
      <div class="modalCont" @focusout="() => modal = false"
        tabindex="0">
        <div class="card">
          <h2>Man & Van</h2>
          <p style="font-size:18px;margin-top:5px;">(Call Out Fee)</p>
          <img src="/man-van.png" style="max-width:100%" />
          <h3>£60.99</h3>
          <br />
           <button class="bookBtn" @click="handleBtn">Book Now</button>
        </div>
         <div class="card">
            <h2>Skips</h2>
             <p style="font-size:18px;margin-top:5px;">(4 Cubic Yards)</p>
             <img src="/skip.png" style="max-width:100%" />
             <h3>£254.00</h3>
             <br />
              <button class="bookBtn" @click="handleBtn">Book Now</button>
         </div>
          <div class="card">
             <h2>Skip Bags</h2>
              <p style="font-size:18px;margin-top:5px;">(1 Small)</p>
              <br />
              <img src="/skip-bag.png" style="max-width:100%" />
              <br />
              <br />
              <br />
              <br />
              <h3>£119.99</h3>
              <br />
               <button class="bookBtn" @click="handleBtn">Book Now</button>
          </div>
      </div>
    </div>
    <div class="categories">
      <h3>1.Choose A Category</h3>
      <ul>
        <li
          v-for="category of categories"
          :key="category.name"
          @click="activeCategory = category.name"
          :class="{active:activeCategory === category.name}"
        >
          {{ category.name }} - {{ getCategorySelectedItems(category.name) }}
        </li>
      </ul>
    </div>
    <div class="items">
      <h3>2.Click on your items for estimation</h3>
      <div class="itemsContainer">
        <div v-for="item of activeCategoryItems" :key="item.name" class="item">
          <div>{{ item.name }}</div>
          <div class="numberInput">
            <button
            class="inputBtn"
            @click="() => {
              if((item.selected - 1) >= 0){
                item.selected--
                itemsCost -= item.cost
                 volume -= item.volume
              }
            }"> - </button>
            <div class="inputBox">
              <input type="text" readonly v-model="item.selected" />
              </div>
            <button class="inputBtn" @click="() => {
              item.selected++
              itemsCost += item.cost
              volume += item.volume
              }"> + </button>
            </div>
          <!-- <integer-plusminus :min="0"
                   :max="100"
                   :step="1"
                   :vertical="false"
                   :disabled="false"
                   formName="integer_plus_minus"
                   v-model="item.selected"></integer-plusminus> -->

          <!-- <NumberInputSpinner
            :min="0"
            :max="100"
            :step="1"
            :integerOnly="true"
            v-model="item.selected"
            @change="test"
          /> -->
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="d-flex">
        <div style="width: 250px">
          <img src="logo.png" style="max-width:100%" />
        </div>
        <div class="progressBar d-flex">
          <h4>Capacity</h4>
          <div style="width:300px"><progress-bar
          size="huge"
          :val="volume * 4.76"
          :text="`${volume.toFixed()} ㎥`"
          bar-color="#3353e9"
          :bar-border-radius="20"
          text-position="middle"
          :font-size="16"
          />
          </div>
          <h4>Max</h4>
          </div>
      </div>
      <div class="d-flex">
        <h3>Cost: £{{getTotalCost}}</h3>
        <button class="bookBtn" @click="modal = true">Book Now</button>
      </div>
    </footer>
  </div>
</template>

<script>
// import NumberInputSpinner from 'vue-number-input-spinner';
import ProgressBar from 'vue-simple-progress';
// import { IntegerPlusminus } from 'vue-integer-plusminus';

export default {
  name: 'Calculator',
  components: {
    // NumberInputSpinner,
    ProgressBar,
  },
  computed: {
    activeCategoryItems() {
      return this.categories.filter(
        (category) => category.name === this.activeCategory,
      )[0].items;
    },
    getTotalCost() {
      return this.estimatedCost < this.itemsCost ? this.itemsCost.toFixed(2) : this.estimatedCost;
    },
  },
  methods: {
    getCategorySelectedItems(categoryName) {
      return this.categories.filter(
        (category) => category.name === categoryName,
      )[0].items.reduce((acc, item) => acc + item.selected, 0);
    },
    handleBtn() {
      const url = `http://www.readingrubbishclearance.co.uk/booking-form/?amount=${this.estimatedCost}&item=readingrubbishclearance`;
      window.open(url, '_blank').focus();
    },
  },
  data: () => ({
    activeCategory: 'Furniture',
    estimatedCost: 60.99,
    itemsCost: 0,
    volume: 0,
    modal: false,
    categories: [
      {
        name: 'Furniture',
        items: [
          {
            name: '2 Seater Sofa',
            selected: 0,
            cost: 26.35,
            volume: 1,
          },
          {
            name: '3 Seater Sofa',
            selected: 0,
            cost: 39.49,
            volume: 1.3,
          },
          {
            name: 'Arm Chair',
            selected: 0,
            cost: 19.31,
            volume: 0.65,
          },
          {
            name: 'Bed, Double Complete',
            selected: 0,
            cost: 43.89,
            volume: 1,
          },
          {
            name: 'Bed, King-size complete',
            selected: 0,
            cost: 61.442,
            volume: 1,
          },
          {
            name: 'Bed, Single Complete',
            selected: 0,
            cost: 26.35,
            volume: 1,
          },
          {
            name: 'Bed Side Unit, Cabnet or Table',
            selected: 0,
            cost: 4.402,
            volume: 1,
          },
          {
            name: 'Blanket Box, Ottoman',
            selected: 0,
            cost: 8.773,
            volume: 1,
          },
          {
            name: 'Bookcase / Shelving Unit',
            selected: 0,
            cost: 35.124,
            volume: 1,
          },
          {
            name: 'Bunk Bed / Cabin Bed',
            selected: 0,
            cost: 43.896,
            volume: 1,
          },
          {
            name: 'Cabinet (display & kitchen), Bureau',
            selected: 0,
            cost: 35.123,
            volume: 1,
          },
          {
            name: 'Cabinet or filling cabinet, small',
            selected: 0,
            cost: 5.27,
            volume: 1,
          },
          {
            name: 'Chair, Kitchen, Dining or Wooden',
            selected: 0,
            cost: 4.402,
            volume: 1,
          },
          {
            name: 'Chaise Longue',
            selected: 0,
            cost: 43.896,
            volume: 1,
          },
          {
            name: 'Chest-of-Drawers, Tallboy',
            selected: 0,
            cost: 26.35,
            volume: 1,
          },
          {
            name: 'Dressing table',
            selected: 0,
            cost: 24.582,
            volume: 1,
          },
          {
            name: 'Electric Armchair',
            selected: 0,
            cost: 19.312,
            volume: 1,
          },
          {
            name: 'Electric Bed, double',
            selected: 0,
            cost: 43.896,
            volume: 1,
          },
          {
            name: 'Electric Bed, single',
            selected: 0,
            cost: 26.35,
            volume: 1,
          },
          {
            name: 'Filing cabinet, large',
            selected: 0,
            cost: 10.54,
            volume: 1,
          },
          {
            name: 'Grandfather clock',
            selected: 0,
            cost: 17.546,
            volume: 1,
          },
          {
            name: 'Large Desk',
            selected: 0,
            cost: 39.494,
            volume: 1,
          },
          {
            name: 'Mattress, double',
            selected: 0,
            cost: 24.88,
            volume: 1,
          },
          {
            name: 'Mattress, king-size',
            selected: 0,
            cost: 33.25,
            volume: 1,
          },
          {
            name: 'Mattress, single',
            selected: 0,
            cost: 19.30,
            volume: 1,
          },
          {
            name: 'Piano',
            selected: 0,
            cost: 41.26,
            volume: 1,
          },
          {
            name: 'Small Desk, Computer Table',
            selected: 0,
            cost: 21.948,
            volume: 1,
          },
          {
            name: 'TV / Hi-fi unit',
            selected: 0,
            cost: 17.546,
            volume: 1,
          },
          {
            name: 'Table small eg. Cane, coffee',
            selected: 0,
            cost: 4.402,
            volume: 1,
          },
          {
            name: 'Table, large e.g. dining',
            selected: 0,
            cost: 43.896,
            volume: 1,
          },
          {
            name: 'Table, medium e.g. kitchen',
            selected: 0,
            cost: 30.721,
            volume: 1,
          },
          {
            name: 'Vanity Seat',
            selected: 0,
            cost: 23.715,
            volume: 1,
          },
          {
            name: 'Wardrobe, double',
            selected: 0,
            cost: 68.478,
            volume: 1,
          },
          {
            name: 'Wardrobe, single',
            selected: 0,
            cost: 17.546,
            volume: 1,
          },
          {
            name: 'Welsh Dresser',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
        ],
      },
      {
        name: 'Household',
        items: [
          {
            name: 'Bric-a-Brac',
            selected: 0,
            cost: 32.49,
            volume: 1,
          },
          {
            name: 'Bric-a-Brac (smaill packet)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Cot',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'High Chair',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Large misc, eg carpet cleaner, large mirror, ladder, laundry basket, loose shelves',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Medium misc, eg tea trolley, ironing board, plant stand, coat or hat stand, small mirror, clothes horse',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'toys, box full',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
        ],
      },
      {
        name: 'Carpent & Flooring',
        items: [
          {
            name: 'Small rug 3 x 6',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Carpet tiles, lino, carpet, flooring or underlay for standard room 12 x 12',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
        ],
      },
      {
        name: 'Bedding & Window Dressing',
        items: [
          {
            name: 'Blanket, towel, throw, duvet cover',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Blinds (fabric), light or mid weight curtains',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Blinds (wood)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Pillow, pillow case',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Sheet',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
        ],
      },
      {
        name: 'Bathroom',
        items: [
          {
            name: 'Bath (metal)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Bath (non-metal)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Shower Screen',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Shower equipment / tray',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Sink (ceramic)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Sink (metal)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Toilet',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Vanity Unit, including sink',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },

        ],
      },
      {
        name: 'DIY & Garden',
        items: [
          {
            name: 'BBQ',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Chair (metal, plastic or wood)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Door (pvc)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Door (wood)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Gate (metal)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Gate (wood)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Lounger',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Paint (5|)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Patio Door',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Table (metal, plastic or wood)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Tiles (ceramic), per square metre',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Tool (large) i.e. spade, fork',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Tool (small) i.e. trowel',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Waterbutt',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Wheelbarrow',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Window (glazed)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Window (wood)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Worktop (kitchen)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
        ],
      },
      {
        name: 'Gas Appliances',
        items: [
          {
            name: 'Cooker, gas',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Fire, gas',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Hob, gas',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
        ],
      },
      {
        name: 'Electrical',
        items: [
          {
            name: 'Air Conditioner, Dehumidifier',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'American Style',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Computer, base unit',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Cooker hood',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Cooker electric',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Dishwasher',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Electric sewing maching',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Freezer, chest',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Freezer, free standing',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Freezer, undercounter',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Fridge-Freezer',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Gareden tools,electric (large) i.e. lawnmower, shredder',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Gareden tools,electric (small) i.e. strimmer, hedge cutter, garden vac',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Hair & Beauty elec i.e. hair dryer, foot massager, hair curlers, hair straignteners',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Hi-fi, separates (amplifier, cassette deck, CD player, radio, speakers)',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Hob, electric',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Lamp / Light',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Laptop',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Medium elec - bread machine, video camera, trouser press',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Microwave',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Musical instruments i.e. keyboard, organ',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'PC printers, scanners, shredder',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Photocopier',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Power tools i.e. drill, electric screwdriver',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'TV',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Tumble-Dryer',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Vacuum',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Video, DVD, Games Consoles, Digiboxes ',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Washing Machine',
            selected: 0,
            cost: 44.20,
            volume: 1,
          },
          {
            name: 'Wordprocessor, Electric Typewritter',
            selected: 0,
            cost: 44.20,
            volume: 1,
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
  grid-template-columns: 320px auto;
  margin: 2em;
  gap: 2em;
  background: #fff;
}

ul {
  list-style: none;
  margin: 2em 0;
}
.categories li {
  background: #3353E9;
  padding: 1em 2em;
  margin-top: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s linear;
  box-shadow: 1px 1px 4px #ddd;
  color: #fff;
}
.categories li:hover, .categories li.active {
  background: #243ba5;
}
.itemsContainer {
  margin: 2em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  padding: 0 2em;
  margin-bottom: 5em;
  max-height: calc( 100vh - 15em );
  overflow-y:scroll;
}
.item {
  padding: 0.5em;
  display: grid;
  grid-template-columns: auto 100px;
  justify-content: space-between;
  align-items: center;
}
.footer {
  background: #F7C40D;
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
  border: 2px solid #3353e9;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  color: #fff;
  background: #3353e9;
  margin: 0 2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.bookBtn:hover {
  background: #4664e9;
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
  font-weight: bold !important;
  /* color: #fff !important; */
}
.numberInput {
    display: grid;
    grid-template-columns: 25px auto 25px;
    width: 100%;
}
.inputBox input{
  width:100%;
  height: 100%;
    border: 1px solid #F7C40D;
    text-align: center;
    outline:none;
}
button.inputBtn {
    height: 25px;
    font-size: 18px;
    font-weight: bold;
    width: 25px;
    border: 0;
    background: #F7C40D;
    color: #fff;
    cursor: pointer;

}
button.inputBtn:hover {
  background: #cfa50a;
}
.modal{
  padding:2em;
  position: fixed;
  width:100vw;
  height: 100vh;
  background: rgba(0, 0, 0,0.2);
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index:9;
}
.modalCont{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:20px;
  width:70%;
  height:90%;
  max-height:600px;
  background: #fff;
  padding: 2em;
}
.card{
  text-align: center;
  width:100%;
    box-shadow: 1px 1px 5px 2px #ddd;
    padding: 1em;
}

</style>
