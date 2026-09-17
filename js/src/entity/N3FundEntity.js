
const { inspect } = require('node:util')

const { TangocardEntityBase } = require('../TangocardEntityBase')


// TODO: needs Entity superclass
class N3FundEntity extends TangocardEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'n3_fund'
    this.name_ = 'n3_fund'
    this.Name = 'N3Fund'
  }


  make() {
    return new N3FundEntity(this._client, this.entopts())
  }







}


module.exports = {
  N3FundEntity
}
