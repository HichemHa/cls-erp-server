const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const clientSchema = new Schema({
  name: String,
  phoneNumber: Number,
  email: String,
  adress: [{
    adressLine: String,
    city: String,
    zipCode: Number,
  }],
  raisonSocial: String,
  secteurActivite: String,
  commentaire: String,
  listCommande: [
    {
      nOrdre: String,
      dateOrdre: Date,
      contrePartie: String,
      libele: String,
      debit: Number,
      credit: Number,
      solde: Number,
      modeDePaiment: String,
    }
  ],
});

module.exports = Client = new mongoose.model("Client", clientSchema);
