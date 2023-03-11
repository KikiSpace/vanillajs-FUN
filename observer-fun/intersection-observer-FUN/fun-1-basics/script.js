const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      //   if (entry.isIntersecting) observer.unobserve(entry.target);
    });
    console.log(entries);
  },
  {
    threshold: 1,
    // rootMargin: "100px", for image loading
  }
);

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  observer.observe(card);
});
