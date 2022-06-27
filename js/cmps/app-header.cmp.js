export default {
 template:`
 <header class="app-header">
      <div class="header-title">Book Shop</div>
      <div class="logo">
        <img src="/img/header3.png" alt="hello">
      </div>
      <nav class="nav-bar">
      <router-link to="/">Home</router-link>|
      <router-link to="/book">books</router-link>|
      <router-link to="/about">About</router-link>|
      </nav>
 </header>
`,
  data() {
    return {
    }
  },
  methods:{},
computed:{}
}