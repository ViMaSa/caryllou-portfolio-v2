<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">clp.</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup" ref="navbarCollapse">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link active" aria-current="page" to="/" @click="closeNavbar">Home</router-link>
          <router-link class="nav-link" to="/caryllou-portfolio-v2/about" @click="closeNavbar">About</router-link>
          <router-link class="nav-link" to="/caryllou-portfolio-v2/portfolio" @click="closeNavbar">Portfolio</router-link>
          <router-link class="nav-link" to="/caryllou-portfolio-v2/resume" @click="closeNavbar">Resume</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    closeNavbar() {
      if (this.$refs.navbarCollapse.classList.contains('show')) {
        this.$refs.navbarCollapse.classList.remove('show');
      }
    }
  }
}
</script>

<style scoped>
.navbar-toggler {
  border-color: #fff3e8;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255, 243, 232)' stroke-width='2' strokeLinecap='round' strokeMiterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

.nav-link, .navbar-brand {
  color: #fff3e8;
}

.router-link-active {
  background: none repeat scroll 0 0 #007ABD;
    color: white;
    height: 40px;
    cursor: pointer;
    -webkit-transition: border-color 0.8s;
    transition: border-color 0.8s;
    padding-bottom: 16px;
    border-radius: 10px;
}
</style>