const express = require('express');
const router = express.Router();

var banner = {"Venti" : {"name" : "Venti",
"portal" : "Venti's banner",
"link" : "genshinbannerventi",
"imageur" : "/banners/venti.jpg",
"characters" : "Venti, Barbara, Fischl, Xiangling",
"maj" : "1.0",
"release": "9/28/20" , 
"end": "10/18/20",
"previous" : "",
"next" : "http://localhost:3000/Klee"},

"Klee" : {"name" : "Klee",
"portal" : "Klee's banner",
"link" : "genshinbannerklee",
"imageur" : "/banners/Klee.png",
"characters" : "Klee, Sucrose Noelle, Xingqiu",
"maj" : "1.0",
"release": "10/20/20" , 
"end": "11/10/20",
"previous" : "http://localhost:3000/Venti",
"next" : "http://localhost:3000/Tartaglia"},

"Tartaglia" : {"name" : "Tartaglia",
"portal" : "Tartaglia's banner",
"link" : "genshinbannertartaglia",
"imageur" : "/banners/Tartaglia.png",
"characters" : "Tartaglia, Beidou, Diona, Ningguang",
"maj" : "1.1",
"release": "11/11/20" , 
"end": "12/1/20",
"previous" : "http://localhost:3000/Klee",
"next" : "http://localhost:3000/Zhongli"},

"Zhongli" : {"name": "Zhongli",
"portal" : "Zhongli's banner",
"link" : "genshinbannerzhongli",
"imageur" : "/banners/Zhongli.png",
"characters" : "Zhongli, Chongyun, Razor, Xinyan",
"maj" : "1.1",
"release": "12/20/20" , 
"end": "12/22/20",
"previous" : "http://localhost:3000/Tartaglia",
"next" : "http://localhost:3000/Albedo"},

"Albedo" : {"name" : "Albedo",
"portal" : "Albedo's banner",
"link" : "genshinbanneralbedo",
"imageur" : "/banners/Albedo.jpg",
"characters" : "Albedo, Benett, Fischl, Sucrose",
"maj" : "1.2",
"release": "12/23/20" , 
"end": "1/12/21",
"previous" : "http://localhost:3000/Zhongli",
"next" : "http://localhost:3000/Ganyu"},

"Ganyu" : {"name" : "Ganyu",
"portal" : "Ganyu's banner",
"link" : "genshinbannerganyu",
"imageur" : "/banners/Ganyu.jpg",
"characters" : "Ganyu, Noelle, Xiangling, Xingqiu",
"maj" : "1.2",
"release": "1/12/21" , 
"end": "2/2/21",
"previous" : "http://localhost:3000/Albedo",
"next" : "http://localhost:3000/Xiao"},

"Xiao" : {"name" : "Xiao",
"portal" : "Xiao's banner",
"link" : "genshinbannerxiao",
"imageur" : "/banners/Xiao.jpg",
"characters" : "Xiao, Beidou, Diona, Xinyan",
"maj" : "1.3",
"release": "2/3/21" , 
"end": "2/17/21",
"previous" : "http://localhost:3000/Ganyu",
"next" : "http://localhost:3000/Keqing"},

"Keqing" : {"name" : "Keqing",
"portal" : "Keqing's banner",
"link" : "genshinbannerkeqing",
"imageur" : "/banners/Keqing.jpg",
"characters" : "Keqing, Barbara, Benett, Ningguang",
"maj" : "1.3",
"release": "2/17/21" , 
"end": "3/2/21",
"previous" : "http://localhost:3000/Xiao",
"next" : "http://localhost:3000/Hutao"},

"Hutao" : {"name" : "Hutao",
"portal" : "Hu Tao's banner" ,
"link" : "genshinbannerhutao",
"imageur" : "/banners/HuTao.jpg",
"characters" : "Hu Tao, Chongyun, Xiangling, Xingqiu",
"maj" : "1.3",
"release": "3/2/21" , 
"end": "3/16/21",
"previous" : "http://localhost:3000/Keqing",
"next" : ""},

}

router.get('/',  (req, res) => {

    var message = "";
     
    if (req.cookies.tracking){
        var dateLastVisit = req.cookies.tracking;
        var message = "Welcome back, you last visited on :" + dateLastVisit;
    }

    var currentDate = new Date();
    res.cookie('tracking',currentDate.toUTCString());
    res.cookie('track', message)
    
    res.render('genshinmain', { genshinmain: banner });
});

router.get('/:name', (req, res) => {
    var name = req.params.name;
    res.render('banner', { banner: banner[name] })
})



module.exports = router;

