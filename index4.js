const basePrice = 500 // базовая цена биле6та
const age = 14
const isWeekend = false
const isEvening = true
const hasStudentCard = true


const movieRating = "12+"
let movieRatingAge = 0

let ageAcces = false

let DiscountW = 0
let DiscountE = 0
let totalPrice

if (isWeekend) {
    DiscountW = (basePrice / 100 * 15) //75
}

if (isEvening) {
    DiscountE = (basePrice / 100 * 10) //50
}

totalPrice = basePrice + DiscountE + DiscountW
if (age >= 16 && age <= 25 && isWeekend == false) {
    if (hasStudentCard) {
        totalPrice = totalPrice - (totalPrice / 100 * 15)
    }
}
else if (age < 12) {
    totalPrice = totalPrice - (totalPrice / 100 * 50)
}

if(movieRating == "12+"){
    movieRatingAge = 12
}
else if ( movieRating == "14+"){
    movieRatingAge = 14
}
else if (movieRating == "18+") {
    movieRatingAge = 18
}

if (age >= movieRatingAge ) {
    ageAcces = true
}

console.log(movieRating)

if (ageAcces) {
    console.log(totalPrice)
}
else {
    console.log("Возрастное ограничение")
}