const calcular = document.getElementById("verificar");
const result = document.getElementById("resultado");
const velo = document.getElementById("txtvel");

function multa(){  

    if (velo.value > 60) {
        result.innerHTML = `<p>Sua velocidade apurada foi de <strong>${Number(velo.value)}</strong> Km/h, você foi multado!!!</p>`
    }
    else{
        result.innerHTML = `<p>Sua velocidade apurada foi de  <strong>${Number(velo.value)}</strong> km/h, você está no limite!!!</p>`

        result.innerHTML += `<p>Use o cinto de segurança e cuidado na estrada!!!</p>`

    }
}

calcular.addEventListener("click", multa);