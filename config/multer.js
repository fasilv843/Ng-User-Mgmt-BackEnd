const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: ((req, file, cb) => {
        cb(null, path.join(__dirname, '../images'))
    }),
    filename: ((req, file, cb) => {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    })
});

const upload = multer({ storage });

module.exports = upload