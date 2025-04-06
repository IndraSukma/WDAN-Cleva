document.addEventListener("alpine:init", () => {
  Alpine.data("faqs", (faqsObj = []) => ({
    faqs: faqsObj,
    tabActive: "",
    qna: [],

    init() {
      this.tabActive = this.faqs[0].key;
      this.qna = this.faqs[0].lists;

      this.$watch("tabActive", () => {
        // Find the new content for the selected tab
        this.qna = this.faqs.find((item) => item.key === this.tabActive).lists;

        // Wait for the DOM to update with new accordions
        this.$nextTick(() => {
          // Reset all accordions and select the first one in a single pass
          document
            .querySelectorAll('input[name="accordionFaqs"]')
            .forEach((input, index) => {
              input.checked = index === 0;
            });
        });
      });
    },
    tab(key, element, index) {
      this.tabActive = key;

      // Handle scrolling if an element was passed (mobile only)
      if (element && window.innerWidth < 640) {
        // Only apply on mobile
        const container = element.closest("ul");
        const isLastTab = index === this.faqs.length - 1;

        // Calculate the scroll position
        if (isLastTab) {
          // For the last tab, scroll to the end
          container.scrollLeft = container.scrollWidth;
        } else {
          // For other tabs, center them
          const tabRect = element.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const scrollLeft =
            element.offsetLeft - containerRect.width / 2 + tabRect.width / 2;

          // Scroll horizontally only
          container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
          });
        }
      }
    },
  }));
});
