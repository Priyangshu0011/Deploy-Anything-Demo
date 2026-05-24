const express = require("express");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { S3Client } = require("@aws-sdk/client-s3");
const cors = require("cors");

const app = express();
app.use(cors());

const s3 = new S3Client({
  region: "ap-south-1",
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "deployx-storage-bucket",
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    imageUrl: req.file.location,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
