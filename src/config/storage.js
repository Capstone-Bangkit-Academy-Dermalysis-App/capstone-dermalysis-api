const { Storage } = require("@google-cloud/storage");
const { PassThrough } = require("stream");
// const fs = require("fs");
// const dateFormat = require("dateformat");
const path = require("path");
require("dotenv").config();

// const pathKey = path.resolve("../serviceaccountkey.json");

// const gcs = new Storage({
//   projectId: process.env.GCP_PROJECT_ID,
//   keyFilename: pathKey,
// });

const gcs = new Storage();

const bucketName =
  process.env.GCS_BUCKET_NAME || "bangkit-capstone-dermalysis-prod";
const bucket = gcs.bucket(bucketName);

const uploadImage = async ({
  bucket,
  folder,
  filename,
  contentType,
  imageBuffer,
}) => {
  try {
    const bufferStream = new PassThrough();
    bufferStream.end(imageBuffer);

    const file = bucket.file(`${folder}/${filename}`); // Hapus garis miring di depan

    const writeStream = file.createWriteStream({
      resumable: false, // Optional: Set to false untuk mengunggah langsung tanpa resume
      metadata: {
        contentType: contentType, // Sesuaikan dengan tipe file Anda
      },
    });

    bufferStream.pipe(writeStream);

    await new Promise((resolve, reject) => {
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });

    console.log("File uploaded successfully");
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Melemparkan error agar bisa ditangkap oleh pemanggil fungsi
  }
};
const uploadPredictionImage = async (bucket, filename) => {};

function getPublicUrl(filename, folder) {
  return (
    "https://storage.googleapis.com/" +
    bucketName +
    "/" +
    folder +
    "/" +
    filename
  );
}

// let ImgUpload = {}

// ImgUpload.uploadToGcs = (req, res, next) => {
//    if (!req.file) return next()

//    const gcsname = dateFormat(new Date(), "yyyymmdd-HHMMss")
//    const file = bucket.file(gcsname)

//    const stream = file.createWriteStream({
//        metadata: {
//            contentType: req.file.mimetype
//        }
//    })

//    stream.on('error', (err) => {
//        req.file.cloudStorageError = err
//        next(err)
//    })

//    stream.on('finish', () => {
//        req.file.cloudStorageObject = gcsname
//        req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
//        next()
//    })

//    stream.end(req.file.buffer)
// }

module.exports = {
  bucket,
  bucketName,
  gcs,
  getPublicUrl,
  uploadPredictionImage,
  uploadImage,
};
