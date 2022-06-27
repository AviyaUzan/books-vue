import { utilService } from '../services/util-service.js';
export default {
    props: ['book'],
    template: `
    <img :src="book.thumbnail">
    <p class="book-title">{{book.title}}</p>
    <p class="price">{{formattedPrice}}</p>
`,
    data() {
        return {
            formattedPrice: ''
        };
    },
    created(){
      const { amount, currencyCode} = this.book.listPrice
      this.formattedPrice =
       utilService.getCurrency(amount, currencyCode)
    },
    methods: {},
    computed: {},
};

// listPrice: {
//   amount: 109,
//   currencyCode: "EUR",
//   isOnSale: false
// }
