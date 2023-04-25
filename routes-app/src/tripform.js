import React {useState} from "react"

export default function TripForm(){



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Subscribe">Subscribe</label>
                <input
                    onChange={(e) => setUserEmail(e.target.value)}
                    value={userEmail}
                    type="text"
                    id="userEmail"
                />
                {/* <input></input>
                <input></input>
                <input></input> */}
            </form>
    </div>
    )
}