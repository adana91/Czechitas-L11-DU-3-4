// tady je místo pro náš program

const hod = () => {
    return Math.ceil(Math.random() * 6)
}

let pokus = 1
let vysledek = hod() 
while (vysledek !== 6) {
    vysledek = hod()
    pokus += 1
    console.log(`Padlo cislo ${vysledek}`)
}

console.log(`Sestka padla na ${pokus}. pokus`)