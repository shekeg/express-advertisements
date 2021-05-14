const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/images');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toISOString()}-${file.originalname}`);
  },
});

const multerMiddleware = multer({
  storage,
  fileFilter(req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      return callback(new Error('Для загрузки разрешены только картинки (png, jpg, gif, jpeg)'));
    }
    return callback(null, true);
  },
});

exports.multerMiddleware = multerMiddleware;
