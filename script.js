const getQuote = () => {
  const h1 = document.getElementById("quote");
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      h1.innerText = randomQuote.text;
    });
};
/*
    Fade in animation for the form
*/
const formObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("in-view", entry.isIntersecting);
    })
}, {
    threshold: 0.5,
})
const formInput = document.querySelector("form");
formObserver.observe(formInput);

getQuote();