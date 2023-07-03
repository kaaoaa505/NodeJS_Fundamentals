console.log("---- typeof true is: ", typeof true);
console.log("---- typeof false is: ", typeof false);

console.log("---- !true is: ", !true);
console.log("---- !false is: ", !false);

console.log("---- !(5<5) is: ", !(5<5));


let hello = 'Hello!.';
if(hello){
    console.log("---- if(hello) is true");
}else{
    console.log("---- if(hello) is false");
}

hello = '';
if(hello){
    console.log("---- if(hello) is true");
}else{
    console.log("---- if(hello) is false");
}

hello = 0;
if(hello){
    console.log("---- if(0) is true");
}else{
    console.log("---- if(0) is false");
}

hello = [];
if(hello){
    console.log("---- if([]) is true");
}else{
    console.log("---- if([]) is false");
}

hello = {};
if(hello){
    console.log("---- if({}) is true");
}else{
    console.log("---- if({}) is false");
}

hello = [].length;
if(hello){
    console.log("---- if([].length) is true");
}else{
    console.log("---- if([].length) is false");
}

hello = {}.length;
if(hello){
    console.log("---- if({}.length) is true");
}else{
    console.log("---- if({}.length) is false");
}

hello = NaN;
if(hello){
    console.log("---- if(NaN) is true");
}else{
    console.log("---- if(NaN) is false");
}

hello = Infinity;
if(hello){
    console.log("---- if(Infinity) is true");
}else{
    console.log("---- if(Infinity) is false");
}

hello = -Infinity;
if(hello){
    console.log("---- if(-Infinity) is true");
}else{
    console.log("---- if(-Infinity) is false");
}

hello = null;
if(hello){
    console.log("---- if(null) is true");
}else{
    console.log("---- if(null) is false");
}

hello = undefined;
if(hello){
    console.log("---- if(undefined) is true");
}else{
    console.log("---- if(undefined) is false");
}