let expanded = false;
let arrow = document.querySelectorAll('.arrow');
let select = document.querySelectorAll('.selectBox');
let checkbox = document.querySelectorAll('.checkboxes');

function arrowRotateAdd(e) {
    e.classList.add('arrowRotate');
}
function arrowRotateRemove(e) {
    e.classList.remove('arrowRotate');
}
    function showCheckbox(i) {

    if(!expanded) {
        checkbox[i].style.display = 'block';
        expanded = true;
        arrowRotateAdd(arrow[i]);
                             
    } else {
        checkbox[i].style.display = 'none';
        expanded = false;
        arrowRotateRemove(arrow[i]);
                
    }
}



let select1 = function (){
    showCheckbox(0)
}
let select2 = function (){
    showCheckbox(1)
}
let select3 = function (){
    showCheckbox(2)
}
let arr = [select1, select2, select3];


// for(let i = 0; i <= arr.length; i++){
//     select[i].addEventListener('click', arr[i]);
// }

    select[0].addEventListener('click', arr[0]);
    select[1].addEventListener('click',arr[1]);
    select[2].addEventListener('click', arr[2]);

    // filter
    let summary = document.querySelector('#mainSummary');
    let iconFilter = document.querySelector('.filter-icon');
    let iconFilterOpen = document.querySelector('.filterIconOpen');
    let flag = true;
    summary.addEventListener('click', function(){
        if(flag==true){
        iconFilter.style.display = "none";
        iconFilterOpen.style.display = "inline-block";
        flag = false;
        }else  if(flag==false){
            iconFilter.style.display = "inline-block";
            iconFilterOpen.style.display = "none";
            flag = true;
            }
    })