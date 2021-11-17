import React, { useState, useEffect } from 'react';

const initialPotluck = {
    date:"",
    time: "",
    location: "",
    items: []
};

const PotluckForm = ()=> {
  const [potluck, setPotluck] = useState(initialPotluck);
  const [item, setItem] = useState('');


  const handleCreate = (potluck) => {
    //axios call here
    
    console.log('submitting potluck to backend!', potluck)
}
    const handleChange = (e)=> {
        setPotluck({
            ...potluck,
            [e.target.name]: e.target.value
        })
    }

    const handleItemChange = (e)=> {
      setItem(e.target.value)
    }
    
    const handleItemPush = (e) => {
      setPotluck({
        ...potluck,
        items: [...potluck.items, item]
      })
      console.log(potluck.items)
      setItem('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreate(potluck);
    }



    return(<form onSubmit={handleSubmit}>
        <h3>Create your Potluck!</h3>
        <div>
            <label>Date</label>
            <input value={potluck.date} id="date" name="date" onChange={handleChange}/>
        </div>
        <div>
            <label>Time</label>
            <input value={potluck.time} id="time" name="time" onChange={handleChange}/>
        </div>
        <div>
            <label>Location</label>
            <input value={potluck.location} id="location" name="location" onChange={handleChange}/>
        </div>
        <div>
            <label>Item</label>
            <input value={item} id="item" name="item" onChange={handleItemChange}/>
            <span onClick={handleItemPush}>Add</span>
        </div>
        <div>
          {potluck.items.map(item => {
              return (<div>{item}</div>)
          })}
        </div>
        <button type='submit'>Submit</button>
    </form>);
}

export default PotluckForm;

