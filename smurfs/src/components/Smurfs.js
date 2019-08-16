import React from "react";

export const Smurfs = ({ smurfs }) => {
    return (
        <div>
            {smurfs.map(smurf => {
                return (
                    <div className="sInfo">
                        <h1>{smurf.name}</h1>
                        <h3>{smurf.age}</h3>
                        <h3>{smurf.height}</h3>
                    </div>
                )
            })}
        </div>
    )
}