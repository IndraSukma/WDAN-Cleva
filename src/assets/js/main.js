document.addEventListener("alpine:init", () => {
  Alpine.data("navbar", () => ({
    navbarAtTop: false,

    init() {
      // Check initial scroll position when component initializes
      this.checkScroll();

      // Add scroll event listener
      window.addEventListener("scroll", () => this.checkScroll());
    },

    checkScroll() {
      // Update scrolled state based on window scroll position
      this.navbarAtTop = window.pageYOffset < 100;
    },
  }));

  Alpine.data("dropdown", () => ({
    open: false,

    init() {
      this.$watch("open", () => {
        if (this.open) {
          this.$el.setAttribute("open", "");
        } else {
          this.$el.removeAttribute("open");
        }
      });
    },

    toggle: {
      ["@click"]() {
        this.open = !this.open;
      },
    },

    menu: {
      ["x-show"]() {
        return this.open;
      },
      ["@click.outside"]() {
        this.open = false;
      },
    },
  }));

  Alpine.data("slider", (type) => ({
    swiper: null,

    init() {
      // Default configuration
      let config = {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 0,
        loop: false,
        speed: 500,
        navigation: {
          prevEl: this.$el.querySelector(".swiper-prev"),
          nextEl: this.$el.querySelector(".swiper-next"),
        },
      };

      // Predefined configurations based on slider type
      if (type === "case-studies") {
        // Case studies slider configuration
        config = {
          ...config,
          loop: true,
          spaceBetween: 12,
          centeredSlides: true,
          breakpoints: {
            640: {
              spaceBetween: 24,
            },
            1024: {
              spaceBetween: 32,
            },
          },
        };
      } else if (type === "testimonials") {
        // Testimonials slider configuration
        config = {
          ...config,
          spaceBetween: 12,
          slidesPerView: 1,
          breakpoints: {
            640: {
              spaceBetween: 24,
            },
            768: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 32,
              slidesPerView: 2,
            },
          },
        };
      } else if (type === "blog") {
        // Blog posts slider configuration
        config = {
          ...config,
          spaceBetween: 12,
          slidesPerView: 1,
          breakpoints: {
            640: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            1024: {
              spaceBetween: 32,
              slidesPerView: 3,
            },
          },
        };
      }

      // Initialize Swiper with the configuration
      this.swiper = new Swiper(this.$el, config);
    },
  }));
});
