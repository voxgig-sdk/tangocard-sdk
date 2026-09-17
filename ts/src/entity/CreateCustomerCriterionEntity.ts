
import { inspect } from 'node:util'

import { TangocardEntityBase } from '../TangocardEntityBase'

import type {
  TangocardSDK,
} from '../TangocardSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  CreateCustomerCriterion,
} from '../TangocardTypes'

// TODO: needs Entity superclass
class CreateCustomerCriterionEntity extends TangocardEntityBase<CreateCustomerCriterion> {

  constructor(client: TangocardSDK, entopts: any) {
    super(client, entopts)
    this.name = 'create_customer_criterion'
    this.name_ = 'create_customer_criterion'
    this.Name = 'CreateCustomerCriterion'
  }


  make(this: CreateCustomerCriterionEntity) {
    return new CreateCustomerCriterionEntity(this._client, this.entopts())
  }







}


export {
  CreateCustomerCriterionEntity
}
