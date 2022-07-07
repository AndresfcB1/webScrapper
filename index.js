const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');

const express = require('express');

const app=express();

var String  =""

for (let i = 20; i < 23; i++) {

    for (let j = 1;  j< 12; j++) {
    if(j<10)
    {
        String=`${i}`+"0"
    }
    String=String+`${j}`
 
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
        console.log(String+`${j}`)
        console.log(articles)
'mt-5 border-right-blue mobile-without-margin'

        
    }).catch()

    String  =`${i}`
}
}

app.listen(PORT,()=>console.log(`server running in port${PORT}`))