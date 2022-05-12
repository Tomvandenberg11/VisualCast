const podcast = document.querySelector(".textContainer")
const showPodcast = document.querySelector(".showPodcast")

const mobileOverview = document.querySelector(".mobileOverview")
const close = document.querySelector('.close')

const playButton = document.querySelector(".playButton")

podcast.scrollTop

showPodcast.addEventListener("click", () => {
  mobileOverview.classList.add('show')
})

close.addEventListener("click", () => {
  mobileOverview.classList.remove('show')
})

function pageScroll() {
  podcast.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,20);
}

playButton.addEventListener("click", () => {
  setTimeout(() => pageScroll(),10000)

  for(let i = 0; i < 9; i++){
    const balloon = '#balloon' + i

    setTimeout(function(){
      document.querySelector(balloon).classList.add('showBalloon')
    },i * 2500)
  }

})