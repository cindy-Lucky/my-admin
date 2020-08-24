import service from "../../src/utils/request";

/**
 * 
 */

 export function info(data){
     return service.request({
         url:"",
         method:"post",
         data,
     })
 }