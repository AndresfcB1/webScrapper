const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');

const express = require('express');

const app=express();

var String  =""

for (let i = 2081; i < 2209; i++) {

   String=`${i}`
 
const url=`https://www.baloto.com/resultados-baloto/${String}`
axios(url)
    .then(response=>{
        const html=response.data
        const $=cheerio.load(html)
        const articles=[]
        $('.yellow-ball',html).each(function(){
            const baloto= $(this).text()
       articles.push({
        baloto
       })
       
        })
        console.log(url)
        console.log(articles)


        
    }).catch(err=>console.log("1"))

  
}


app.listen(PORT,()=>console.log(`server running in port${PORT}`))