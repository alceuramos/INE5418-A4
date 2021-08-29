# INE5418-A4 | Calculadora
Atividade 4 da disciplina de Computação Distribuída do curso de Ciências da Computação da Universidade Federal de Santa Catarina.

# Configuração e execução
## Servidor 
Instale NodeJS, as dependências e inicie o servidor.
```bash
sudo apt install nodejs
cd server_calc
npm install
npm start
```
## Clientes
Temos dois clientes, o primeiro em JavaScript executado por meio de uma página HTML e o segundo é um cliente Python CLI.
### JavaScript
Abra o arquivo client.html com seu navegador.
```bash
cd client_calc/html
google-chrome client.html
```
### Python
Ative seu ambiente virtual, instale as dependências e execute o cliente.
```bash
cd clients_calc/python
pip install -r requirements.txt
python3 client.py
```
As operações enviadas pela client Python CLI devem seguir o seguinte formato:
```
<Número> <Operador> <Número>
```
onde os possíveis operadores são: + - * /
