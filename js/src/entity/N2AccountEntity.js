
const { inspect } = require('node:util')

const { TangocardEntityBase } = require('../TangocardEntityBase')


// TODO: needs Entity superclass
class N2AccountEntity extends TangocardEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'n2_account'
    this.name_ = 'n2_account'
    this.Name = 'N2Account'
  }


  make() {
    return new N2AccountEntity(this._client, this.entopts())
  }







}


module.exports = {
  N2AccountEntity
}
