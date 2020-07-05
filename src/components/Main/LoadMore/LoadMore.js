import React from 'react'

export default function LoadMore() {
  function handleClick(){

  }
  return (
    <div className="uk-margin">
      <button onClick={handleClick} className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
        Load more
         {/* <div className="uk-margin-small-left" uk-spinner="ratio: 0.6" />*/ }
      </button>
    </div>
  )
}
