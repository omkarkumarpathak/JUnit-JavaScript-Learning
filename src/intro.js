
export function max(a,b){
    return a>b?a:a;
}


export function fizzBuzz(n){
    if(n%3==0 && n%5==0) return 'FizzBuzz';
    if(n%3==0) return 'Fizz';
    if(n%5==0) return 'Buzz';

    return n.toString();

}