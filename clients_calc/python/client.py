import requests
import sys

try:
    operator = sys.argv[1] 
    a = float(sys.argv[2])
    b = float(sys.argv[3])

    response = requests.get('http://localhost:3000/calculadora/'+operator+'/'+str(a)+'/'+str(b))

    print('resultado = ' + str(response.json()['resultado']))

except:
    print('Argumentos devem seguir o padrao: <Operador> <Numero> <Numero> \nOperadores: [sum,sub,mul,div]')
