import { bookService } from '../services/book-service.js'

export default{
    props:["bookId"],
    template:`

    <form  @submit.prevent="onAddReview">
        <input type="text" v-model="review.name" placeholder="Enter your name" >
        <select v-model="review.rate" placeholder="choose your rate">
        <option value="" disabled selected>Select your Rate</option>
            <option v-for="rate in rates" :value="rate">
                {{'⭐'.repeat(rate)}}
            </option>
        </select>
        <textarea placeholder="Write your review..." v-model="review.text" rows="9" cols="50"></textarea>
        <button>Submit</button>
    </form>
    `,
    data() {
        return {
            review: {
                name: '',
                rate: '',
                date: null,
                text: ''
            },
            rates: [1,2,3,4,5]
        }
    },
    methods: {
        getCurrDate(){
            let today = new Date()
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
                return today =  mm + '/' + dd + '/' + yyyy;
        },
        
        onAddReview(){
            if(!this.review.rate) return
            this.review.date = this.getCurrDate()
            if(!this.name) this.review.name = 'Books Reader'
            bookService.addReview(this.bookId, {...this.review})
            this.$router.go()

        }
    },
}