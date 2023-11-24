const { MongoClient, ObjectId } = require("mongodb");

// URL de conexión a MongoDB
const url = "mongodb://localhost:27017";

// ID del documento que quieres consultar
const documentoId = "6500f47067d1f98372c06a00"; // ID en formato string

// Conectar a la base de datos
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log("Conexión exitosa a MongoDB");

    const db = client.db("<nombre_bd>"); // Reemplaza '<nombre_bd>' con el nombre de tu base de datos
    const collection = db.collection("usuarios"); // Nombre de la colección

    // Consulta del documento por su ID
    collection
      .findOne({ _id: ObjectId(documentoId) })
      .then((result) => {
        console.log("Documento obtenido:");
        console.log(result);
      })
      .catch((err) => {
        console.error("Error al consultar el documento:", err);
      })
      .finally(() => {
        client.close(); // Cierra la conexión cuando hayas terminado
      });
  })
  .catch((err) => console.error("Error al conectar a MongoDB:", err));
