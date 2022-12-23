// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
// #1 push add element to end of array
    function destructivelyAppendCat(name) {
    const A = cats.push("Ralph");
      console.log(A);
    }
    
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');   
// #2 unshift add element to beginning of array
    function destructivelyPrependCat(name) {
     const B = cats.unshift("Bob");
      console.log(B);
    }

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');   
 // #3 pop remove last element  of array   
    function destructivelyRemoveLastCat() {
    const C = cats.pop();
       console.log(C);
    }
    
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield'); 
// #4  shift remove first  element  of array      
    function destructivelyRemoveFirstCat() {
    const D = cats.shift();
      console.log(D);
    }
 
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield'); 
// #5 push add element to end of NEW array
    function appendCat(name) {
    const cats2 =  [...cats,"Broom"];
    return cats2;
    }
    
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield'); 
// #6 unshift add element to beginning of NEW array
    function prependCat(name) {
    const cats2 =  ["Arnold",...cats];
    return cats2;
    }
    
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield'); 
// #7 pop remove last element  of  NEW array 
    function removeLastCat() {
    const cats2 =  cats.slice(0,2);
    return cats2;
    }
    
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield'); 
// #8  shift remove first  element  of  NEW array  
    function removeFirstCat() {
    const cats2 =  cats.slice(1);
    return cats2;
    }