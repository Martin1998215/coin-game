const headBtn = document.querySelector(".head-btn");
const tailBtn = document.querySelector(".tail-btn");
const oddValueHead = document.querySelector(".odd-value-head");
const oddValueTail = document.querySelector(".odd-value-tail");
const enterAmount = document.querySelector(".enter");
const potentialReturn = document.querySelector(".potential-return");
const userAttempts = document.querySelector(".user-attempts");
const computerAttempts = document.querySelector(".computer-attempts");
const userWinValue = document.querySelector(".user-win");
const userLooseValue = document.querySelector(".user-loose");
const computerWinValue = document.querySelector(".computer-win");
const computerLooseValue = document.querySelector(".computer-loose");
const userImg = document.querySelector(".user-answer-img");
const computerImg = document.querySelector(".computer-answer-img");
const userText = document.querySelector(".user-answer-text");
const computerText = document.querySelector(".computer-answer-text");
const result = document.querySelector(".overall-result");
const amountBalance = document.querySelector(".amount-balance");
const play = document.querySelector(".play");
const hide = document.querySelector(".hide");

const headArry = [
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9
];

const tailArry = [
    1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9
];

const computerArry = [
    {
        img: "url('head.jpg')",
        text: 'Head'
    },
    {
        img: "url('tail.png')",
        text: 'Tail'
    }
];

let userAttemptCount = 0;
let computerAttemptCount = 0;
let userWinCount = 0;
let computerWinCount = 0;
let computerLooseCount = 0;
let userLooseCount = 0;

function active(elem) {
    elem.classList.add('active');
}

function inactive(elArry) {
    elArry.forEach(function (e) {
        e.classList.remove('active');
    });
}

function act(elem) {
    elem.classList.add('act');
}

function inact(elArry) {
    elArry.forEach(function (e) {
        e.classList.remove('act');
    });
}

function createHeadImg(img) {
    img.classList.add('head-img');
}

function removeHeadImg(img) {
    img.classList.remove('head-img');
}

function removeTailImg(img) {
    img.classList.remove('tail-img');
}

function createTailImg(img) {
    img.classList.add('tail-img');
}

headBtn.addEventListener("click", function () {
    active(headBtn)
    act(oddValueHead)
    inact([oddValueTail])
    inactive([tailBtn])
    userText.innerHTML = "Head";
    createHeadImg(userImg)
    removeTailImg(userImg)
    hide.innerHTML = oddValueHead.innerHTML;

});


tailBtn.addEventListener("click", function () {
    inactive([headBtn])
    active(tailBtn)
    act(oddValueTail)
    inact([oddValueHead])
    createTailImg(userImg)
    removeHeadImg(userImg);
    userText.innerHTML = "Tail";
    hide.innerHTML = oddValueTail.innerHTML;

});

setInterval(function () {
    let value = enterAmount.value;
    let eva = eval(hide.innerHTML * value);
    potentialReturn.innerHTML = eva.toFixed(2);
}, 10);

window.addEventListener("DOMContentLoaded", function () {
    randomHeadValue()
    randomTailValue()
});

function randomHeadValue() {
    let randomHead = Math.floor(Math.random() * headArry.length);
    oddValueHead.innerHTML = headArry[randomHead];

}


function randomTailValue() {
    let randomTail = Math.floor(Math.random() * tailArry.length);
    oddValueTail.innerHTML = tailArry[randomTail];
}




function Testing(user, computer) {
    if ((user == 'Head' && computer == 'Head') || (user == "Tail" && computer == "Tail")) {
        return true;
    }

}

function game() {


    if (enterAmount.value == '') {
        alert("Amount Entry must be filled!")
    } else {
        userAttemptCount++;
        computerAttemptCount++;
        let random = Math.floor(Math.random() * computerArry.length);
        computerText.innerHTML = computerArry[random].text;
        computerImg.style.backgroundImage = computerArry[random].img;

        randomHeadValue()
        randomTailValue()
        userAttempts.innerHTML = userAttemptCount;
        computerAttempts.innerHTML = computerAttemptCount;

        if (Testing(userText.innerHTML, computerText.innerHTML)) {
            userWinCount++;
            computerLooseCount++;
            let ans = potentialReturn.innerHTML;
            let x = ans;
            amountBalance.innerHTML = x;
            result.innerHTML = "win";
            userWinValue.innerHTML = userWinCount;
            computerLooseValue.innerHTML = computerLooseCount;
        } else {
            computerWinCount++;
            userLooseCount++;
            result.innerHTML = "Loose";
            let ans1 = potentialReturn.innerHTML - potentialReturn.innerHTML;
            let y = ans1;
            amountBalance.innerHTML = y;
            computerWinValue.innerHTML = computerWinCount;
            userLooseValue.innerHTML = userLooseCount;
        }

    }



}
function Erase() {
    enterAmount.value = '';
    inactive([headBtn])
    inactive([tailBtn])
    inact([oddValueHead])
    inact([oddValueTail])
}



play.addEventListener("click", function () {
    game()
    Erase()
});