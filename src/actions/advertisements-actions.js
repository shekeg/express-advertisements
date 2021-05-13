const { makeAdvertisement } = require('../entities');
const { advertisementDb } = require('../db');

function buildAdvertisementsActions() {
  function findAll() {
    return advertisementDb.findAll();
  }

  function findById({ id }) {
    return advertisementDb.findById({ id });
  }

  function insert(advertisementInfo) {
    const newAdvertisement = makeAdvertisement(advertisementInfo);
    return advertisementDb.insert(newAdvertisement);
  }

  function deleteById({ id }) {
    return advertisementDb.deleteById({ id });
  }

  return {
    findAll,
    findById,
    insert,
    deleteById,
  };
}

exports.buildAdvertisementsActions = buildAdvertisementsActions;
