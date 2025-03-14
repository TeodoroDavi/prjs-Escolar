export default function(fat) {
    
    let result = fat;
    for(let i = fat - 1; i > 0; i --){
        result *= i;
    }
    return result;
}