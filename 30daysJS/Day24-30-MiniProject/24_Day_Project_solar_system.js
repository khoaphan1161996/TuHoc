// Planet
const planets = [
    {
        id:9.81,
        name:'Earth',
        image:'https://drake.vn/image/catalog/H%C3%ACnh%20content/Vans-Mother-Earth/vans-mother-earth-03.jpg'
    },
    {
        id:3.61,
        name:'Mercury',
        image:'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2015/06/messenger_s_iridescent_mercury/15445906-1-eng-GB/Messenger_s_iridescent_Mercury_pillars.jpg'
    },
    {
        id:8.83,
        name:'Venus',
        image:'https://static01.nyt.com/images/2020/09/14/science/14SCI-VENUS1-alt/14SCI-VENUS1-alt-superJumbo.jpg'
    },
    {
        id:3.75,
        name:'Mars',
        image:'https://cdn.techexplorist.com/wp-content/uploads/2020/07/mars.jpg'
    },
    {
        id:26.0,
        name:'Jupiter',
        image: 'http://cdn.spacetelescope.org/archives/images/screen/heic2017a.jpg'
    },
    {
        id:11.2,
        name:'Saturn',
        image:'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg'
    },
    {
        id:10.5,
        name:'Uranus',
        image:'https://cdn.techexplorist.com/wp-content/uploads/2021/04/uranus_X-rays.jpg'
    },
    {
        id:13.3,
        name:'Neptune',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1024px-Neptune_Full.jpg'
    },
    {
        id:0.61,
        name:'Pluto',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/1200px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg'
    }
]


// Selector
let searchInput = document.querySelector('#search-text')
let searchPlan = document.querySelector('#select-planet')
let searchBtn = document.querySelector('button')

// EventClick
searchBtn.addEventListener('click', e => {
    // Tính weight
    let searchInputValue = Number(searchInput.value) 
    let searchPlanValue = Number(searchPlan.value)
    let weitht = searchInputValue * searchPlanValue
    weitht = weitht.toFixed(2)

    // In ra
    let result = document.getElementById('result')
    let planet = planets.find((planet) => planet.id === searchPlanValue)
    
    let planetInner = `
                    <div class="result-group">
                        <img src='${planet.image}' 
                        alt='${planet.name}' class="result-group-item result-img">
                        <div class="result-group-item log-result">
                            <p class="result-title">The weight of the object on <span class="result-planet">
                            ${planet.name}
                            </span></p>
                            <p class="result-weight">${weitht}</p>
                        </div>
                    </div>`

    result.innerHTML = planetInner
})
