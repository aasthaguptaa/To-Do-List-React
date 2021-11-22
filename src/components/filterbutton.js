import React from "react";

function FilterButton(props) {
  return (<>
    <button type="button" className="taskbtn" onClick={() => props.setFilter(props.name)}>
      Show {props.name} Tasks
    </button>
     </>
  );
}

export default FilterButton;