
const toppings = ["oreo", "kitkat", "fresas"];

let total = 50;

if (toppings.length > 0) {

    for (let i = 0; i < toppings.length; i++) {

        switch (toppings[i]) {
            case "oreo":
                total += 10;
                break;
            case "kitkat":
                total += 15;
                break;
            case "brownie":
                total += 20;
                break;
            default:
                console.log("No contamos con", toppings[i], "por el momento");
                break;
        }
    }

    console.log("Total de la compra:", total);
} else {
    /* Costo sería de $50 */
    console.log("Total de la compra:", total);
}

