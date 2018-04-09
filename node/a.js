const express=require('express');
const bodyparse = require('body-parser');
const mysql=require('mysql');


const app=express();
const pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:"123456",
	database:'item',
	port:3306
})
app.use(bodyparse.urlencoded({}));

app.post('/detail', function(req,res){
  
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,connection){
    if(err){
      console.log(err)
    }
    var sql=`select * from loupan where id=${req.body.id}`
    connection.query(sql,function(err,data){
	      if(err){
	        console.log(err)
	      }
      res.send(data)
      connection.end()
    })
  })
});

app.post('/add',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*')
	var json=req.body;
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`INSERT INTO loupan (name,price,des,img,fenlei) VALUES (${json.name},${json.price},${json.des},${json.img},${json.fenlei})`,(err)=>{
			if(err) throw err
		})
	})
	res.end()
})
app.post('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	const fenlei=req.body.fenlei;
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`SELECT * FROM loupan WHERE fenlei=${fenlei} LIMIT 0,4`,(err,rows)=>{
			if(err) throw err;
			res.send(rows)
		})
	})
})
app.get('',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query('SELECT * FROM  news',(err,rows)=>{
			if(err) throw err
			res.send(rows);
			res.end()
		})
	})
})
app.post('/lou', function(req, res) {
  
  res.setHeader('Access-Control-Allow-Origin','*')
  pool.getConnection(function(err,connection){
    if(err){
      console.log(err)
    }
    var sql=`select * from news where id=${req.body.id}`
    connection.query(sql,function(err,data){
      if(err){
        console.log(err)
      }
      console.log(data)
      res.send(data)
      
      
      connection.end()
      
      
    })
  })
});

app.listen(8000)