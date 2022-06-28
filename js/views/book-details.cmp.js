// import { utilService } from '../services/util-service.js';
import longText from "../cmps/long-text.cmp.js";
import reviewAdd from "../cmps/review-add.cmp.js";
import { bookService } from '../services/book-service.js';

export default {
  // props: ["book"],
  template: `
    <section v-if="book" class="book-details">
      <div>
      <img class="img-preview" :src="book.thumbnail" />
      </div>
      <div class="all-details">
        <p>Book name: {{book.title}}</p>
        <long-text :txt="book.description" />
        <p>Authors: {{bookAuthors}}</p>
        <p>Price: 
          <span :class="greenOrRed"> {{getCurrency}}</span>
        </p>
        <p>Published date: {{getPublishedDate}}</p>
        <p>Page count: {{getPageCount}}</p>
        <p>categories: {{bookCategories}}</p>
        <p>Language: {{getBookLang}}</p>
        <p>reviews:</p>
        <p v-for="(review) in book.reviews">By: {{review.name}} {{review.date}}<br>
        <span v-for="star in review.rate">⭐</span>
        <br>{{review.text}}</p>
        <p>{{bookSale}}</p>
        <button class="add-review" @click="isAddReview = !isAddReview" >Add Review</button>
        <review-add class="form-review" v-if="isAddReview" :bookId="book.id"></review-add>
        <router-link class="back-btn" :to="'/book'">Back>></router-link>
        <router-link :to="'/book/' + nextBookId">Next Book</router-link>
        <router-link :to="'/book/' + prevBookId">Prev Book</router-link>
      </div>
    </section>
`,
  data() {
    return {
      book: null,
      isAddReview: false,
      nextBookId: null,
      prevBook: null,
    };
  },
  components:{
    longText,
    reviewAdd,
  },
  methods: {},
  computed: {
    getBookLang(){
      if(this.book.language === 'en') return 'English'
      else if(this.book.language === 'sp') return 'Spanish'
      else if(this.book.language === 'he') return 'Hebrew'
    },
    bookSale(){
      if(this.book.listPrice.isOnSale) return 'SALE!'
      else if(!this.book.listPrice.isOnSale) return ''
    },
    bookAuthors(){
      return this.book.authors.join(', ')
    },
    bookCategories(){
      return this.book.categories.join(', ')
    },
    getPageCount() {
      let pageCount = this.book.pageCount
      if (pageCount > 500) return pageCount + ' Long reading'
      else if(pageCount > 200) return pageCount + ' Decent Reading'
      else if(pageCount < 100) return pageCount + ' Light Reading'
      else return pageCount
    },
    getPublishedDate() {
      let publishedDate = this.book.publishedDate
      if (new Date().getFullYear() - publishedDate > 10) return publishedDate + ' Veteran Book'
      else if(new Date().getFullYear() - publishedDate < 1) return publishedDate + ' New'
      else return publishedDate
    },
    greenOrRed() {
      return {
        red: this.book.listPrice.amount > 150,
        green: this.book.listPrice.amount < 20
      }
    },
    getCurrency() {
      let price = this.book.listPrice.amount
      let currency = this.book.listPrice.currencyCode
      if (currency === 'USD') return '$' + price;
      else if (currency === 'ILS') return price + '₪'
      else if (currency === 'EUR') return '€' + price 
  }
    },
    watch: {
      '$route.params.bookId':{
          handler() {
              const id = this.$route.params.bookId
              bookService.get(id).then(book => {
                  this.book = book
                  bookService.getPrevBookId(book.id)
                      .then(prevBookId => this.prevBookId = prevBookId)
                  bookService.getNextBookId(book.id)
                      .then(nextBookId => this.nextBookId = nextBookId)
              })
          },
          immediate: true
      },  
  },
};