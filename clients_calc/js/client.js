const axios = require('axios');

//console.log(process.argv.slice(2))
try {
    var operator = process.argv[2]
    var a = parseFloat(process.argv[3])
    var b = parseFloat(process.argv[4])

    axios.get('http://localhost:3000/calculadora/' + operator + '/' + a + '/' + b)
        .then(response => {
            console.log('resultado = ' + response.data['resultado'])

        })
        .catch(error => {
            console.log('Argumentos devem seguir o padrão: <Operador> <Número> <Número> \nOperadores: [sum,sub,mul,div]')
        
        });
} catch (error) {
    console.log('Argumentos devem seguir o padrão: <Operador> <Número> <Número> \nOperadores: [sum,sub,mul,div]')
}