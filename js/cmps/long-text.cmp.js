export default{
    template:`
<p>Aboutbook: {{description}}</p>
    `,
    data() {
        return {
        }
    },
    props:["txt"],
    computed: {
        description() {
            return  this.txt.slice(0, 50) + '...'
        },
    },
}