import { bookService } from '../services/book-service.js';

export default {
    template:`
        <section>
            <input v-model="value" @change="onSetSearch" type="text" placeholder="Search a book">
        </section>
   `,
     data() {
       return {
            value: null,
       }
     },
     methods:{
        onSetSearch(value) {
        bookService.askSearchResults(this.value)
        .then( res => 
            console.log('res.volumeInfo.title',res)

        )
        }
     },
   computed:{}
   }

