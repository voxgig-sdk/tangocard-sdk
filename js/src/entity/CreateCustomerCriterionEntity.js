
const { inspect } = require('node:util')

const { TangocardEntityBase } = require('../TangocardEntityBase')


// TODO: needs Entity superclass
class CreateCustomerCriterionEntity extends TangocardEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'create_customer_criterion'
    this.name_ = 'create_customer_criterion'
    this.Name = 'CreateCustomerCriterion'
  }


  make() {
    return new CreateCustomerCriterionEntity(this._client, this.entopts())
  }







}


module.exports = {
  CreateCustomerCriterionEntity
}
