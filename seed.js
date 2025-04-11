function mostrarFotoCp() {
    let foto = document.getElementById('foto');

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

//foto.setAttribute ('src', 'imagens/foto-joao-300px.jpg') 
//document.getElementById('foto').appendChild(f