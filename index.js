//Function Declarion

function introduction(name){
    return "Hi, my name is " + name + "."
}

//Function expression

let introductionWithLanguage = function(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

let introductionWithLanguageOptional = (name, language = "JavaScript") => {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// let introductionWithLanguageOptional = (name, language) => {
//     return `Hi, my name is ${name} and I am learning to program in ${language}.`
// }