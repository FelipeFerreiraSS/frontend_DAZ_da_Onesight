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
        

        //Desenho 2
        //var img2 = document.createElement("IMG");
        //img2.src = json[3].image;
        //document.getElementById('imagens2').appendChild(img2);
        
        console.log(json[0])
    }) 

