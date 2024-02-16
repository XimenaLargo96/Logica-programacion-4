const inputNumber = document.getElementById("input-number");
const form = document.querySelector("form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = parseInt(inputNumber.value);
    
    if (userInput > 0) {
        const sucesion = numerosFibonacci(userInput);
        let cadenaResultante = "";
        
        sucesion.forEach((element, index) => {
            cadenaResultante += `<span>${element}</span>`;
            
            if (index < sucesion.length - 1) {
                cadenaResultante += ' - ';
            }
        });

        result.innerHTML = `<p class="text-center fs-5 mt-3">Los primeros ${inputNumber.value} numeros de la sucesion de Fibonacci son: ${cadenaResultante}</p>`;
    } else {
        result.innerHTML = "<span>Por favor, ingrese un número válido mayor que 0.</span>";
    }
    return false;
});

function numerosFibonacci(parametro) {
    let numero1 = 0;
    let numero2 = 1;
    let sigNum;
    let secuencia = [];

    for (let i = 1; i <= parametro; i++) {
        secuencia.push(numero1);
        sigNum = numero1 + numero2;
        numero1 = numero2;
        numero2 = sigNum;
    }

    return secuencia;
}
