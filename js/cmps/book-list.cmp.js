import bookPreview from "./book-preview.cmp.js";

export default {
  props: ["books"],
  template: `
  <section class="book-list-container">
   <ul class="book-list">
    <li v-for="(book,idx) in books" :key="book.id" class="book-preview-container">
      <book-preview :book="book"/>
        <div class="actions">
          <!-- <button class="details" @click="select(book)">Details</button> -->
          <router-link class="details" :to="'/book/'+book.id">Details</router-link>
          <p class="remove" >Dont like this book?&nbsp;<span class="remove-here" @click="remove(book.id)">Click here to Delete</span></p>
          <!-- <button class="remove" @click="remove(book.id)">Dont like this book? Click here</button> -->
        </div>
     </li>
    </ul>
  </section>

`,
  components: {
    bookPreview,
  },

  data() {
    return {};
  },
  methods: {
    remove(bookId) {
      this.$emit("removed", bookId);
    },
    select(book) {
      this.$emit("selected", book);
    },
  },
  computed: {},
};
