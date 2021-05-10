import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

export default async function handler (req, res) {
  aws.config.update({
    secretAccessKey: process.env.SECRETACCESSKEY,
    accessKeyId: process.env.ACCESSKEYID,
    region: process.env.REGION
  });

  const s3 = new aws.S3();

  const upload = await s3.createPresignedPost({
    Bucket: process.env.BUCKET_NAME,
    Fields: {
      key: req.query.file,
    },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 10048576], // up to 1 MB
    ],

  });

  res.status(200).json(upload);

}