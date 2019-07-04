<template>
  <section class="bg-light page-section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 col-sm-6 portfolio-item"
          v-for="(value,ky) in portfolioJSON"
          :key="ky"
        >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fas fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt />
          </a>
          <div class="portfolio-caption">
            <h4>{{ value.caption }}</h4>
            <p class="text-muted">{{ value.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    portfolioJSON: [
      {
        img: "",
        caption: "Explore",
        title: "Graphic Design"
      },
      {
        img: "2",
        caption: "Explore2",
        title: "Graphic Design2"
      },
      {
        img: "3",
        caption: "Explore3",
        title: "Graphic Design3"
      },
      {
        img: "4",
        caption: "Explore4",
        title: "Graphic Design4"
      },
      {
        img: "5",
        caption: "Explore5",
        title: "Graphic Design5"
      },
      {
        img: "6",
        caption: "Explore6",
        title: "Graphic Design6"
      },
      {
        img: "7",
        caption: "Explorer7",
        title: "Graphic Design7"
      }
    ]
  })
};
</script>

<style scoped>
</style>

