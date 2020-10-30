//db.inventory.drop() sirve para eliminar los datos de la bd, dejandola completamente vacía.
db.personas.drop()

db.personas.insertMany([

    { nombre:"Ariel", edad:23, sexo:"F", altura:1.6 , peso:65.2  },
    { nombre:"Manuel", edad:15, sexo:"M", altura:1.4 , peso:53.2  },
    { nombre:"Natalia", edad:34, sexo:"F", altura:1.8 , peso:64.8  },
    { nombre:"Rafael", edad:67, sexo:"M", altura:1.7 , peso:67.3  },
    { nombre:"Abigail", edad:110, sexo:"F", altura:2 , peso:90.5  },
    { nombre:"Archibaldo", edad:54, sexo:"M", altura:1.7 , peso:103.2  },
 ]);
