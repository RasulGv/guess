let input = document.querySelector('.guess')
let choose = document.querySelector('.choose')
let result = document.querySelector('.result')

let arr=['Baku','Ankara','Moscow', 'Turkey', 'Russia' ]

let random = Math.floor(Math.random() *arr.length)
let randomName=arr[random]
console.log(randomName);

choose.addEventListener('click',function () {
    let guess=input.value.trim()
    if (guess===randomName) {
       
        alert('congratulations you earnt a gift from us')
    }else{
        alert('try your luck again')
    }
})


