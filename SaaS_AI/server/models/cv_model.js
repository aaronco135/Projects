const mongoose = require('mongoose');

const CvsStorageSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  cvs: { type: [String], default: [] }
});

const CvsStorage = mongoose.model('CvsStorage', CvsStorageSchema);
module.exports = CvsStorage;
