import React from 'react';
import { Link } from "react-router-dom";

import styles from "./Cards.module.scss";

const Cards = ({ results, page }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map(({ id, name, image, location, status }) => {
     
       return(
      <Link 
      to={`${page}${id}`}
      key={id} className={`col-6 position-relative`} style={{ marginBottom: '20px'}}>
        <div className={`${styles.cards} d-flex flex-column`}>
        <div className="d-flex"> {/* Container for image and content */}
          <img
            src={image}
            alt=""
            className={`${styles.img} img-fluid`}
            style={{ width: '180px', height: '180px', marginRight: '20px' }} // Adjust width and height as needed
          /> {/* Image */}
            <div className={`${styles.content} text-dark`}>
            <div className="fs-4 fw-bold mb-2">{name}</div>
            <div className="d-flex align-items-center"> {/* Container for status and location */}
            {(()=>{
        if(status === "Dead"){
            return(
                <div className={`${styles.statusCircle}  bg-danger`}>
                   
                </div>
            );
        }
        else if(status === "Alive"){
            return(
                <div className={`${styles.statusCircle}  bg-success`}>
                   
                </div>
            );
        } else {
            return(
                <div className={`${styles.statusCircle}  bg-secondary`}>
                    
                </div>
            );
        }
      })()}
              <div className={`${styles.statusCircle} mr-2`}></div> {/* Status Circle */}
              <div className="fs-6"style={{ marginLeft: '0px' }}>{status}</div> {/* Status Text */}
            </div>
            <div className="fs-6 mt-2">Last location</div>
            <div className="fs-5">{location.name}</div>
          </div>
        </div>
      </div>

    </Link>
    );
   });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Cards;
