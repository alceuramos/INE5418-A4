module.exports = function(server) {
    
    //route About
        server.route({
            method: 'GET',
            path: '/calculadora/about',
            handler: function (pedido){
        
                var data = {
                    msg: 'API Calculadora | Operações[sum, sub, mul, div]'
                };
        
                return data;
            }
        });
    
    //route sum
        server.route({
            method: 'GET',
            path: '/calculadora/sum/{num1}/{num2}',
            handler: function (pedido) {
    
                const num1 = parseFloat(pedido.params.num1);
                const num2 = parseFloat(pedido.params.num2);
    
                var data = {
                    resultado: num1 + num2
                };
        
                return data;
            }
        });
    
    //route sub
        server.route({
            method: 'GET',
            path: '/calculadora/sub/{num1}/{num2}',
            handler: function (pedido){
    
                const num1 = parseFloat(pedido.params.num1);
                const num2 = parseFloat(pedido.params.num2);
    
                var data = {
                    resultado: num1 - num2
                };
        
                return data;
            }
        });
    //route mul
        server.route({
            method: 'GET',
            path: '/calculadora/mul/{num1}/{num2}',
            handler: function (pedido){
    
                const num1 = parseFloat(pedido.params.num1);
                const num2 = parseFloat(pedido.params.num2);
    
                var data = {
                    resultado: num1 * num2
                };
        
                return data;
            }
        });
    
    //route div
        server.route({
            method: 'GET',
            path: '/calculadora/div/{num1}/{num2}',
            handler: function (pedido){
    
                const num1 = parseFloat(pedido.params.num1);
                const num2 = parseFloat(pedido.params.num2);

                if (num2 == 0) {
                    return {
                        resultado: 'Operação inválida.'
                    }
                }
    
                var data = {
                    resultado: num1 / num2
                };
        
                return data;
            }
        });
    }