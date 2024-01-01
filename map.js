number = [1,2,3,4]
let newArr = number.map(myfunction);

document.querySelector("#demo").innerHTML = newArr

function myfunction(num){
    return num*10
}

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);
document.querySelector("#filter").innerHTML = result