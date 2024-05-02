import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
    const history = useHistory();
    const [newColor, setNewColor] = useState("");

    const handleSubmit = (e) => {
        e.PreventDefault();
        if (newColor.trim()) {
            addColor(newColor);
            setNewColor("");
            history.push(`/colors/${newColor}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>New Color:
                <input type="text"
                       value={newColor} 
                       onChange={(e) => setNewColor(e.target.value)}
                />
            </label>
            <button type="submit">Add</button>
        </form>    
    );
};

export default NewColorForm;