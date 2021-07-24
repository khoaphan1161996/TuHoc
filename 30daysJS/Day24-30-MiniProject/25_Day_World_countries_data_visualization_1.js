const languages = [
    {
        name:'English',
        score:91
    },
    {
        name:'French',
        score:45
    },
    {
        name:'Arabic',
        score:25
    },
    {
        name:'Spanish',
        score:24
    },
    {
        name:'Portuguese',
        score:9
    },
    {
        name:'Russian',
        score:9
    },
    {
        name:'Dutch',
        score:8
    },
    {
        name:'German',
        score:7
    },
    {
        name:'Chinese',
        score:5
    },
    {
        name:'Serbian',
        score:4
    },
]

const populations = [
    {
        name:'World',
        score:7693165599
    },
    {
        name:'China',
        score:1377422166
    },
    {
        name:'India',
        score:1295210000
    },
    {
        name:'USA',
        score:323947000
    },
    {
        name:'Indonesia',
        score:258705000
    },
    {
        name:'Brazil',
        score:206135893
    },
    {
        name:'Pakistan',
        score:194125062
    },
    {
        name:'Nigeria',
        score:186988000
    },
    {
        name:'Bangladesh',
        score:161006790
    },
    {
        name:'Russia',
        score:146599183
    },
    {
        name:'Japan',
        score:126960000
    },
]

// Selector 
let result = document.querySelector('#result')
let btnPopu = document.getElementById('btn-popu')
let btnLang = document.getElementById('btn-lang')
let formDesc = document.querySelector('.form-desc')

// Nhấn nút Languages
btnLang.addEventListener('click',e => {
    formDesc.textContent = '10 Most Spoken languages In the world'

    let innerPopu = []
    for(let i = 0; i < languages.length; i++) {
        innerPopu.push(`
        <div class="lang-container">
            <div class="name">
                ${languages[i].name}
            </div>
            <div class="progress">
                <div id="myProgress">
                    <div style="background:orange;width:${languages[i].score}%;height:30px"></div>
                </div>
            </div>
            <div class="score">
            ${languages[i].score}
            </div>
        </div>
        `)
    }
    innerPopu = innerPopu.join('')
    result.innerHTML = innerPopu 
    
})

// Nhấn nút Populations
btnPopu.addEventListener('click',e => {
    formDesc.textContent = '10 Most populated countries in the world'

    let innerPopu = []
    for(let i = 0; i < populations.length; i++) {
        let ratio = populations[i].score*100/10000000000
        let comma3 =String(populations[i].score) 
        comma3 = comma3.split('')
        let i3 = 1
        for(let j = comma3.length-1; j > 0; j--) {
            if(i3 % 3 == 0) {
                comma3.splice(j, 0, ',')
            }
            i3 ++ 
        }
        comma3 = comma3.join('')

        innerPopu.push(`
        <div class="lang-container">
            <div class="name">
                ${populations[i].name}
            </div>
            <div class="progress">
                <div id="myProgress">
                    <div style="background:orange;width:${ratio}%;height:30px"></div>
                </div>
            </div>
            <div class="score">
            ${comma3}
            </div>
        </div>
        `)
    }
    innerPopu = innerPopu.join('')
    result.innerHTML = innerPopu 
    
})