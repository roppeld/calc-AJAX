"use script";

// AJAX - Asynchronous JavaScript And XML 

// 1 вариант AJAX XML

    const inputRub = document.querySelector('#rub'),
          inputUsd = document.querySelector('#usd');

    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        request.open();//этот метод не открывает соединение между фронтендом или бэкэндом, а лишь собирает настройки, которые помогут в будущем сделать запрос
    });