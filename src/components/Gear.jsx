import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Gear = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://razer-api.onrender.com/devices')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const newGear = data.filter((el) => el.category === 'Gear');
  return (
    <>
      <h1 id="gear" className="category">
        GEAR BY RAZER
      </h1>
      <div className="mice-parent">
        {newGear?.map((el) => {
          return (
            <div key={el._id}>
              <div className="mice-children" key={el.id}>
                <img src={el.image} alt={el.name} />
                <div className="mice-body">
                  <h3>{el.name}</h3>
                  <br />
                  <p>{el.desc}</p>
                  <div className="mice-footer">
                    <h5>US${el.price}</h5>
                    <button>BUY</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gear;
