import "./Footer.css";

import Aos from "aos";
import "aos/dist/aos.css";

import video from "../../assets/video2.mp4";

import { FaRegPaperPlane } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";
import { useEffect } from "react";

function Footer() {
  const year = new Date().getFullYear();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="video-div">
        <video src={video} autoPlay loop muted typeof="video/mp4"></video>
      </div>

      <div className="sec-content container">
        <div data-aos="fade-up" className="contact-div flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="input-div flex">
            <input type="text" placeholder="Enter your Email" />
            <button className="btn flex" type="sumbit">
              Send <FaRegPaperPlane className="icon" />
            </button>
          </div>
        </div>

        <div className="footer-card flex">
          <div className="footer-top">
            <div data-aos="fade-up" className="footer-intro flex">
              <div className="logo-div">
                <a href="" className="logo flex">
                  <h1>
                    <MdTravelExplore className="icon" /> Travel
                  </h1>
                </a>
              </div>

              <div className="footer-para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis illo ad molestias placeat perferendis quas, aut minus,
                vero sunt fugit rem reiciendis quidem ducimus, alias non enim
                esse nisi corrupti.
              </div>

              <div className="footer-socials">
                <AiFillYoutube className="icon yt" />
                <FaInstagram className="icon insta" />
                <FaFacebookF className="icon fb" />
                <BsTwitter className="icon twi" />
              </div>
            </div>

            <div className="footer-links">
              {/* GROUP 1 */}
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="link-grp"
              >
                <span className="grp-title">OUR AGENCY</span>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </div>

              {/* GROUP 2 */}
              <div
                data-aos="fade-up"
                data-aos-duration="2500"
                className="link-grp"
              >
                <span className="grp-title">PARTERNERs</span>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Hostelworld
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  TripAdviser
                </li>
              </div>

              {/* GROUP 3 */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="link-grp"
              >
                <span className="grp-title">LAST MINUTE</span>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  London
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  California
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>

                <li className="footer-list flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-div">
              <small>
                <MdCopyright className="icon" />
                Copyright {year}. All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
