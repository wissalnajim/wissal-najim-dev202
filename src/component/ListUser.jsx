import React from 'react',
import {useSelector} from 'react-redux';
export default function ListUser(){
    const Selectedpodts=userSelector(state=>state.posts.selecteddopsts);
    const ListUser = userSelector(state=>state.user.data).filter(item=>item.posts=>selecteddopsts)
    return(
        <div>
            <h1>List de users</h1>
            {ListUser.length!==0 &&
            ListUser.map(item=><h2>{item.name</h2>)
            }
        </div>
    )
}