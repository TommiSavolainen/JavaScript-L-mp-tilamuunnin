let nappi = document.getElementById('btn');
nappi.addEventListener('click', MuunnaLampotila);
function MuunnaLampotila(event){
    event.preventDefault();
    let SyotaLampotila = document.getElementById('syota').value
    let vastaus = document.getElementById('vastaus')
    let x = document.getElementById('valinta').selectedIndex;
    let y = document.getElementById('valinta').options;
    let desimaali = 0
    let abNolla = document.getElementById('nolla')
    abNolla.innerText = ''
    if (document.getElementById('1_desimaali').checked){
        desimaali = 1
    }else if (document.getElementById('2_desimaali').checked){
        desimaali = 2
    }else if (document.getElementById('3_desimaali').checked){
        desimaali = 3
    }else{
        desimaali = 0
    }
    console.log(typeof SyotaLampotila)
    if (SyotaLampotila == ''){
        vastaus.innerText = 'Täytyy syöttää lämpötila!'
    }else if (!isNaN(SyotaLampotila)){
        if (y[x].index == 0){
            let lampo1 = SyotaLampotila * 1.8 + 32
            lampo1 = lampo1.toFixed(desimaali)
            vastaus.innerText = lampo1 + ' Fahrenheit'
            if (lampo1 < -459.67){
                abNolla.innerText = 'Kylmempi kuin absoluuttinen nollapiste!'
            }
        }else if (y[x].index == 1){
            let lampo2 = (SyotaLampotila - 32) / 1.8
            lampo2 = lampo2.toFixed(desimaali)
            vastaus.innerText = lampo2 + ' Celsius'
            if (lampo2 < -273.15){
                abNolla.innerText = 'Kylmempi kuin absoluuttinen nollapiste!'
            }
        }
    }else{
        vastaus.innerText = 'Täytyy syöttää numero!'
    }
    document.getElementById('syota').value = ''
}