const { advertisementsActions } = require('../actions');

async function findAll(req, res, next) {
  try {
    const advertisements = await advertisementsActions.findAll();

    res.json({
      status: 'ok',
      data: advertisements,
    });
  } catch (err) {
    next(err);
  }
}

async function findById(req, res, next) {
  try {
    const advertisements = await advertisementsActions.findById({ id: req.params.id });
    res.json({
      status: 'ok',
      data: advertisements,
    });
  } catch (err) {
    next(err);
  }
}

async function insert(req, res, next) {
  try {
    const newAdvertisements = await advertisementsActions.insert({
      ...req.body,
      userId: req.user && req.user.id,
      images: req.files.map((f) => f.path),
      isDeleted: false,
    });

    res.json({
      status: 'ok',
      data: newAdvertisements,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteById(req, res, next) {
  try {
    await advertisementsActions.deleteById({ id: req.params.id });

    res.json({
      status: 'ok',
    });
  } catch (err) {
    next(err);
  }
}

const advertisementsController = {
  findAll,
  findById,
  insert,
  deleteById,
};

exports.advertisementsController = advertisementsController;
