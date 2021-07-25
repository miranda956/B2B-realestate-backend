const express =require("express");
const bodyparser =require("body-parser");
const methodoverride =require("method-override");
const path =require("path");
const winston =require("winston")
const  expresswinston =require("express-winston");
const app =express();
let db =require("./models");

app.use(bodyparser.json());
app.use(methodoverride());
app.use(expresswinston.logger({
    transports:[
        new winston.transports.Console({
            // @ts-ignore
            json:true,
            colirize:true
        }),
        new winston.transports.File({
            filename:'logs/success.log'
        })
    ]
}))
app.use(expresswinston.errorLogger({
    transports:[
        new winston.transports.Console({
            // @ts-ignore
            json:true,
            colorize:true
        }),
        new winston.transports.File({
            filename:"logs/error.log"
        })
    ]
}));
 db.sequelize.sync({force:true}).then(()=>{
    app.listen(6050, function(req, res) {
        console.log('server listening to localhost 6050');
      });
})