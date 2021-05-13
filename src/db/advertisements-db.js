const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
  shortText: String,
  description: String,
  images: [String],
  userId: mongoose.Schema.ObjectId,
  tags: [String],
  isDeleted: Boolean,
}, { timestamps: true });

const Advertisement = mongoose.model('Advertisement', advertisementSchema);

function findAll() {
  return Advertisement.find();
}

function findById({ id }) {
  return Advertisement.findById(id).exec();
}

function insert(advertisementInfo) {
  const newAdvertisement = new Advertisement(advertisementInfo);
  return newAdvertisement.save();
}

function deleteById({ id }) {
  return Advertisement.deleteOne({ _id: id });
}

const advertisementDb = {
  findAll,
  findById,
  insert,
  deleteById,
};

exports.advertisementDb = advertisementDb;
