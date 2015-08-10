
var Parse = require('parse').Parse;
var Schema = Parse.Schema;

var receiptSchema = new Schema({
  name : String
});

module.exports = Parse.model("Receipt", receiptSchema);
