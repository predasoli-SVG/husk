const url = 'https://dog.ceo/api/breed/husky/images/random'


const fotocachorro = document.getElementById('fotoHusky') 


const btnovafoto = document.getElementById('btnovafoto') 


async function buscarfoto() {
    
    const resposta = await fetch(url); 
    
   
    const dados = await resposta.json()

   
    console.log(dados)


    fotocachorro.src = dados.message;

}

btnovafoto.addEventListener('click', buscarfoto);

buscarfoto();
