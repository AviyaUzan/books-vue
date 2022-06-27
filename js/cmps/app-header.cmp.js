export default {
 template:`
 <header class="app-header">
    <div class="logo-and-nav">
      <div class="header-title">Book Shop</div>
      <nav class="nav-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/book">books</router-link>
      <router-link to="/about">About</router-link>
      </nav>
    </div>
      <div class="logo">
        <img src="/img/header3.png" alt="hello">
      </div>
 </header>
`,
  data() {
    return {
    }
  },
  methods:{},
computed:{}
}