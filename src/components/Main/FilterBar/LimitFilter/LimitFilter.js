import React, {useState} from 'react'

/*
export default function LimitFilter() {
  return (
    <select className="uk-select uk-width-small uk-margin-left">
      <option value={5}>6</option>
      <option value={10}>12</option>
      <option value={20}>24</option>
    </select>
  )
}
*/

export default function LimitFilter({updateValue}) {
  const [value, setValue] = useState(6);

  function handleChange(event){
    //console.log(event.target.value);
    setValue( event.target.value);
    updateValue(event.target.value);
 
  }

  return (
    <select value={value} onChange={handleChange}  className="uk-select uk-width-small uk-margin-left">
      <option value={6}>6</option>
      <option value={12}>12</option>
      <option value={24}>24</option>
    </select>
  )
}

