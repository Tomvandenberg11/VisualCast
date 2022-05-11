const podcast = document.querySelector(".textContainer")
const showPodcast = document.querySelector(".showPodcast")

const mobileOverview = document.querySelector(".mobileOverview")
const close = document.querySelector('.close')

podcast.scrollTop = podcast.scrollHeight;

showPodcast.addEventListener("click", () => {
  mobileOverview.classList.add('show')
})

close.addEventListener("click", () => {
  mobileOverview.classList.remove('show')
})