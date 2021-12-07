const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'proyecto'
})

conection.connect((err) =>{
    if(err) throw err
    console.log("La conexion funciona")
})


conection.query('SELECT * FROM `getStarted` ORDER BY `texto` ASC',(err, rows) =>{
    if(err) throw err
    console.log('los datos de la tabla son estos:')
    console.log(rows)
})



conection.end()