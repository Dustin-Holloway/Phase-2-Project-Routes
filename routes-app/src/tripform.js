import React, {useState} from "react"

export default function TripForm(){


    const [addNotes, setAddNotes] = useState("");

    function handleSubmit(e) {
      e.preventDefault();
      console.log(e.target.addNotes.value);
    }
    const [addToList, setAddToList] = useState(false)
    function handleClick(e) {
        e.preventDefault();
        console.log("clicked")
    }

    return (
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <label htmlFor="addnotes">Add Notes</label>
          <input
            onChange={(e) => setAddNotes(e.target.value)}
            value={addNotes}
            type="text"
            id="addNotes"
          />
          <label htmlFor="addtolist">Add To My List</label>
          <input
            onClick={(e) => setAddToList(e.target.clicked)}
            type="checkbox"
            value={addToList}
          />
          {/* 
                <input></input>
                <input></input> */}
        </form>
      </div>
    );
}