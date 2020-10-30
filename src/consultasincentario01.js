//Todos los documentos de la colección personas
db.personas.find( {} ) 

//Todos lo documetnos de la coleccion personas presentados con otra estructura
db.personas.find( {} ).pretty()

//El numero de documentos de la coleccion personas que cumplen con los criterios de busqueda
db.personas.find( {/*<criterio de busqueda>*/} ).count()

//Las personas que miden entre 1.6 y 1.8 {usando un and implicito}
db.personas.find( { altura: { $gte: 1.60, $lte:1.80 } } )

//Las mujeres que tienen una altura de 1.6m {usando un and explicito}
db.personas.find( { $and: [ { altura:{ $eq: 1.6  } }, { sexo:  { $eq:"F" } } ] } )

/*Todas las personas cuya edad sea mayor o igual que 20 pero menor o igual que 50
  (no funciona ya que usa el mismo campo con and implicito)*/
db.personas.find( {edad: {$gte:20}, edad: {$lte: 50} } )

//Mismos criterios de busqueda que en el anterior pero en este caso usamos un and explícito (en este caso si funciona)
db.personas.find( {$and: [ {edad:{ $gte:20, $lte:50 },} ]} )

//Todas las personas que no sean mujeres {usando un ne}
db.personas.find( { sexo: {$ne:"F"} })

//Todas las personas que miden 1.6 o son mujeres {usando un or}
db.personas.find( { $or: [  { altura: 1.4 }, { sexo:"F"  } ] } )

//Todas las personas cuyo nombre empiece por A {usando un $regrex}
db.personas.find( {nombre: {$regex: /^A/  } } )