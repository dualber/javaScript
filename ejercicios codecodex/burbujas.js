/*
Fizz Buzz es un juego de palabras infantil que enseña división. También es una pregunta clásica en las entrevistas técnicas de innumerables empresas.

Aunque esta pregunta pueda parecer sencilla para desarrolladores web experimentados, está diseñada para descartar al 90 % de los candidatos que no pueden aplicar sus conocimientos de programación a un problema nuevo de forma creativa. ¿Te animas a intentarlo?

Así es como funciona el juego: Contamos desde 1 hasta un número dado ("1, 2, 3, ..."):

Si el siguiente número es múltiplo de 3, decimos "Fizz".
Si el siguiente número es múltiplo de 5, decimos "Buzz".
Si el siguiente número es múltiplo de 3 y de 5, decimos "FizzBuzz". */

    //otra forma de hacerlo

    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        console.log(output || i);
    }      
