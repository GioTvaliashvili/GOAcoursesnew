interface UserType{
    name: String,
    age:Number,
    ownpiano:Boolean
}

let User:UserType = {
    name: "Gio",
    age: 13,
    ownpiano: true
}


interface LashasMamasType{
    a: String,
    b: Number
}

function Es_Lashas_Mamaa_Xoo({ a, b }: LashasMamasType) {
    console.log(a)
    console.log(b)
}