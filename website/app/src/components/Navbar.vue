<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bitcoin</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item" v-for="(obj,key) in navbarItems" :key="key">
            <a class="nav-link js-scroll-trigger" :href= "obj.url">{{ obj.item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navbarItems: [
      { item: "Services",
        url: "#Services" },
      { item: "Portfolio" },
      { item: "About" },
      { item: "Team" },
      { item: "Contact" },
      { item: "Javacript"},
      { item: "Vue"},
      { item: "CSS"}
    ]
  })
};
</script>
<style scoped>
</style>

