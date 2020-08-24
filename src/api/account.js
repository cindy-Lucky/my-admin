import service from "../../src/utils/request";

/**
 * 登录接口
 */

 export function Login(data){
     return service.request({
         url:"/login/",
         method:"post",
         data,//请求类型为post的时候(变量名和传入的值名字是一样的话，就写一个变量名就可以)
         //params:data  //请求类型为get时
     })
 }

 /**
 * 获取验证码
 */

export function GetCode(data){
    return service.request({
        url:"/getSms/",
        method:"post",
        data,//请求类型为post的时候(变量名和传入的值名字是一样的话，就写一个变量名就可以)
        //params:data  //请求类型为get时
    })
}