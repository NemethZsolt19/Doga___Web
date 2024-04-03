/*
File: index.html
Author: Németh Zsolt
Copyright: 2024, Németh zsolt
Group: Szoft I-2-N
Date: 2024-04-03
Github: https://github.com/NemethZsolt19/
Licenc: GNU GPL
*/

const sideInput = document.querySelector('#side')

const teruletInput = document.querySelector('#terulet')
const calcButton = document.querySelector('#calcButton')

calcButton.addEventListener('click', () => {
    startCalc();
});

function startCalc(){
    const side=Number(sideInput.value)
    const volume = calcVolume(side)
    volumeInput.value = volume
}

function calcVolume(side){
    return 4* Math.pow(side, 2)*(Math.cos(M_PI/16)*Math.sin(M_PI/16))
}
