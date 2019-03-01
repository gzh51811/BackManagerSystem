const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();

router.get('/',async (ctx,next)=>{
    // ctx.body = 'denglu';
    // let {username,password} = ctx.request.body;

    let res = await db.find('user');
    
    res.map(function (item) {
        let date = new Date(parseInt(item.time));
        return item.time = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
    });
    // let arr = JSON.parse(str);
    // console.log(res)
    if(res){
        ctx.body = {
            
            code:0,
            msg:"",
            count:1000,
            data:res
        }
    }else{
        ctx.body = {
            code:100,
            msg:'fail'
        }
    }
    console.log(ctx.body);
});

module.exports = router;