let input = document.querySelector('.guess')
let choose = document.querySelector('.choose')
let result = document.querySelector('.result')

let arr=['Baku','Ankara','Moscow', 'Turkey', 'Russia' ]

let random = Math.floor(Math.random() *arr.length)
let randomName=arr[random]
console.log(randomName);

choose.addEventListener('click',function () {
    let guess=input.value
    if (guess===randomName) {
        result.textContent='congratulations you earnt a gift from us'
    }else{
        result.textContent='try your luck again'
    }
})


