import AWS from 'aws-sdk';
// Configura AWS S3 npm install aws-sdk
const S3_BUCKET = 'bucketpuntarenasfc'; // Cambia esto por el nombre de tu bucket
const REGION = 'us-east-2'; // Cambia esto por la región de tu bucket
const s3 = new AWS.S3({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID, // si usas Vite
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  region: REGION,
});
// Función para subir una imagen a S3
 const uploadImageToS3 = async (file) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: file.name, // Puedes usar un identificador único para evitar sobrescribir archivos
    Body: file,
    ContentType: file.type,
    // ACL: 'public-read', // Se eliminó esta línea para evitar el error de ACL
  };
  return s3.upload(params).promise();
};
export default uploadImageToS3 