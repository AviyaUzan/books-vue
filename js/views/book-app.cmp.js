import { bookService } from '../services/book-service.js';
import bookList from '../cmps/book-list.cmp.js';
import bookDetails from './book-details.cmp.js';
import bookFilter from '../cmps/book-filter-cmp.js';

export default {
    template: `
  <section class="book-app">
    <book-filter v-if="!selectedBook" @filtered="filterBook"/>
    <book-list v-if="!selectedBook" @removed="removeBook" @selected="selectBook" :books="booksToShow" />
    <!-- <book-details v-if="selectedBook" @close="selectedBook = null" :book="selectedBook" /> -->
  </section>
`,
    components: {
        bookList,
        bookDetails,
        bookFilter,
    },
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null,
        };
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId).then(() => {
                console.log('Deleted successfully');
                const idx = this.books.findIndex((book) => book.id === bookId);
                this.books.splice(idx, 1);
            })
            // bookService.remove(bookId);
        },
        selectBook(book) {
            this.selectedBook = book;
        },
        saveBook(book) {
            this.books.push(book);
        },
        filterBook(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const maxPrice = this.filterBy.maxPrice || Infinity
            const minPrice = this.filterBy.minPrice || 0

            return this.books.filter((book) => {
                return book.title && book.listPrice.amount < maxPrice && book.listPrice.amount > minPrice;
            });
        },
    },
    created(){
        bookService.query().then(books => this.books = books)
    }
};
