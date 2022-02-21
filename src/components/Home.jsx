import useKeypress from 'react-use-keypress';
import {axios} from "axios"

import {react , useState} from "react"


import {useDispatch, useSelector} from "react-redux"

import {addResult}  from "../redux/actions"


export const Home = ()=>{



   const store = useSelector((store)=>store.res)
   const dispatch = useDispatch()
   const [text, setText]= useState("")

 const [search, setsearch] = useState([])
  const [res,setRes]= useState([])

//   const sorting= (nme)=>{
//      const sorted = [...search].sort((a,b)=>{
//         a[nme].toLowerCase() > b[nme].toLowerCase()?1:-1
//      })
   
//   }
  



   let  repo=()=>{
      fetch('https://fast-reef-22226.herokuapp.com/data').then(res=> res.json()).then((data)=>{setsearch(data)
            
      })
   }



   
  
     return (

        <div>
           
           <img src="" alt="" />
           <h1>Search</h1>
          <input   onKeyPress={(e) => {
             setText(e.target.value)
        if(e.key=="Enter"){
            repo()
      
             
        }
      }}  className= "search-box" type="text" />
          
      
        <div>
        <button onClick={()=>{
             
              let sorted= [...search].sort((a,b)=>{
                   if(a.title.toLowerCase()>b.title.toLowerCase()){
                      return 1
                   }
                   return-1
                  
               })
          setsearch(sorted)

        }}>Sort A-Z</button>
        <button onClick={()=>{
             
              let sorted= [...search].sort((a,b)=>{
                   if(a.title.toLowerCase()<b.title.toLowerCase()){
                      return 1
                   }
                   return-1
                  
               })
          setsearch(sorted)

        }}>Sort A-Z</button>



        <button
        onClick={()=>{
             
              let sorted= [...search].sort((a,b)=>{
                   if(a.creation_date.toLowerCase()<b.creation_date.toLowerCase()){
                      return 1
                   }
                   return-1
                  
               })
          setsearch(sorted)

        }}>Sort by date Asc</button>



       <button
           onClick={()=>{
             
              let sorted= [...search].sort((a,b)=>{
                   if(a.creation_date.toLowerCase()<b.creation_date.toLowerCase()){
                      return 1
                   }
                   return-1
                  
               })
          setsearch(sorted)
         

        }}
       
       >Sort by date Dsc</button>




        <button
           onClick={()=>{
             
              let sorted= [...search].sort((a,b)=>{
                   if(a.quality<b.quality){
                      return 1
                   }
                   return-1
                  
               })
          setsearch(sorted)

        }}
        >Sort by Quality</button>

        <button
          onClick={()=>{
             
              let sorted= [...search].sort((a,b)=>{
                   if(a.quality>b.quality){
                      return 1
                   }
                   return-1
                  
               })
          setsearch(sorted)

        }}
        
        
        >Sort by Quality desc</button>
        <button
             onClick={()=>{
             
              let sorted= [...search].sort((a,b)=>{
                   if(a.explicit<b.explicit){
                      return 1
                   }
                   return-1
                  
               })
          setsearch(sorted)

        }}
        
        
        
        >Sort by Explict</button>
          {search.map((e)=>(
             <div key={e.id}>
              <h4>{e.url}</h4>
              <h5>{e.title}</h5>
              <p>{e.description}</p>
              <p>{e.author}</p>
              <h5>{e.creation_date}</h5>
              <p>{e.explicit}</p>
              <p>{e.quality}</p>

     
              
             </div>
            
            
          ))}
        
        
        
        </div>
          
        
        </div>
    


     )


}