let animal = {
    speaks: true,
    walk() {
        console.log("Animal walks");
    }
}
let dog = {
    __proto__: animal
}
dog.walk();