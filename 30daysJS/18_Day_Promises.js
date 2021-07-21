// const countriesAPI = 'https://restcountries.eu/rest/v2/all'
// const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// const fetchCountriesAPI = async () => {
//     try {
//         const response = await fetch(countriesAPI)
//         const countries = await response.json()
//         // Exercises: Level 1
//         //1. 
//         // for(let {name,capital,languages,population,area} of countries) {
//         //     let language = ''
//         //     for(let i = 0 ; i < languages.length; i++) {
//         //         if(i<languages.length-1) {
//         //             language += languages[i].name + ', '
//         //         }
//         //         else {
//         //             language += languages[i].name
//         //         }
//         //     }

//         //     console.log(name)
//         //     console.log("capital: ",capital)
//         //     console.log("languages: ", language)
//         //     console.log("population: ", population)
//         //     console.log("area: ", area)
//         // }

//          // Exercises: Level 3
//          //2. 
//         // let areaCountries = []
//         // for(let {name ,area} of countries) {
//         //     areaCountries.push({
//         //         name, 
//         //         area: area ? Number(area) : 0 
//         //     })
//         // }
//         // let sortTenLargestCountries = areaCountries.sort((a,b) => -a.area + b.area)
//         // tenLargestCountries = []
//         // for(let i = 0 ; i < 10 ; i++) {
//         //     tenLargestCountries.push(sortTenLargestCountries[i])
//         // }
//         // console.log(tenLargestCountries)


//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchCountriesAPI()


// const fetchDataCat = async () => {
//     try {
//         const response = await fetch(catsAPI)
//         const cats = await response.json()
//         // Exercises: Level 2
//         //1. 

//         // for(let {name} of cats) {
//         //     console.log('Cat name: ' ,name)
//         // }

//         // Exercises: Level 3
//         //1. 
//         // let averageWeightOfCats = 0
//         // let count = 0
//         // for(let {weight} of cats) {
//         //     count ++ 
//         //     let averageWeightOfCat = (Number(weight.metric[[0]])+Number(weight.metric[[4]])/2)
//         //     averageWeightOfCats += averageWeightOfCat
//         // }
//         // console.log(averageWeightOfCats/count)
//         // console.log(cats)

//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchDataCat()