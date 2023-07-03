const pi = 3.14159;

if(pi < 4){
    console.info('Pi is less than 4');
}else if(pi === 4){
    console.warn('Pi is equal to 4');
}else if(pi === 3){
    console.warn('Pi is equal to 3');
}else{
    console.error('Pi is not less than 4');
    console.error('Pi is greater than 4');
}