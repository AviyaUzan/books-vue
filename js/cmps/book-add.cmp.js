import { bookService } from '../services/book-service.js';

export default {
    template:`
        <section>
            <input v-model="value" @change="onSetSearch" type="text" placeholder="Search a book">
            <div v-if="books">
              <ul v-for="book in books" :key="book.id">
                  <li>{{book.volumeInfo.title}}</li>
                  <button @click="onAddGoogleBook(book)">+</button>
              </ul>
            </div>
        </section>
   `,
     data() {
       return {
            value: null,
            books: null,
       }
     },
     methods:{
        onSetSearch() {
        bookService.askSearchResults(this.value)
        .then( res => {
          this.books = res
          console.log('res',res)
        })
        },
        onAddGoogleBook(book) {
          bookService.addGoogleBook({...book})
        }
      },
      computed:{}
    }
