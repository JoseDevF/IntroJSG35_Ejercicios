/* Calculadora */

/* 
Suma
Resta 
Multiplicacion
División

Primera condición: No deben de ser menos de 2 operadores.
Segunda condición: No debe haber división entre cero.

Se tiene que especificar el orden de la operación

'suma'
'resta'

0 -> suma
1 -> resta
*/

function calculadora(op, arreglo_num) {

    switch (op) {
        case 0:
            return arreglo_num[0] + arreglo_num[1];
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            break;
    }
}

function cadena_a_numeros(cadena) {

    /* Parametros: operandos, Return: operandos_array, Cuerpo */
    const arreglo_num = cadena.split(",");

    let aux = [];

    for (let i = 0; i < arreglo_num.length; i++) {

        /* aux = [...aux, parseInt(operandos_array[i])]; */

        aux.push(parseFloat(arreglo_num[i]))

    }
    return aux;
}

/* prompt siempre devuelve una cadena */
const input_op = prompt("¿Que operacion deseas realizar:");

/* Limpieza de cadena */
const input_op_sane = input_op.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/* Sanitizar */
if (input_op_sane === "suma" || input_op_sane === "+") {
    /* Hago el proceso de la suma; pedir operandos, mandar llamar a la función calculadora.*/

    /* Esto es una cadena de texto */
    const operandos = prompt("Ingresa los operandos separados por comas (,)");

    const resultado = calculadora(0, cadena_a_numeros(operandos));

    alert("El resultado es:" + resultado);


} else if (input_op_sane === "resta" || input_op_sane === "-") {

} else if (input_op_sane === "multiplicacion" || input_op_sane === "*") {

} else if (input_op_sane === "division" || input_op_sane === "/") {

} else {
    alert("Operación no reconocida, por favor ingresa alguna las siguientes: suma, resta, multiplicacion, division");
}

