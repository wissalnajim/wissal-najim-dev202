import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import redux from './redux/Listposts';

const Listposts = () =>{
    const [posts,setposts] = useState([]);
}
useEffect(()=>{
    async () =>{
        const res = await axios.get('https://dummyjson.com/posts')
        return res;
    }  
})

