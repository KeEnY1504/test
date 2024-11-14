




// Добавляем события клика на открытия элемента
// document.getElementById('button').addEventListener('click', function() {  
//     // Получаем элементы меню и иконки бургера по их идентификаторам
//     // const menuItems = document.getElementById('menuItems');  
//     // const burgerIcon = document.getElementById('burgerIcon');  
//     let phrase = prompt('Скажи слово друг и заходи')

//     if (phrase === 'Друг') {
//       alert('Привет')
//     } else {
//       alert('Я тебя не знаю')
//     }

  
    // Переключаем класс 'open' у элементов меню и иконки бургера
    // Если класс 'open' есть, он будет удален; если его нет, он будет добавлен
    // menuItems.classList.toggle('open');  
    // burgerIcon.classList.toggle('open');  
// });


// выбираем элемент по айди и добавляем ей событие   \/*обработчик информации для проверки нажал ли пользователь кнопку 
// document.getElementById('search').addEventListener('keypress', function(e) {  
//     // если пользователь нажал на ENTER и в поле ввода веденнено ДРУГ, то...
//     if (e.key === 'Enter' && this.value.toUpperCase() === 'ДРУГ') {
//       alert('ПРИВЕТ')
//     } else if (e.key === 'Enter') {
//       alert('Я тебя не знаю')
//     }
// });



// function getUserAccount() {
//     return axios.get('https://6729b8f86d5fa4901b6e13bc.mockapi.io/attractions');
//   }
//   const axios = require('axios');

// // Делаем запрос пользователя с данным ID
// axios.get('https://6729b8f86d5fa4901b6e13bc.mockapi.io/attractions')
//   .then(function (response) {
//     // обработка успешного запроса
//     console.log(response);
//   })
//   .catch(function (error) {
//     // обработка ошибки
//     console.log(error);
//   })
//   .finally(function () {
//     // выполняется всегда
//   });\





// .then(Response => Response.json())
// .then(attractions => {
//   console.log(attractions.map(attraction => attraction.name));
//   console.log(attractions.map(attraction => attraction.id),(attractions => attractions.img));
//   console.log(attractions.map(attractions => attractions.img))
// })
// .then((data) => {
//     return data.json()
// })
// .then((info) => {
//     console.log(info)
// })



// document.getElementById('generate').addEventListener( function() {
//     // Генерируем HTML-код
//     const newHTML = '<p>Это новый параграф, созданный с помощью JavaScript!</p>';
    
//     // Вставляем HTML-код в контейнер
//     document.getElementById('container').innerHTML += newHTML;
// })









document.getElementById("search_open_modal").addEventListener("click", function() {
  document.getElementById("filtr").classList.toggle("open");
})
document.getElementById('search_close_modal').addEventListener('click', function(){
  document.getElementById('filtr').classList.remove('open')
})







document.getElementById('search_input').addEventListener('keypress', function(search) {
  const cardIds = ['1','2', '3', '4', '5', '6', '7', '8', '9', '10'];
  if (search.key === 'Enter') {
    const inputValue = this.value.trim(); // Получаем значение из поля ввода

    if (inputValue === 'Дербентский маяк') {
      cardIds.forEach(id => document.getElementById(id).classList.toggle("delete"));
      document.getElementById('1').classList.remove('delete');
    }
    else if (inputValue === 'Кырхляр') {
      cardIds.forEach(id => document.getElementById(id).classList.toggle('delete'))
      document.getElementById('2').classList.remove('delete');
    } else if (inputValue === 'Парк имени Низами Гянджеви') {
      cardIds.forEach(id =>  document.getElementById(id).classList.toggle('delete'))
      document.getElementById('3').classList.remove('delete');
    } else if (inputValue === 'Дербентская стена') {
      cardIds.forEach(id =>  document.getElementById(id).classList.toggle('delete'))
      document.getElementById('4').classList.remove('delete');
    } else if (inputValue === 'Нарын-кала') {
      cardIds.forEach(id =>  document.getElementById(id).classList.toggle('delete'))
      document.getElementById('5').classList.remove('delete');
    } else if (inputValue === 'Домик Петра I.') {
      cardIds.forEach(id =>  document.getElementById(id).classList.toggle('delete'))
      document.getElementById('6').classList.remove('delete');
    } else if (inputValue === 'Келе-Нумаз') {
      cardIds.forEach(id =>  document.getElementById(id).classList.toggle('delete'))
      document.getElementById('7').classList.remove('delete');
    } else if (inputValue === 'Церковь Святого Всеспасителя') {
      cardIds.forEach(id =>  document.getElementById(id).classList.toggle('delete'))
      document.getElementById('8').classList.remove('delete');
    } else if (inputValue === 'Дербентская Джума-мечеть') {
      cardIds.forEach(id =>  document.getElementById(id).classList.toggle('delete'))
      document.getElementById('9').classList.remove('delete');
    } else if  (inputValue === '') {
      cardIds.forEach(id =>  document.getElementById(id).classList.toggle('delete'));
    } else{
      alert('bum bum');
    }
  }
});

fetch(`https://6729b8f86d5fa4901b6e13bc.mockapi.io/attractions/`)
 
// Функция для переноса на другую страницу
function nextIndex(cardId) {      
// Здесь можно указать, на какую страницу вы хотите перенаправить
window.location.href = `index2.html?id=${cardId}`;
}

// Привязка обработчика событий к карточкам
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.id; // Получаем id карточки
    nextIndex(cardId); // Вызываем функцию переноса
  });
});






