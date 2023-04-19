import { useState } from "react";

function List(props) {

  const handleCheckboxChange = (e) => {
    if(e.target.checked) props.handleItemComplete(e.target.dataset.id);
    if(!e.target.checked) props.handleItemIncomplete(e.target.dataset.id);
  }

  const handleDelBtn = (e) => {
    console.log(e.target.id);
    props.handleDeleteItem(e.target.id)
  }

  const [isHover, setisHover] = useState(false);

  const renderList = (item) => {
    console.log(props.items)
    return (
        <li id={item.id} className="d-flex bg-light-subtle rounded p-2 mb-1 list-group-item justify-content-between align-items-center" onMouseEnter={() => setisHover(true)} onMouseLeave={() => setisHover(false)}>
          <div>
            <input id={`item-${item.id}`} data-id={item.id} className="form-check-input me-1" type="checkbox" defaultChecked={item.completed} onChange={handleCheckboxChange}/> 
            <label for={`item-${item.id}`} className={`form-check-label ${item.completed ? 'text-decoration-line-through': 'false'}`}>{item.name}</label>
          </div>
          <span id={item.id} className={`me-2 fs-5 lh-1 text-danger ${isHover ? 'd-inline' : 'd-none'}`} role="button" onClick={handleDelBtn}>×</span>
        </li>
    )
  }

  return (
    <ul className="list-unstyled">
        {props.items.map(renderList)}
    </ul>
  )
}
export default List