
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
  EmailTemplateListView,
} from '../TangocardTypes'

// TODO: needs Entity superclass
class EmailTemplateListViewEntity extends TangocardEntityBase<EmailTemplateListView> {

  constructor(client: TangocardSDK, entopts: any) {
    super(client, entopts)
    this.name = 'email_template_list_view'
    this.name_ = 'email_template_list_view'
    this.Name = 'EmailTemplateListView'
  }


  make(this: EmailTemplateListViewEntity) {
    return new EmailTemplateListViewEntity(this._client, this.entopts())
  }







}


export {
  EmailTemplateListViewEntity
}
