/*
Задание 3

Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.

Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...

Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон всей строки, включая кнопку, меняется на белый.

Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.

ПОДСКАЗКИ. Вы можете изначально сверстать открытое меню, при этом кнопка "крестик" будет расположена в точности на месте кнопки "бургер". Скрыть выпадающий блок с помощью CSS. При открытии меню кнопка "бургер" будет исчезать, при закрытии - появляться.
*/
const on = document.getElementById('on');
const off = document.getElementById('off');
const search = document.getElementById('search');
const input = document.getElementById('i');
const button =document.getElementById('b');

on.onclick = () => {
    on.style.opacity = '0';
    on.style.visibility = 'hidden';
    off.style.opacity = '1';
    off.style.visibility = 'visible';
    search.style.opacity = '1';
    search.style.visibility = 'visible';
}
input.onmousemove =   () => {
    input.style.background = 'white';
    button.style.background = 'white';    
}


input.onmouseout = () => {
    input.style.background = '#F5F5F7';
    button.style.background = '#F5F5F7';
}
off.onclick = () => {
    on.style.opacity = '1';
    on.style.visibility = 'visible';
    off.style.opacity = '0';
    off.style.visibility = 'hidden';
    search.style.opacity = '0';
    search.style.visibility = 'hidden';
    input.style.background = '#F5F5F7';
    button.style.background = '#F5F5F7';
}
