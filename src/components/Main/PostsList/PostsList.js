import React from 'react'
import PostItem from './PostItem/PostItem'


export default function PostsList({value, view}) {
  console.log('postList: ' + value);
  
  return (
    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
    {function(){
      let items = [];
        for(let i=0; i < value; i++){
          items.push(<PostItem view={view} key={i}/>);
        }
      return items;
      }()}
      
    </div>
  
  )
}
