import React from 'react';
import './Acceuil.css'
import {Routes, Route} from 'react-router-dom';
import DetailUser from './DetailUser';
import ListUser from './ListUser'
import ListPosts from './ListPosts';


export default function Acceuil() {
  return (
    <div>
    <div className='Acceuil'>Gestion des Posts</div>
  <Routes>
    <Routes exact path='/' element={<ListUser/>}/>
    <Routes path ='/DetailUser/:id' element={<DetailUser/>} />
    <Routes path = '/ListPosts/:id' element={<ListPosts/>}/>
  </Routes>
  </div>
    )
}
