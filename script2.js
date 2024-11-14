fetch ('https://6729b8f86d5fa4901b6e13bc.mockapi.io/attractions')
            // Функция для получения параметра из URL
            function getQueryParameter(name) {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(name);
            }
    
            window.onload = function() {
                const cardId = getQueryParameter('id');
                if (cardId) {
                    fetch(`https://6729b8f86d5fa4901b6e13bc.mockapi.io/attractions/${cardId}`, {
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        }
                    })
                    .then(response => response.json())
                    .then(attraction => renderAttractionDetails(attraction))
                    .catch(error => console.error('Ошибка загрузки данных:', error));
                }
            };
    
            function renderAttractionDetails(attraction) {
                const attractionDetails = document.getElementById('modal');
                attractionDetails.innerHTML = `
                    <div class="modal__box">
                        <h1>${attraction.name}</h1>
                        <div class="modal_box-slider"> 
                        <!-- надо добавить слайдер -->   
                            <img src="${attraction.img}">
                            <img src="${attraction.img2}" >
                        </div>
                        <!-- Описание достопримечательности-->
                        <div class='modal__box-title'>
                            <p>${attraction.description}</p>
                        </div>
                        <!-- Кнопка для переадресации на карту-->
                        <div class='modal__box-button'>
                            <a href=${attraction.maps}>На карте</a>
                        </div>
                    </div>
                `;
            }       

document.getElementById('button').addEventListener('click', function(repindex) {
    window.history.back();
})

