// COUNTER APP
function $(selector) {
    return document.querySelector(selector);

}

const decreaseBtn = $('#decreaseBtn');
const resetBtn = $("#resetBtn");
const increaseBtn = $('#increaseBtn');
const countLabel = $('#countLabel');


let count = 0;


increaseBtn.onclick = function () {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function () {
     count = 0;           
    countLabel.textContent = count;
    
}
