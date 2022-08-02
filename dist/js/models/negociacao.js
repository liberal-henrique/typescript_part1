class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
export default Negociacao;
// Another Alternative would be:
// constructor(
//     puclic readonly data: Date,
//     puclic readonly quantidade: number,
//     puclic readonly valor: number,
// )
// If we chose this way, we would remove all 
// get, except the get volume.
