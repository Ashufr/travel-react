import "./Home.css";

import Aos from "aos"
import "aos/dist/aos.css"

import video from "../../assets/video.mp4";

import { IoLocationSharp } from "react-icons/io5";
import { HiFilter } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useEffect, useState } from "react";

function Home() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  const [data, changeValue] = useState(1000);

  function handleChange(event) {
    changeValue(event.target.value);
  }

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="home-content container">
        <div data-aos="fade-up" className="text-div">
          <h5 className="small-text">Our Packages</h5>
          <h1 className="home-title">Search Your Holiday</h1>
        </div>

        <div data-aos="fade-up" className="card-div grid">
          <div className="dest-input">
            <label htmlFor="city">Search Your Destination :</label>
            <div className="input flex">
              <input type="text" name="city" placeholder="Enter Name here..." />
              <IoLocationSharp className="icon" />
            </div>
          </div>
          <div className="date-input">
            <label htmlFor="date">Choose Your Date :</label>
            <div className="input flex">
              <input type="date" name="date" placeholder="Enter Date here..." />
            </div>
          </div>
          <div className="price-input">
            <div className="label-total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total"> ${data}</h3>
            </div>
            <div className="input flex">
              <input className="range" type="range" max="5000" min="500" value={data} onChange={handleChange} />
              {/* <input type="range" max="5000" min="1000" className="range"/> */}
            </div>
          </div>
          <div className="search-option flex">
            <HiFilter className="icon" />
            <span>More Filters</span>
          </div>
        </div>

        <div data-aos="fade-up" className="home-footer-icons flex">
          <div className="right-icons">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <BsTwitter className="icon" />
          </div>
          <div className="left-icons">
            <AiOutlineUnorderedList className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
