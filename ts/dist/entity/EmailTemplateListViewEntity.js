"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplateListViewEntity = void 0;
const TangocardEntityBase_1 = require("../TangocardEntityBase");
// TODO: needs Entity superclass
class EmailTemplateListViewEntity extends TangocardEntityBase_1.TangocardEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'email_template_list_view';
        this.name_ = 'email_template_list_view';
        this.Name = 'EmailTemplateListView';
    }
    make() {
        return new EmailTemplateListViewEntity(this._client, this.entopts());
    }
}
exports.EmailTemplateListViewEntity = EmailTemplateListViewEntity;
//# sourceMappingURL=EmailTemplateListViewEntity.js.map