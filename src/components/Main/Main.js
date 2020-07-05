import React, {useState} from 'react'
import FilterBar from './FilterBar/FilterBar'
import PostsList from './PostsList/PostsList'
import LoadMore from './LoadMore/LoadMore'
import Pagination from './Pagination/Pagination'

export default function Main() {
  const [value, setValue] = useState(6);
  const [view, setView] = useState("grid");

  function updateValue(newValue){
    setValue(newValue);
  }

  function updateView(newView){
    setView(newView);
  }
  //console.log("main value:" + value);
  //console.log("main view:" + view);
  return (
    
    <main className="uk-main uk-section uk-container">
      <FilterBar updateValue={updateValue} updateView={updateView}/>
      <PostsList value={value} view={view} />
      <LoadMore value={value}/>
      <Pagination />
    </main>
  )
}
