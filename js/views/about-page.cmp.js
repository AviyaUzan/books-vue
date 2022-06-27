// import { eventBus } from "../services/eventBus-service.js";

export default {
    template: `
 <section class="about-page app-main">
    <h3>This is an about page</h3>
    <!-- <button @click="callBus">Call the Bus</button> -->
 </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {
        // callBus() {
        //     console.log('calling the bus');
        //     eventBus.emit('show-msg', 'hi')
        // }
    },
    computed: {},
    unmounted() { },
};