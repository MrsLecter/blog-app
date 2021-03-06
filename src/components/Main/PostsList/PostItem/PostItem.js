import React  from 'react'
//uk-card-default

export default function PostItem({view}) {

  return (
   
    <div className={(view === 'grid') ? "" : "uk-card uk-width-1-1"}>
      <div className= "uk-card uk-card-default uk-margin-medium-bottom uk-card-hover">
        <div className="uk-card-header">
          <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
            Title <a href="/" className="uk-icon-link" uk-icon="heart" />
          </h3>
        </div>
        <div className="uk-card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
        </div>
        <div className="uk-card-footer">
          <a href="post.html" className="uk-button uk-button-text">
            Read more
          </a>
        </div>
      </div>
    </div>

  )
}

