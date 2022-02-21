
import {ADD_RESULT} from "./actionTypes"

const init={
    res:[]
}

export const Reducer=(store=init,{type,payload})=>{
  switch (type) {
      case ADD_RESULT:
      return {...store , res:[...store.res,payload]}
          
         
  
      default:
      return  {...store}
  }





}