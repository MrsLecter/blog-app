import React, {useState} from 'react'

export default function ViewToggle({updateView}) {
  const activeText = "uk-button uk-button-default uk-active";
  const nonativeText = "uk-button uk-button-default";

  const [view, setView] = useState("grid");

  function toGridChange(event){    
    setView("grid");
    updateView("grid");
  }

  function toListChange(event){
    setView("list");
    updateView("list");
  }
  return (
    <div className="uk-button-group uk-margin-left">
      <button onClick={toGridChange} className={(view === 'list') ? nonativeText : activeText} >
        <span uk-icon="icon:  grid" />
      </button>
      <button onClick={toListChange} className={(view === 'grid')? nonativeText : activeText}>
        <span uk-icon="icon:  list" />
      </button>
    </div>
  )
}
