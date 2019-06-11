const toggle = require('./alias-toggle')

describe('Passa um querySelector', () => {
  // Adiciona a classe ativo
  test('Adiciona a classe ativo', () => {
    document.body.innerHTML = `
      <div id="topo-busca" class="topo-busca"></div>
    `

    toggle(document.querySelector('#topo-busca'), 'ativo')

    expect(document.querySelector('#topo-busca').classList.contains('ativo')).toBe(true)
  })

  // Remove a classe ativo
  test('Remove a classe ativo', () => {
    document.body.innerHTML = `
      <div id="topo-busca" class="topo-busca ativo"></div>
    `

    toggle(document.querySelector('#topo-busca'), 'ativo')

    expect(document.querySelector('#topo-busca').classList.contains('ativo')).toBe(false)
  })

  // Adiciona a classe ativo (elemento nao existe)
  test('Adiciona a classe ativo (nao existe)', () => {
    expect(toggle(document.querySelector('#topo-teste'), 'ativo')).toBeUndefined()
  })
})


describe('Passa um querySelectorAll', () => {
  // Adiciona a classe ativo
  test('Adiciona a classe ativo', () => {
    document.body.innerHTML = `
      <div id="topo-busca" class="topo-busca box"></div>
      <div id="topo-login" class="topo-login box"></div>
    `

    toggle(document.querySelectorAll('.box'), 'ativo')

    expect(document.querySelector('#topo-busca').classList.contains('ativo')).toBe(true)
    expect(document.querySelector('#topo-login').classList.contains('ativo')).toBe(true)
  })

  // Remove a classe ativo
  test('Remove a classe ativo', () => {
    document.body.innerHTML = `
      <div id="topo-busca" class="topo-busca ativo"></div>
      <div id="topo-login" class="topo-login ativo"></div>
    `

    toggle(document.querySelectorAll('.ativo'), 'ativo')

    expect(document.querySelector('#topo-busca').classList.contains('ativo')).toBe(false)
    expect(document.querySelector('#topo-login').classList.contains('ativo')).toBe(false)
  })

  // Remove a classe ativo (nao existe)
  test('Remove a classe ativo (nao existe)', () => {
    document.body.innerHTML = `
      <div id="topo-busca" class="topo-busca"></div>
      <div id="topo-login" class="topo-login"></div>
    `

    toggle(document.querySelectorAll('.ativo'), 'ativo')

    expect(document.querySelector('#topo-busca').classList.contains('ativo')).toBe(false)
    expect(document.querySelector('#topo-login').classList.contains('ativo')).toBe(false)
  })
})


describe('Passa uma string', () => {
  // Adiciona a classe ativo
  test('Adiciona a classe ativo', () => {
    document.body.innerHTML = `
      <div id="topo-busca" class="topo-busca"></div>
    `

    toggle('#topo-busca', 'ativo')

    expect(document.querySelector('#topo-busca').classList.contains('ativo')).toBe(true)
  })

  //  Remove a classe ativo
  test('Remove a classe ativo', () => {
    document.body.innerHTML = `
      <div id="topo-busca" class="topo-busca ativo"></div>
    `

    toggle('#topo-busca', 'ativo')

    expect(document.querySelector('#topo-busca').classList.contains('ativo')).toBe(false)
  })

  // Adiciona a classe ativo (elemento nao existe)
  test('Adiciona a classe ativo (nao existe)', () => {
    expect(toggle('#topo-teste', 'ativo')).toBeUndefined()
  })
})