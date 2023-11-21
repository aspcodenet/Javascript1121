for(let year=1972;year < 1980; year++){
    console.log(year)
}


let yu2 = 1972
while(yu2 < 1980){
    console.log(yu2)
    yu2++
}


// ; om du vill går oftast bra utan - DU BESTÄMMER
// - Föreläsning variabler,


// console.log(age1)
// // age = 51  ALDRIG
// //var age2 =  51 ALDRIG
// var age1 = 51 // variabel om man an ändra på


// BEST PRACTICE    använd inte ==      är "värdet" samma   "51" == 51
//                  använd  ===    - är BÅDE datatypen och värdet samma?             INTE SANT : "51" === 51
// !=     -> !==

// let theAge = prompt("Hur gammal är du")
// theAge = theAge +1
// console.log('Om ett år är du ' + theAge)

// if(theAge === "51"){
//     console.log("Du är evigt ung")
// }else {
//     console.log("Whatever")
// }


// let theAge2 = parseInt(prompt("Hur gammal är du"))
// if(theAge2 === 51){
//     console.log("Du är evigt ung")
// }else {
//     console.log("Whatever")
// }




// // input//output
// let namnet = prompt("Vad heter du")
// console.log(namnet)
// alert('Du heter '+ namnet)



// let namn = "Stefan"
// namn = namn + " " + "Holmberg"
// namn = namn.toLowerCase()
// console.log(namn)



// // console.log("Hejsan")
// // console.log('Hejsan')
// // console.log(`Hejsan`)

// // age = 51  ALDRIG
// //var age2 =  51 ALDRIG
// let age3 = 51 // variabel om man an ändra på
// age3 = age3 + 1
// console.log(age3)
// //let result = namn + " "  + age3 + "."
// let result = `hej ${namn} ,du är ${age3} asdads adsdas.` 
// console.log(result)


// //console.log(typeof(age3))

// // BEST PRATCICE 
// // 1. Sätt allt till const 
// // 2. tills dess att du vet att vi måste ju kunna ge ett nytt värde
// // INTE const?
// // 3. let     
// const age4 = 51 // KONSTANT

// let isCool = true
// isCool = false





// // let vs const vs var
// // datatyper,
// // - Number
// // - String "", '', ``
// // - bool
// // input/output - prompt/alert
// // if
// // - comparision === vs ==
// // - falsy  https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// // - ternery
// // -  switch japp finns
// // loops
// // - for
// // - while
// // - do while