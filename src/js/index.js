//* NO eliminar el import de style.css
// Para añadir cualquier archivo de assets, este se tine que importar como el ejemplo de testMask.svg
import ".././css/style.css";
import ".././assets/testMask.svg";

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