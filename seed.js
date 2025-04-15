function mostrarFotoCp() {
    let foto = document.getElementById('foto');
    let nome = document.getElementById('nome');
    let descricao = document.getElementById('sobre');
    nome.innerHTML = "João Victor"
    descricao.innerHTML ="<p>Copywriter com experiência em projetos nacionais e internacionais, incluindo trabalhos para uma musicista da Suíça. Atua na criação de textos estratégicos voltados para posicionamento de marca e conversão.</p><p>Especialista em adaptar a linguagem conforme o público e o canal, desenvolve copys para páginas de vendas, redes sociais e campanhas, unindo criatividade e foco em resultados.</p>"
    if (!foto) {
        console.error("Elemento 'foto' não encontrado!");
        return;
    }

    if (foto.style.display === 'none' || foto.style.display === '') {
        foto.style.display = 'block';  
        foto.style.backgroundImage = "url('imagens/foto-joao-300px.jpg')";
        foto.style.backgroundSize = "cover";
        foto.style.backgroundPosition = "center";
    } else{
        foto.style.backgroundImage = "url('imagens/foto-joao-300px.jpg')";
        foto.style.backgroundSize = "cover";
        foto.style.backgroundPosition = "center";
    }
}

function mostrarFotoGt(){
    let foto = document.getElementById('foto');
    let nome = document.getElementById('nome');
    let descricao = document.getElementById('sobre');
    nome.innerHTML = "Luis Felippe"
    descricao.innerHTML = "<p>Gestor de tráfego com ampla atuação em campanhas para grandes e-commerces e empresas de diversos segmentos. Já gerenciou estratégias no Brasil e no exterior, otimizando resultados com foco em performance.</p><p>Com domínio de tráfego pago em múltiplas plataformas, entrega campanhas escaláveis, bem segmentadas e orientadas por dados, sempre com foco em conversão e retorno sobre investimento.</p>"

    if (!foto) {
        console.error("Elemento 'foto' não encontrado!");
        return;
    }

    if (foto.style.display === 'none' || foto.style.display === '') {
        foto.style.display = 'block';  
        foto.style.backgroundImage = "url('imagens/foto-luis-600px.jpg')";
        foto.style.backgroundSize = "cover";
        foto.style.backgroundPosition = "center";
    } else{
        foto.style.backgroundImage = "url('imagens/foto-luis-600px.jpg')";
        foto.style.backgroundSize = "cover";
        foto.style.backgroundPosition = "center";
    }
}

function mostrarFotoMk(){
    let foto = document.getElementById('foto');
    let nome = document.getElementById('nome');
    let descricao = document.getElementById('sobre');
    nome.innerHTML = "Pedro Araújo"
    descricao.innerHTML = "<p>Especialista em vendas e estratégias de marketing com experiência em impulsionar resultados comerciais por meio de posicionamento eficaz e táticas inteligentes. Atuou em projetos de diferentes portes, sempre com foco em crescimento e conversão.</p><p>Com visão estratégica e domínio de funis de vendas, desenvolve ações integradas que alinham marketing e comercial, otimizando cada etapa da jornada do cliente.</p>"

    if (!foto) {
        console.error("Elemento 'foto' não encontrado!");
        return;
    }

    if (foto.style.display === 'none' || foto.style.display === '') {
        foto.style.display = 'block';  
        foto.style.backgroundImage = "url('imagens/foto-pedrao-600px.jpg')";
        foto.style.backgroundSize = "cover";
        foto.style.backgroundPosition = "center";
    } else{
        foto.style.backgroundImage = "url('imagens/foto-pedrao-600px.jpg')";
        foto.style.backgroundSize = "cover";
        foto.style.backgroundPosition = "center";
    }
}

// Agora colocaremos uma resposta que aparecerá depois que a pessoa concluir o  formulário

const botao = document.getElementById('botao');

const addCarregar = () => {
    botao.innerHTML ='<img src="imagens/load-transparente-50px.png" class="loading">'
}


const removeCarregar = () => {
    botao.innerHTML ='Enviado'
    botao.style.background= '#99ff00'
    botao.style.color = '#000000'
    const res = document.getElementById('res')
    res.innerHTML ='Os seus dados foram salvos corretamente! <br> Entraremos em contato pelo número do celular.'
}


const enviar = (event) => {
    event.preventDefault();
    addCarregar();

    const nome = document.querySelector('input[name=nome]').value;
    const empresa = document.querySelector('input[name=empresa]').value;
    const contatoBruto = document.querySelector('input[name=contato]').value; //com formatação
    const email = document.querySelector('input[name=email]').value;

    const contato = contatoBruto.replace(/\D/g, '');//sem formatação

    fetch('https://api.sheetmonkey.io/form/bSkUwMgw89mYa59Uyhttdn', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Nome: nome, Empresa: empresa, Contato: contato, Email: email}),

    }).then(() => removeCarregar());
}

document.getElementById('form1').addEventListener('submit', enviar);