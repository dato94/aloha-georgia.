import React from "react";
import "./main.scss";

// import icons
import {HiOutlineLocationMarker} from "react-icons/hi";
import {HiOutlineClipboardCheck} from "react-icons/hi";

// import image 
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image10 from "../../assets/image10.jpg";

const Data = [
    {
    id:1,
    imgSrc: image1,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },



    {
    id:2,
    imgSrc: image2,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },



    {
    id:3,
    imgSrc: image3,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },


    
    {
    id:4,
    imgSrc: image4,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },



    {
    id:5,
    imgSrc: image5,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },


    
    {
    id:6,
    imgSrc: image6,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },


    {
    id:7,
    imgSrc: image7,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },


    
    {
    id:8,
    imgSrc: image8,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },


    {
    id:9,
    imgSrc: image9,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    },


    
    {
    id:10,
    imgSrc: image10,
    destTitle: 'Bora Bora',
    location: 'New Zeeland',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. this place is known for its luxurious stays and adventurous activities'
    }, 
    
]


const Main = () => {
    return (
        <section className="main container section">

            <div className="secTitle">
                <h3 className="title">Most visited destinations</h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}
                                    </h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Main;