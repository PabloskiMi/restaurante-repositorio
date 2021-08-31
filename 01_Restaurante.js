document.write("<h1>Restaurante</h1>");

var total = 0;

var nNachos = 0;
var nPizza = 0;
var nTaco = 0;

var nAguaNatural = 0;
var nSoda = 0;
var nCerveza = 0;


do {


    var op = prompt(" Total: " + total + "\n"
        + nNachos + " - Nachos -- $30\n"
        + nPizza + " - Pizza -- $120\n"
        + nTaco + " - Taco -- $10\n"
        + nAguaNatural + " - Agua Natural -- $15\n"
        + nSoda + " - Soda -- $30\n"
        + nCerveza + " - Cerveza -- $45\n"
        + " - Salir. \n"
        + "Introduce una opción:");

    switch (op) {
        case "Nachos":
            alert("Seleccionaste Nachos");
            nNachos++;
            total += 30;
            break;
        case "Pizza":
            alert("Seleccionaste Pizza");
            nPizza++;
            total += 120;
            break;
        case "Taco":
            alert("Seleccionaste Taco");
            nTaco++;
            total += 10;
            break;
        case "Agua Natural":
            alert("Seleccionaste Agua Natural");
            nAguaNatural++;
            total += 15;
            break;
        case "Soda":
            alert("Seleccionaste Soda");
            nSoda++;
            total += 30;
            break;
        case "Cerveza":
            alert("Seleccionaste Cerveza");
            nCerveza++;
            total += 45;
            break;
        case "Salir":
            alert("Saliendo...");
            break;
        default:
            alert("seleccionaste una opción incorrecta o que no se encuentra en el menú");
    }

} while (op != "Salir");


document.write("<h1>CUENTA</h1>");


if (nNachos > 0) {

    document.write("<h2>" + nNachos + " - Nachos $" + (nNachos * 30) + "</h2>");

} if (nPizza > 0) {

    document.write("<h2>" + nPizza + " - Pizza(s) $" + (nPizza * 120) + "</h2>");

} if (nTaco > 0) {

    document.write("<h2>" + nTaco + " - Taco(s) $" + (nTaco * 10) + "</h2>");

} if (nAguaNatural > 0) {

    document.write("<h2>" + nAguaNatural + " - Agua Natural $" + (nAguaNatural * 15) + "</h2>");

} if (nSoda > 0) {

    document.write("<h2>" + nSoda + " - Soda(s) $" + (nSoda * 30) + "</h2>");

} if (nCerveza > 0) {

    document.write("<h2>" + nCerveza + " - Cerveza(s) $" + (nCerveza * 45) + "</h2>");

}

document.write("<h1>Total: $ " + total + "</h1>");