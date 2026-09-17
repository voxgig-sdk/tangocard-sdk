
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
  N3Fund,
} from '../TangocardTypes'

// TODO: needs Entity superclass
class N3FundEntity extends TangocardEntityBase<N3Fund> {

  constructor(client: TangocardSDK, entopts: any) {
    super(client, entopts)
    this.name = 'n3_fund'
    this.name_ = 'n3_fund'
    this.Name = 'N3Fund'
  }


  make(this: N3FundEntity) {
    return new N3FundEntity(this._client, this.entopts())
  }







}


export {
  N3FundEntity
}
