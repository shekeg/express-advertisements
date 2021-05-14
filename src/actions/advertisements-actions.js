const { makeAdvertisement } = require('../entities');
const { advertisementDb } = require('../db');

function buildAdvertisementsActions({ ForbiddenError }) {
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

  function deleteById({ id, userId }) {
    return advertisementDb.findById({ id })
      .then((targetAdvertisement) => {
        if (targetAdvertisement === null) {
          throw new Error('Обявление отсутствует');
        }
        return targetAdvertisement;
      })
      .then((targetAdvertisement) => {
        if (
          targetAdvertisement.userId === null
          || targetAdvertisement.userId.toString() !== userId
        ) {
          throw new ForbiddenError('Вы не являетесь автором данного объявления');
        }
        return advertisementDb.deleteById({ id });
      });
  }

  return {
    findAll,
    findById,
    insert,
    deleteById,
  };
}

exports.buildAdvertisementsActions = buildAdvertisementsActions;
