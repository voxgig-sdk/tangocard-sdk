
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
  N2Account,
} from '../TangocardTypes'

// TODO: needs Entity superclass
class N2AccountEntity extends TangocardEntityBase<N2Account> {

  constructor(client: TangocardSDK, entopts: any) {
    super(client, entopts)
    this.name = 'n2_account'
    this.name_ = 'n2_account'
    this.Name = 'N2Account'
  }


  make(this: N2AccountEntity) {
    return new N2AccountEntity(this._client, this.entopts())
  }







}


export {
  N2AccountEntity
}
