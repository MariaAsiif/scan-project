import React,{useState,useEffect} from 'react';
import axios from 'axios'

export default function Message() {
    const [result,setResult]=useState(null)

    const message =async()=>{
        try{
            let res=await axios.get('http://127.0.0.1:8000/');
            let result=res.data;
            setResult(result);
        }catch(e){
            console.log(e)
        }
    };


    useEffect(()=>{
        message()
},[])

    return( 
            <div>
                {result}
            </div>
    )
}
