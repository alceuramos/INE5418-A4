import requests
import sys
import os
from requests.api import options
from requests.sessions import PreparedRequest
ERROR_LIST = ['ValueError','KeyError','IndexError']
def execute(input):
    try:
        operator = input[1] 
        a = float(input[0])
        b = float(input[2])
        op = {
            '+':'sum',
            '-':'sub',
            '/':'div',
            '*':'mul'
        }
        response = requests.get('http://localhost:3000/calculadora/'+op[operator]+'/'+str(a)+'/'+str(b))
        print('resultado = ' + str(response.json()['resultado']))

    except Exception as e:
        if e.__class__.__name__ in ERROR_LIST:
            print('Operação inválida!')
            print('Argumentos devem seguir o padrao: <Numero> <Operador> <Numero>')
            print('Operadores válidos: + - * /')
        elif e.__class__.__name__ == 'ConnectionError':
            print('Erro ao conectar ao servidor')
        else:
            print('Erro inesperado')
            print(e.__class__.__name__)
def main():    
    a = None
    while True:
        print('\n    >>>Calculadora<<<')
        print('Digite "exit" para sair.')
        a = input('Digite a operação desejada:\n')
        if a == 'exit':
            exit(0)
        else:   
            execute(a.split(' '))

if __name__ == '__main__':
    main()