document.getElementById('search').addEventListener('click', () => {
    const cidade = document.getElementById('city-name').value;
    climaVazio(cidade);
});

function climaVazio(cidade){
    if (cidade === '')
    {
        alert('Insira uma cidade')
        document.getElementById('temp').value = '';
        document.getElementById('description').value = '';
        document.getElementById('icone').src = '';
    }
       

    else{
        buscarClima(cidade);
    }
}


async function buscarClima (cidade) {
    const APIKEY = '892cc00497e9bf735a175e6199d8263a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${APIKEY}&units=metric&lang=pt_br`;


    try{
        const resposta = await fetch(url);
        if(!resposta.ok) throw new Error('Cidade não encontrada');
        
        const dados = await resposta.json();

        const temperatura = dados.main.temp;
        const descricao = dados.weather[0].description;
        const icone = dados.weather[0].icon;

        document.getElementById('temp').value = `${temperatura}`;
        document.getElementById('description').value = `${descricao}`;
        document.getElementById('icone').src = `https://openweathermap.org/img/wn/${icone}@2x.png`;
    }
     catch (erro){
        document.getElementById('temp').value = '';
        document.getElementById('description').value = 'Erro: ' + erro.message;
        document.getElementById('icone').src = '';

     }
}
