import React, { useRef } from "react";

const AddPlace = () => {
  const nameRef = useRef();
  const locationRef = useRef();
  const attractionRef = useRef();
  const imgRef = useRef();
  const timeRef = useRef();
  const costRef = useRef();
  const besttimeRef = useRef();
  const roadRef = useRef();
  const stayRef = useRef();

  const handleAddPlace = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const location = locationRef.current.value;
    const attraction = attractionRef.current.value;
    const img = imgRef.current.value;
    const time = timeRef.current.value;
    const cost = costRef.current.value;
    const besttime = besttimeRef.current.value;
    const road = roadRef.current.value;
    const stay = stayRef.current.value;

    const place = {
      name,
      img,
      location,
      attraction,
      time,
      cost,
      besttime,
      road,
      stay,
    };

    fetch("http://localhost:4000/places", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(place),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("user added successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div className="App">
      <h1>Add a place</h1>
      <form onSubmit={handleAddPlace}>
        <input
          type="text"
          ref={nameRef}
          placeholder="Name of the Place"
          name="name"
          required
        />
        <br />
        <input type="text" required ref={locationRef} placeholder="Location" />
        <br />
        <input
          type="text"
          ref={attractionRef}
          placeholder="What are the main attractions"
        />
        <br />
        <input type="text" required ref={imgRef} placeholder="ImageURL" />
        <br />
        <input
          type="number"
          required
          ref={timeRef}
          placeholder="Time need to explore"
        />
        <br />
        <input
          type="number"
          required
          ref={costRef}
          placeholder="Estimated Cost"
        />
        <br />
        <input
          type="text"
          required
          ref={besttimeRef}
          placeholder="Best time to go"
        />
        <br />
        <input
          type="text"
          required
          ref={roadRef}
          placeholder="Road condition"
        />
        <br />
        <input
          type="text"
          required
          ref={stayRef}
          placeholder="stay condition"
        />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddPlace;
