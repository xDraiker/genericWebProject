//* NO eliminar la importacion dde style.css
import './style.css'

let array1 = [1,2,3,4,5];

const foo = () => {
    let array2 = [...array1];
    let nRandom = () => Math.round(Math.random()*10);
    for(let i = 0; i <=3; i++){
        array2.push(nRandom());
    }
    console.log(array2);
};

foo();