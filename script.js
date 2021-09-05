const baseURL = "http://onesight.com.br:2052/cartoons/cartoons2D";

fetch(baseURL)
    .then(resp => resp.json())
    .then(json => {

        // Desenho 1
        var img = document.createElement("IMG");
        img.src = json[0].image;
        img.style.width = "150px";
        document.getElementById('imagens').appendChild(img);
        document.getElementById('titulo').innerHTML = json[0].title
        document.getElementById('genero').innerHTML = json[0].genre
        document.getElementById('ano').innerHTML = json[0].year
        document.getElementById('criador').innerHTML = json[0].creator
        document.getElementById('epsodios').innerHTML = json[0].episodes

        // Desenho 2
        var img = document.createElement("IMG");
        img.src = json[1].image;
        img.style.width = "150px";
        document.getElementById('imagens1').appendChild(img);
        document.getElementById('titulo1').innerHTML = json[1].title
        document.getElementById('genero1').innerHTML = json[1].genre
        document.getElementById('ano1').innerHTML = json[1].year
        document.getElementById('criador1').innerHTML = json[1].creator
        document.getElementById('epsodios1').innerHTML = json[1].episodes

        var img = document.createElement("IMG");
        img.src = json[14].image;
        img.style.width = "150px";
        document.getElementById('imagens14').appendChild(img);
        document.getElementById('titulo14').innerHTML = json[14].title
        document.getElementById('genero14').innerHTML = json[14].genre
        document.getElementById('ano14').innerHTML = json[14].year
        document.getElementById('criador14').innerHTML = json[14].creator
        document.getElementById('epsodios14').innerHTML = json[14].episodes

        var img = document.createElement("IMG");
        img.src = json[3].image;
        img.style.width = "150px";
        document.getElementById('imagens3').appendChild(img);
        document.getElementById('titulo3').innerHTML = json[3].title
        document.getElementById('genero3').innerHTML = json[3].genre
        document.getElementById('ano3').innerHTML = json[3].year
        document.getElementById('criador3').innerHTML = json[3].creator
        document.getElementById('epsodios3').innerHTML = json[3].episodes
        
        var img = document.createElement("IMG");
        img.src = json[4].image;
        img.style.width = "150px";
        document.getElementById('imagens4').appendChild(img);
        document.getElementById('titulo4').innerHTML = json[4].title
        document.getElementById('genero4').innerHTML = json[4].genre
        document.getElementById('ano4').innerHTML = json[4].year
        document.getElementById('criador4').innerHTML = json[4].creator
        document.getElementById('epsodios4').innerHTML = json[4].episodes

        var img = document.createElement("IMG");
        img.src = json[5].image;
        img.style.width = "150px";
        document.getElementById('imagens5').appendChild(img);
        document.getElementById('titulo5').innerHTML = json[5].title
        document.getElementById('genero5').innerHTML = json[5].genre
        document.getElementById('ano5').innerHTML = json[5].year
        document.getElementById('criador5').innerHTML = json[5].creator
        document.getElementById('epsodios5').innerHTML = json[5].episodes

        var img = document.createElement("IMG");
        img.src = json[6].image;
        img.style.width = "150px";
        document.getElementById('imagens6').appendChild(img);
        document.getElementById('titulo6').innerHTML = json[6].title
        document.getElementById('genero6').innerHTML = json[6].genre
        document.getElementById('ano6').innerHTML = json[6].year
        document.getElementById('criador6').innerHTML = json[6].creator
        document.getElementById('epsodios6').innerHTML = json[6].episodes

        var img = document.createElement("IMG");
        img.src = json[7].image;
        img.style.width = "150px";
        document.getElementById('imagens7').appendChild(img);
        document.getElementById('titulo7').innerHTML = json[7].title
        document.getElementById('genero7').innerHTML = json[7].genre
        document.getElementById('ano7').innerHTML = json[7].year
        document.getElementById('criador7').innerHTML = json[7].creator
        document.getElementById('epsodios7').innerHTML = json[7].episodes

        var img = document.createElement("IMG");
        img.src = json[8].image;
        img.style.width = "150px";
        document.getElementById('imagens8').appendChild(img);
        document.getElementById('titulo8').innerHTML = json[8].title
        document.getElementById('genero8').innerHTML = json[8].genre
        document.getElementById('ano8').innerHTML = json[8].year
        document.getElementById('criador8').innerHTML = json[8].creator
        document.getElementById('epsodios8').innerHTML = json[8].episodes

        var img = document.createElement("IMG");
        img.src = json[9].image;
        img.style.width = "150px";
        document.getElementById('imagens9').appendChild(img);
        document.getElementById('titulo9').innerHTML = json[9].title
        document.getElementById('genero9').innerHTML = json[9].genre
        document.getElementById('ano9').innerHTML = json[9].year
        document.getElementById('criador9').innerHTML = json[9].creator
        document.getElementById('epsodios9').innerHTML = json[9].episodes

        var img = document.createElement("IMG");
        img.src = json[10].image;
        img.style.width = "150px";
        document.getElementById('imagens10').appendChild(img);
        document.getElementById('titulo10').innerHTML = json[10].title
        document.getElementById('genero10').innerHTML = json[10].genre
        document.getElementById('ano10').innerHTML = json[10].year
        document.getElementById('criador10').innerHTML = json[10].creator
        document.getElementById('epsodios10').innerHTML = json[10].episodes

        var img = document.createElement("IMG");
        img.src = json[11].image;
        img.style.width = "150px";
        document.getElementById('imagens11').appendChild(img);
        document.getElementById('titulo11').innerHTML = json[11].title
        document.getElementById('genero11').innerHTML = json[11].genre
        document.getElementById('ano11').innerHTML = json[11].year
        document.getElementById('criador11').innerHTML = json[11].creator
        document.getElementById('epsodios11').innerHTML = json[11].episodes

        var img = document.createElement("IMG");
        img.src = json[12].image;
        img.style.width = "150px";
        document.getElementById('imagens12').appendChild(img);
        document.getElementById('titulo12').innerHTML = json[12].title
        document.getElementById('genero12').innerHTML = json[12].genre
        document.getElementById('ano12').innerHTML = json[12].year
        document.getElementById('criador12').innerHTML = json[12].creator
        document.getElementById('epsodios12').innerHTML = json[12].episodes

    }) 

function mais() {
    let esconder = document.getElementById('esconder')
    let aparecer = document.getElementById('aparecer')
    let mais = document.getElementById('mais')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais1() {
    let esconder = document.getElementById('esconder1')
    let aparecer = document.getElementById('aparecer1')
    let mais = document.getElementById('mais1')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais14() {
    let esconder = document.getElementById('esconder14')
    let aparecer = document.getElementById('aparecer14')
    let mais = document.getElementById('mais14')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais3() {
    let esconder = document.getElementById('esconder3')
    let aparecer = document.getElementById('aparecer3')
    let mais = document.getElementById('mais3')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais4() {
    let esconder = document.getElementById('esconder4')
    let aparecer = document.getElementById('aparecer4')
    let mais = document.getElementById('mais4')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais5() {
    let esconder = document.getElementById('esconder5')
    let aparecer = document.getElementById('aparecer5')
    let mais = document.getElementById('mais5')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais6() {
    let esconder = document.getElementById('esconder6')
    let aparecer = document.getElementById('aparecer6')
    let mais = document.getElementById('mais6')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais7() {
    let esconder = document.getElementById('esconder7')
    let aparecer = document.getElementById('aparecer7')
    let mais = document.getElementById('mais7')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais8() {
    let esconder = document.getElementById('esconder8')
    let aparecer = document.getElementById('aparecer8')
    let mais = document.getElementById('mais8')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais9() {
    let esconder = document.getElementById('esconder9')
    let aparecer = document.getElementById('aparecer9')
    let mais = document.getElementById('mais9')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais10() {
    let esconder = document.getElementById('esconder10')
    let aparecer = document.getElementById('aparecer10')
    let mais = document.getElementById('mais10')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais11() {
    let esconder = document.getElementById('esconder11')
    let aparecer = document.getElementById('aparecer11')
    let mais = document.getElementById('mais11')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}

function mais12() {
    let esconder = document.getElementById('esconder12')
    let aparecer = document.getElementById('aparecer12')
    let mais = document.getElementById('mais12')

    if(esconder.style.display === "none"){
        esconder.style.display = "inline"
        aparecer.style.display = "none"
        mais.innerText = "Mais"
    } else {
        esconder.style.display = "none"
        aparecer.style.display = "inline"
        mais.innerText = "Menos" 
    }
}