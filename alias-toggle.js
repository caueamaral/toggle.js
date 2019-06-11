'use strict'

const toggle = (alvo, classe) => {
  
  if (typeof alvo == 'string') {
    
    if (alvo.indexOf('#') == 0) {
      alvo = document.querySelector(alvo)
    }
    else {
      alvo = document.querySelectorAll(alvo)
    }
  }
  
  const acao = alvo => {
    
    if (alvo.classList.contains(classe)) {
      alvo.classList.remove(classe)
    }
    else {
      alvo.classList.add(classe)
    }
  }
  
  if (alvo instanceof HTMLElement) {
    acao(alvo)
  }
  else if (alvo instanceof NodeList && alvo.length) {
    alvo.forEach(function(alvo) {
      acao(alvo)
    })
  }
}

module.exports = toggle