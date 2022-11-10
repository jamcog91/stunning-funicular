console.log('burn the ships')

const filmList = document.getElementByClassName('showing')
const poster = document.getElementById('poster')
const title = document.getElementById('title')
const runtime = document.getElementById('runtime')
const capacity = document.getElementById('capacity')
const showTime = document.getElementById('show-time')
const ticketsSold =document.getElementById('tickets-sold')
const description = document.getElementById('film-info')
const movieList = document.createElementById('films')

const button = documnet.getElementById('buy-ticket')
ticksSold = count
button.addEventListener('click', {
    count -= 1;
})

const request = async () => {
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()
          const img = document.createElement('img')
                img.src = filmList.poster   
    }
        filmList.append(img)
}
request()