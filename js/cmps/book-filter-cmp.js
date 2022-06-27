export default {
  template: `
 <section class="book-filter">
    <p>
         Book name :
      <input type="text" v-model="filterBy.title" @input="filter" placeholder="Enter book Name">
    </p>
    <p>
        Max price : 
      <input type="text" v-model="filterBy.maxPrice" @input="filter" placeholder="Enter max price">
    </p>
    <p>
      Min price : 
    <input type="text" v-model="filterBy.minPrice" @input="filter" placeholder="Enter min price">
    </p>
 </section>
`,
  data() {
    return {
      filterBy: {
        title: null,
        maxPrice: null,
        minPrice: null,
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
  },
  computed: {},
};
