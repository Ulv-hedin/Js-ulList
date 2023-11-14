const ulList = document.createElement('ul')
document.body.append(ulList)
const num = 10

for (let i = 1; i <= num; i++) {
    
    const liItems = document.createElement('li')
    ulList.append(liItems)
    liItems.textContent = (i)

    }

    const lastLi = document.querySelector('li:last-child') 
    lastLi.textContent = 'jestem ostatnim elementem' 

lastLi.style.backgroundColor = 'royalblue'
lastLi.style.padding = '20px 40px'
lastLi.style.fontSize = '48px'
