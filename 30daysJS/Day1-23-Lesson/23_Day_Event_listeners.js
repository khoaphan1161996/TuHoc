// Exercise: Level 1
// Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.
function generateRandomNumbers() {
    // tạo ul cha
    let block = document.createElement('ul')
    block.style.width = '700px'
    document.body.appendChild(block)
    
    // tìm số input
    const input = document.querySelector('input')
    const button = document.querySelector('button')

    button.addEventListener('click', e => {
        // li con
        const inputValue = input.value
        if(!inputValue) {
            let p = document.createElement('p')
            p.style.color = 'red'
            p.textContent = 'Enter number value on the input field to generate numbers'
            document.body.appendChild(p)
        }
        else if(Number(inputValue) > 0 &&  !isNaN(inputValue)) {
            let blockItems = []
            for(let i = 0; i < Number(inputValue); i++) {
                blockItems.push(`<li>${i}</li>`)
            }
            let blockItem = blockItems.join('')
            block.innerHTML = blockItem
    
            // css li
            let li = document.querySelectorAll('li')
            for(let i = 0; i < li.length; i++) {
            
                li[i].style.display = 'inline-block'
                li[i].style.width = '100px'
                li[i].style.height = '50px'
                li[i].style.margin = '2px'
                li[i].style.textAlign = 'center'
                li[i].style.lineHeight = '50px'
                li[i].style.color = 'white'
                li[i].style.fontSize = '24px'
                if(Number(li[i].textContent) % 2 !== 0) {
                    li[i].style.background = 'yellow'
                }
                else {
                    li[i].style.background = 'green'
                }
                if(checkPrimeNum(Number(li[i].textContent)) === true) {
                    li[i].style.background = 'red'
                }
            }
        }
        else {
            let p = document.createElement('p')
            p.style.color = 'red'
            p.textContent = 'Input value must be a number positive integer'
            document.body.appendChild(p)
        }
    })

    
    
    // hàm check prime number
    function checkPrimeNum(n) {
        let flag = true;
     
        if (n < 2){
            flag = false;
        }
        else{
            for (let i = 2; i < n-1; i++)
            {
                if (n % i == 0){
                    flag = false;
                    break;
                }
            }
        }
    
        return flag;    
    }
    
}

generateRandomNumbers()