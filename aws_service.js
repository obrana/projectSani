const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    //TODO: Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: "gB/hat8nsfGUdorF9S/1OHtFoT8stDt6i+ZhgnWK",
    //TODO: Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId: "AKIAJKFVCZLQT7LDWB5A",
    region: 'eu-central-1' // region of your bucket
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3, 
        bucket: 'sammenligne',
        acl: 'public-read',
        // metadata: function (file, cb) {
        //     cb(null, { fieldName: file.fieldname });
        // },
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + file.originalname)
        } 
    }),
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});

module.exports = upload;