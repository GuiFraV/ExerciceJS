// // retourne un entier 
// list => entier indice dasn cette AudioListener
// liste d'entier +
// 123 456 => 456 123 => output 3
[5 8 32 1 4]

[456789] k = 2=> [6789 4 5] => 2

[1,2,3]
 

function list(list){

    if(list.length < 1) return 0;


    const len = list.length;

    let index = 0;
    let k = len -1;

    for(let i = 0 ; i < len ; i++){

        if(i == len -1){
            return 0;
        }

        if(list[i] > list[i + 1]){
            index = i
            break;
        }
        
    }


    // for(let i = index; i < list.length -1 ; i++){
    //     k++;
    // }
    return k - index;


} 

console.log(list([3,1,2]));








