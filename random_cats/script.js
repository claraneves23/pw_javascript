const button = document.getElementById('btn-new-cat');
const img = document.getElementById('random-cat_image');

async function fetchCat() {
    try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        img.src = data[0].url;
    }

     catch(error){
            alert('erro ao buscar imagem de gato:', error);
            img.alt='Não foi possível carregar a imagem'
        }
    
}

fetchCat();

button.addEventListener('click',fetchCat);