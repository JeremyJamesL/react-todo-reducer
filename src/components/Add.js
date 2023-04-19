import { useEffect, useState } from "react";

function Add(props) {

  const [counter, updateCounter] = useState(1);

  const addItem = (e) => {
    e.preventDefault();
    props.handleAddItem({
        id: counter,
        name: e.target.children[0].value,
        completed: false
    })
    updateCounter(counter + 1);
  }


  return (
    <div className="add">
        <form action="" onSubmit={addItem}>
            <input autoFocus type="text" className="mb-3 bg-transparent border-none border-0 shadow-none text-white fs-4" style={{outline: 'none'}}/>
        </form>
    </div>
  )
}
export default Add