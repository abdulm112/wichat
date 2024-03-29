let all = document.getElementById('all')
let navone = document.getElementById('navone')
let cancel = document.getElementById('cancel')             
let input = document.getElementById('input')
let btnfive = document.getElementById('btnfive')

all.addEventListener('click', ()=>{
    navone.style.display = 'block'
})
cancel.addEventListener('click', ()=>{
    navone.style.display = 'none'
})
btnfive.addEventListener('click', ()=>{
    if(input.value === ''){
        alert('Please enter your email')
}else{
    alert("sent")
    input.value = ""
}
})
