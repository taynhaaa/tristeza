// Exemplo básico de dados
const destinos = {
    1: { nome: 'Nárnia', preco: 50 },
    2: { nome: 'Hogwarts', preco: 75 },
    3: { nome: 'Grand Line', preco: 300},
    4: { nome: 'Pousada Sekizenkan', preco: 40},

  };
  
  // Obtém a data atual
   {
let dataAtual = new Date()
  };

  const horarios = {
    morning: '08:08h',
    afternoon: '14:14h',
    evening: '20:20h',
  };
  
  
  function comprarPassagem() {
    const destinoSelecionado = document.getElementById('destino').value;
    const horarioSelecionado = document.getElementById('horario').value;
    const saldoCliente = parseFloat(document.getElementById('saldo').value);
  
    if (!destinos[destinoSelecionado] || !horarios[horarioSelecionado]) {
      alert('Destino ou horário inválido!');
      return;
    }
  else if ( dataAtual >= horarios[horarioSelecionado]){
    alert('Destino ou horário inválido!');
      return;
  }

  else if ( dataAtual <= horarios[horarioSelecionado]){
    alert('Destino ou horário inválido!');
      return;
  }

  else{
    alert('Compra feita com sucesso!'); 
  }
  
    const precoPassagem = destinos[destinoSelecionado].preco;
  
    if (saldoCliente >= precoPassagem) {
      alert(`Passagem comprada para ${destinos[destinoSelecionado].nome} no horário da ${horarios[horarioSelecionado]}.`);
    } else {
      alert('Saldo insuficiente para comprar a passagem.');
    }
  }

