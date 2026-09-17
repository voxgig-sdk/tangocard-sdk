
const { inspect } = require('node:util')

const { TangocardEntityBase } = require('../TangocardEntityBase')


// TODO: needs Entity superclass
class EmailTemplateListViewEntity extends TangocardEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'email_template_list_view'
    this.name_ = 'email_template_list_view'
    this.Name = 'EmailTemplateListView'
  }


  make() {
    return new EmailTemplateListViewEntity(this._client, this.entopts())
  }







}


module.exports = {
  EmailTemplateListViewEntity
}
