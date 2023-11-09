// const balloon = document.querySelectorAll('.box')
// const checkbox = document.querySelectorAll('.checkbox')
// const checkboxMain = document.querySelector('.checkboxMain');
//
// balloon.forEach((balloon, idx) =>{
//     balloon.addEventListener('click', () => {
//         balloon.classList.toggle('bgRed')
//         checkbox[idx].checked = !checkbox[idx].checked
//     })
// })

const balloon = document.querySelectorAll('.box')
const checkbox = document.querySelectorAll('.checkbox')
const checkboxMain = document.querySelector('.checkboxMain');

balloon.forEach((balloon, idx) =>{
    balloon.addEventListener('click', () => {
        balloon.classList.toggle('bgRed')
        checkbox[idx].checked = !checkbox[idx].checked
    })
})

checkboxMain.addEventListener('change', () => {
    checkbox.forEach((checkbox) => {
        checkbox.checked = checkboxMain.checked;
    });

    balloons.forEach((balloon) => {
        balloon.classList.toggle('bgRed', checkboxMain.checked);
    });
});
