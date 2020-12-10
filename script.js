'use strict';

/* Header */

const header = Vue.createApp({
  data() {
    return {
      items: [
        { name: "Home" },
        { name: "About" },
        { name: "Academics" },
        { name: "Courses" },
        { name: "News" },
      ],
      headerTitle: "Professional development For Coaches and Leaders",
      headerTitleIsVisible: true,
      learnMoreButton: "Learn more",
    };
  },
  methods: {
    changeHeader() {
      this.headerTitleIsVisible = !this.headerTitleIsVisible;
      if (this.learnMoreButton === "Learn more") {
        this.learnMoreButton = "Back";
      } else {
        this.learnMoreButton = "Learn more";
      }
    },
  },

});

header.mount('#header');

/* Footer */

const footer = Vue.createApp({
  data() {
    return {
      photos: [
        { class: "footer-photo-1" },
        { class: "footer-photo-2" },
        { class: "footer-photo-3" },
        { class: "footer-photo-4" },
      ],
      footerItems: [
        {
          name: "Contact Us",
          first: "900 Wood Street",
          second: "+56 345 678 000-09",
          third: "info@exemple.com",
          fourth: "",
          fifth: "",
        },
        {
          name: "Support Us",
          first: "Privacy",
          second: "Terms",
          third: "Cookie Policy",
          fourth: "Sitemap",
          fifth: "",
        },
        {
          name: "Explore",
          first: "Accomodation",
          second: "Arts Academics",
          third: "Central Services",
          fourth: "Conferences and Events",
          fifth: "Food and Drink",
        },
        {
          name: "Visit",
          first: "Admission",
          second: "Contact Us",
          third: "FAQs",
          fourth: "Request Information",
          fifth: "Privacy Notice",
        },
      ],
    };
  },
});

footer.mount('#footer')