


function calculadora() {
    let opcion = prompt(`
    Bienvenidos a la Calcu
    1. suma
    2. resta
    3. multi
    4. division 
    `);

    let valor1 = prompt("Digite x");
    let valor2 = prompt("Digite y");
    let valorp1 = parseInt(valor1);
    let valorp2 = parseInt(valor2);

    if (opcion == 1) {

        function suma(x, y) {
            return x + y;
        }
        alert("Su resultado es: " + suma(valorp1, valorp2))

        calculadora();
    }

    if (opcion == 2) {

        function resta(x, y) {
            return x - y;
        }

        alert("Su resultado es: " + resta(valorp1, valorp2))

        calculadora();
    }

    if (opcion == 3) {

        function multi(x, y) {
            return x * y;
        }

        alert("Su resultado es: " + multi(valorp1, valorp2))
        calculadora();
    }

    if (opcion == 4) {

        function division(x, y) {
            return x / y;
        }

        alert("Su resultado es: " + division(valorp1, valorp2))
        calculadora();
    }


}
calculadora();


