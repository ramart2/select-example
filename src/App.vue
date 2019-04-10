<template>
  <div id="app">

    <HelloWorld ref="childComponent" />
    <button @click="sayHello">Say hello in the child component</button>

	  <!-- <div style="margin-top: 25%;"> -->
		  <!-- <div> -->
			  <!-- <label class="typo__label" for="ajax">Async multiselect</label> -->
			  <!--<multiselect-->
				  <!--v-model="value"-->
				  <!--id="ajax"-->
				  <!--label="name"-->
				  <!--track-by="code"-->
				  <!--placeholder="Type to search"-->
				  <!--open-direction="bottom"-->
				  <!--:options="options"-->
				  <!--:searchable="true"-->
				  <!--:loading="isLoading"-->
				  <!--:internal-search="true"-->
				  <!--:close-on-select="true"-->
				  <!--:show-no-results="true"-->
			  <!--&gt;-->
				  <!--<template slot="clear" slot-scope="props">-->
					  <!--<div class="multiselect__clear"></div>-->
				  <!--</template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>-->
			  <!--</multiselect>-->
			  <!-- <multiselect
				  v-model="value"
				  id="ajax"
				  label="name"
				  track-by="code"
				  placeholder="Type to search"
				  open-direction="bottom"
				  :options="filterOptions"
				  :searchable="true"
				  :loading="isLoading" :internal-search="false"
				  :close-on-select="true"
				  :show-no-results="true"
				  @input="show"
				  @search-change="find">
				  <template slot="clear" slot-scope="props">
					  <div class="multiselect__clear"></div>
				  </template><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
			  </multiselect>
			  <pre class="language-json"><code>{{ value  }}</code></pre>
		  </div> -->
	  <!-- </div> -->

    <!--<v-popover-->
      <!--offset="16"-->
    <!--&gt;-->
      <!--&lt;!&ndash; This will be the popover target (for the events and position) &ndash;&gt;-->
      <!--<button class="tooltip-target b3">Click me</button>-->

      <!--&lt;!&ndash; This will be the content of the popover &ndash;&gt;-->
      <!--<template slot="popover">-->
        <!--<input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />-->
        <!--<p>-->
          <!--{{ msg }}-->
        <!--</p>-->

        <!--&lt;!&ndash; You can put other components too &ndash;&gt;-->
         <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App" char="="/>-->
        <!--&lt;!&ndash; <ExampleComponent char="=" /> &ndash;&gt;-->
      <!--</template>-->
    <!--</v-popover>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
	data() {
        return {
        	showModal: false,
            value: null,
	        isLoading: false,
            options: [
		        { name: 'Engineer' }, { name: 'Aerospace Engineer' },
		        { name: 'Agricultural Engineer' }, { name: 'Biological Engineer' },
		        { name: 'Audio Engineer' }, { name: 'Bioengineering' },
		        { name: 'Biochemical Engineer' }, { name: 'Biomedical Engineer' },
		        { name: 'Ceramic Engineer' }, { name: 'Materials Engineer' },
		        { name: 'Chemical Engineer' }, { name: 'Civil Engineer' },
		        { name: 'Computer Engineer' }, { name: 'Environmental Engineer' },
		        { name: 'Electrical Engineer' }, { name: 'Geological Engineer' },
		        { name: 'Underwriter' }, { name: 'Sound Engineer' },
		        { name: 'Driver' }, { name: 'Bus Driver' },
		        { name: 'Electrical Electrician' }, { name: 'Insurance Underwriter' },
	        ],
	        selectedOptions: [],
	        query: ''
        }
	},
	computed: {
		filterOptions() {
			if (this.query === '') {
				return this.options
			} else {
				var ops = this.options;
				var filtered = [];
				var query = this.query.toLowerCase();

				ops.forEach(item => {

					// split each string into an array
					// check each item in the array
					// if the search query matches any of the beginning return the item
					const splicedItem = item.name.toLowerCase().split(" ");
					console.log(splicedItem);

					for (var word of splicedItem) {
						if (word.startsWith(query)) {
							filtered.push(item)
							console.log(item)
							break;
						}
					}



					// if (item.name.toLowerCase().startsWith(this.query.toLowerCase())) {
					// 	filtered.push(item)
					// 	console.log(item)
					// }
				});
				return filtered
			}
		}
		// filterOptions() {
		// 	if (this.query === '') {
		// 		return this.options
		// 	} else {
		// 		var ops = this.options
		// 		var filtered = []
		// 		ops.forEach(item => {
		// 			console.log(item);
		// 			if (item.name.toLowerCase().startsWith(this.query.toLowerCase())) {
		// 				filtered.push(item)
		// 				console.log(item)
		// 			}
		// 		});
		// 		return filtered
		// 	}
		// }
	},
	methods: {
    sayHello() {
      this.$refs.childComponent.sayHello();
    },
    show(val) {
      console.log(val);
    },
		find(value) {
  	    	this.query = value
		},
	}
}
</script>

<style scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

/*.tooltip {*/
  /*display: block !important;*/
  /*z-index: 10000;*/
/*}*/

/*.tooltip .tooltip-inner {*/
  /*background: black;*/
  /*color: white;*/
  /*border-radius: 16px;*/
  /*padding: 5px 10px 4px;*/
/*}*/

/*.tooltip .tooltip-arrow {*/
  /*width: 0;*/
  /*height: 0;*/
  /*border-style: solid;*/
  /*position: absolute;*/
  /*margin: 5px;*/
  /*border-color: black;*/
  /*z-index: 1;*/
/*}*/

/*.tooltip[x-placement^="top"] {*/
  /*margin-bottom: 5px;*/
/*}*/

/*.tooltip[x-placement^="top"] .tooltip-arrow {*/
  /*border-width: 5px 5px 0 5px;*/
  /*border-left-color: transparent !important;*/
  /*border-right-color: transparent !important;*/
  /*border-bottom-color: transparent !important;*/
  /*bottom: -5px;*/
  /*left: calc(50% - 5px);*/
  /*margin-top: 0;*/
  /*margin-bottom: 0;*/
/*}*/

/*.tooltip[x-placement^="bottom"] {*/
  /*margin-top: 5px;*/
/*}*/

/*.tooltip[x-placement^="bottom"] .tooltip-arrow {*/
  /*border-width: 0 5px 5px 5px;*/
  /*border-left-color: transparent !important;*/
  /*border-right-color: transparent !important;*/
  /*border-top-color: transparent !important;*/
  /*top: -5px;*/
  /*left: calc(50% - 5px);*/
  /*margin-top: 0;*/
  /*margin-bottom: 0;*/
/*}*/

/*.tooltip[x-placement^="right"] {*/
  /*margin-left: 5px;*/
/*}*/

/*.tooltip[x-placement^="right"] .tooltip-arrow {*/
  /*border-width: 5px 5px 5px 0;*/
  /*border-left-color: transparent !important;*/
  /*border-top-color: transparent !important;*/
  /*border-bottom-color: transparent !important;*/
  /*left: -5px;*/
  /*top: calc(50% - 5px);*/
  /*margin-left: 0;*/
  /*margin-right: 0;*/
/*}*/

/*.tooltip[x-placement^="left"] {*/
  /*margin-right: 5px;*/
/*}*/

/*.tooltip[x-placement^="left"] .tooltip-arrow {*/
  /*border-width: 5px 0 5px 5px;*/
  /*border-top-color: transparent !important;*/
  /*border-right-color: transparent !important;*/
  /*border-bottom-color: transparent !important;*/
  /*right: -5px;*/
  /*top: calc(50% - 5px);*/
  /*margin-left: 0;*/
  /*margin-right: 0;*/
/*}*/

/*.tooltip.popover .popover-inner {*/
  /*background: #f9f9f9;*/
  /*color: black;*/
  /*padding: 24px;*/
  /*border-radius: 5px;*/
  /*box-shadow: 0 5px 30px rgba(black, .1);*/
/*}*/

/*.tooltip.popover .popover-arrow {*/
  /*border-color: #f9f9f9;*/
/*}*/

/*.tooltip[aria-hidden='true'] {*/
  /*visibility: hidden;*/
  /*opacity: 0;*/
  /*transition: opacity .15s, visibility .15s;*/
/*}*/

/*.tooltip[aria-hidden='false'] {*/
  /*visibility: visible;*/
  /*opacity: 1;*/
  /*transition: opacity .15s;*/
/*}*/



/*.popover .popover-inner {*/
  /*background: #f9f9f9;*/
  /*color: black;*/
  /*padding: 24px;*/
  /*border-radius: 5px;*/
  /*box-shadow: 0 5px 30px rgba(black, .1);*/
/*}*/

/*.popover .popover-arrow {*/
  /*border-color: #f9f9f9;*/
/*}*/
  
</style>
