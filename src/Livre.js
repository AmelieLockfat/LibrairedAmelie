export default class Livre {
  constructor(id, titre, qtestock, prix) {
    this.id = id;
    this._titre = titre;
    this._qtestock = qtestock;
    this._prix = prix;
  }

  get titre() {
    return this._titre;
  }

  get qtestock() {
    return this._qtestock;
  }

  get prix() {
    return this._prix;
  }

  pourAfficher() {
    return ` ${this._titre} (Stock : ${this._qtestock}) (Prix : ${this._prix})`;
  }
}
