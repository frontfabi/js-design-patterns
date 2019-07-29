class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this); //forma imutável
  }

  obtemVolume() {
    return this._quantidade * this._valor;
  }

  get data() {
    return new Date(this._data); //programação defensiva. evita alterações externas no valor dessa propriedade
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}
