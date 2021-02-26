"use script";

// AJAX - Asynchronous JavaScript And XML 

// 1 вариант AJAX XML

    const inputRub = document.querySelector('#rub'),
          inputUsd = document.querySelector('#usd');

    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        request.open('GET', 'js/current.json');//этот метод не открывает соединение между фронтендом или бэкэндом
        //  а лишь собирает настройки, которые помогут в будущем сделать запрос
     //open() принимает ва параметра метод (протокол), url (путь к нашему серверу) и async (по умолчанию - true) +login and password
    //  надо добавить запросу HTTP заголовок 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//создали заголовок нашего запроса
    // сказав, что у него есть тип контента (1-й аргумент) и указав этот тип(2-й аргумент)
    // чтобы точно понималось, что запрос у нас json формата  
    request.send();//отправили запрос; сейчас параметры пусты, но при запросе POST в параметры кладутся данные, которые уходят на сервер 

    request.addEventListener('readystatechange', () => { //событие отслеживает статус готовности нашего запроса в текущий момент
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);//если всё успешно - показать то, что задумал бэкэнд разработчик в качестве ответа
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(3);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });
     
    // коротко о свойствах нашего объекта XMLHttpRequest:
    // status показывает статус от нашего запроса 
    // statusText текстовое описание ответа от сервера 
    // response ответ от сервера, тот ответ, который нам задал бэкэнд разработчик 
    // readyState оно содержит текущее состояние нашего запроса
    // текущих состояний 5, отчет идет от 0, до 4
    // похоже на жизненных цикл активити в адроиде 

    });