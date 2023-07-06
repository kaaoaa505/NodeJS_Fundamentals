// node 002_flag_index.js --name "Khaled Allam" --age 34

const args = process.argv.slice(2);

let nameFlagIndex = args.indexOf('--name');

if(nameFlagIndex === -1){
    throw new Error("Must have --name flag");
}

let nameFlagValue = args[nameFlagIndex + 1];

if(!nameFlagValue){
    throw new Error("--name flag have empty value");
}

if(!nameFlagValue || nameFlagValue.startsWith('--')){
    throw new Error("Incorrect --name flag value");
}

console.log("---- nameFlagValue is: ", nameFlagValue);

let ageFlagIndex = args.indexOf('--age');

if(ageFlagIndex === -1){
    throw new Error("Must have --age flag");
}

let ageFlagValue = args[ageFlagIndex + 1];

if(!ageFlagValue){
    throw new Error("--age flag have empty value");
}

if(!ageFlagValue || ageFlagValue.startsWith('--')){
    throw new Error("Incorrect --age flag value");
}

console.log("---- ageFlagValue is: ", ageFlagValue);