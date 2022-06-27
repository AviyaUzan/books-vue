import { utilService } from '../services/util-service.js';
import longText from "../cmps/long-text.cmp.js";
export default {
  props: ["book"],
  template: `
    <section class="book-details">
      <div>
      <img class="img-preview" :src="book.thumbnail">
      </div>
      <div class="all-details">
        <p>Book name: {{book.title}}</p>
        <long-text :txt="book.description"></long-text>
        <p>Authors: {{bookAuthors}}</p>
        <p>Price: <span :class="greenOrRed"> {{formattedPrice}}</span></p>
        <p>Published date: {{getPublishedDate}}</p>
        <p>Page count: {{getPageCount}}</p>
        <p>categories: {{bookCategories}}</p>
        <p>Language: {{getBookLang}}</p>
        <p>{{bookSale}}</p>
          <button class="back-btn" @click="$emit('close')">Back>></button>
      </section>
      </div>
`,
  data() {
    return {
      pageCount: null,
      publishDate: null,
      price:null,
      formattedPrice: null,
      isBookSale: null,
      bookLang: null,
    };
  },
  components:{
    longText,
  },
  methods: {},
  computed: {
    getBookLang(){
      if(this.bookLang === 'en') return 'English'
      else if(this.bookLang === 'sp') return 'Spanish'
      else if(this.bookLang === 'he') return 'Hebrew'
    },
    bookSale(){
      if(this.isBookSale) return 'SALE!'
      else if(!this.isBookSale) return ''
    },
    bookAuthors(){
      return this.book.authors.join(', ')
    },
    bookCategories(){
      return this.book.categories.join(', ')
    },
    getPageCount() {
      if (this.pageCount > 500) return this.pageCount + ' Long reading'
      else if(this.pageCount > 200) return this.pageCount + ' Decent Reading'
      else if(this.pageCount < 100) return this.pageCount + ' Light Reading'
      else return this.pageCount
    },
    getPublishedDate() {
      if (new Date().getFullYear() - this.publishDate > 10) return this.publishDate + ' Veteran Book'
      else if(new Date().getFullYear() - this.publishDate < 1) return this.publishDate + ' New'
      else return this.publishDate
    },
    greenOrRed() {
      return {
        red: this.price > 150,
        green: this.price < 20
      }
    }
    },
    created(){
      this.bookLang = this.book.language
      this.isBookSale = this.book.listPrice.isOnSale
      this.pageCount = this.book.pageCount
      this.publishDate = this.book.publishedDate
      this.price = this.book.listPrice.amount
      const { amount, currencyCode} = this.book.listPrice
        this.formattedPrice =
        utilService.getCurrency(amount, currencyCode)
        // utilService.greenOrRed(amount)
    },
};

// id: "OXeMG8wNskc",
// title: "metus hendrerit",
// subtitle: "mi est eros convallis auctor arcu dapibus himenaeos",
// authors: [
//   "Barbara Cartland"
// ],
// publishedDate: 1999,
// description: "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
// pageCount: 713,
// categories: [
//   "Computers",
//   "Hack"
// ],
// thumbnail: "http://coding-academy.org/books-photos/20.jpg",
// language: "en",
// listPrice: {
//   amount: 109,
//   currencyCode: "EUR",
//   isOnSale: false
// }
