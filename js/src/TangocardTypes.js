// Typed models for the Tangocard SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Catalog
 * @property {string} [brandKey]
 * @property {string} [brandName]
 * @property {Array} [imageUrls]
 * @property {Array} [items]
 */

/**
 * @typedef {Object} CatalogListMatch
 * @property {string} [brandKey]
 * @property {string} [brandName]
 * @property {Array} [imageUrls]
 * @property {Array} [items]
 */

/**
 * @typedef {Object} Customer
 * @property {string} [customerIdentifier]
 * @property {string} [displayName]
 * @property {string} [email]
 */

/**
 * @typedef {Object} CustomerListMatch
 * @property {string} [customerIdentifier]
 * @property {string} [displayName]
 * @property {string} [email]
 */

/**
 * @typedef {Object} Order
 * @property {string} accountIdentifier
 * @property {number} [amount]
 * @property {string} [campaign]
 * @property {string} [created]
 * @property {string} customerIdentifier
 * @property {Object} [recipient]
 * @property {string} [referenceOrderID]
 * @property {string} [rewardName]
 * @property {boolean} [sendEmail]
 * @property {string} [status]
 * @property {string} [utid]
 */

/**
 * @typedef {Object} OrderListMatch
 * @property {string} [accountIdentifier]
 * @property {number} [amount]
 * @property {string} [campaign]
 * @property {string} [created]
 * @property {string} [customerIdentifier]
 * @property {Object} [recipient]
 * @property {string} [referenceOrderID]
 * @property {string} [rewardName]
 * @property {boolean} [sendEmail]
 * @property {string} [status]
 * @property {string} [utid]
 */

/**
 * @typedef {Object} OrderCreateData
 * @property {string} accountIdentifier
 * @property {number} [amount]
 * @property {string} [campaign]
 * @property {string} [created]
 * @property {string} customerIdentifier
 * @property {Object} [recipient]
 * @property {string} [referenceOrderID]
 * @property {string} [rewardName]
 * @property {boolean} [sendEmail]
 * @property {string} [status]
 * @property {string} [utid]
 */

