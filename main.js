let btn_2 = document.querySelector('.btn_2')
btn_2.onclick = function () {
    alert('Thanks for clicking')
}

let btn_3 = document.querySelector('.btn_3')
btn_3.addEventListener('mouseover', function() {
   let box_3 = document.querySelector('.box_3')
   box_3.style.backgroundColor = 'blue'
})

btn_3.addEventListener('mouseleave', function() {
   let box_3 = document.querySelector('.box_3')
   box_3.style.backgroundColor = 'transparent'
})