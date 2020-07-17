import React from "react";
import ReactDOM from "react-dom";
import "./Aboutus.css";


function Aboutus() {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-post">
          <div className="date" />
          <div className="quote">
            <p>This is my first blog entry whilst learning Web Development.</p>
          </div>
          <div className="post">
            <p>
              Over the past few months I have been slowly but surely learning
              front-end web development. I am starting to get more of an
              understanding of how the basics work in React.{" "}
            </p>
          </div>
        </div>
        <hr className="end-of-post" />
        <div className="blog-post">
          <div className="date">
            <p>09.12.19</p>
          </div>
          <div className="quote">
            <p>Moving forward.</p>
          </div>
          <div className="post">
            <p>
              My first official project is this website. I have tried to make it
              as dynamic as possible using React. When the screen size is down
              to that of a tablet/mobile phone the Navigation bar at the top
              dissapears and is replaced by a dropdown button that displays a
              navigation menu, showing links that were originally in the
              navigation bar. I created this dynamic component in React and
              utilizing state. I have also tidied up the css to make things
              slightly more presentable.{" "}
            </p>
          </div>
        </div>
        <hr className="end-of-post" />
        <div className="blog-post">
          <div className="date">
            <p />
          </div>
          <div className="quote">
            <p>Culpa dolor magna nulla mollit eiusmod.</p>
          </div>
          <div className="post">
            <p>
              Aliqua labore qui enim ipsum cillum. Aliquip et deserunt
              consectetur excepteur nostrud dolor voluptate Lorem amet veniam
              labore ea. Sunt est officia minim pariatur quis.
            </p>
          </div>
        </div>
        <hr className="end-of-post" />
        <div className="blog-post">
          <div className="date">
            <p />
          </div>
          <div className="quote">
            <p>Culpa dolor magna nulla mollit eiusmod.</p>
          </div>
          <div className="post">
            <p>
              Aliqua labore qui enim ipsum cillum. Aliquip et deserunt
              consectetur excepteur nostrud dolor voluptate Lorem amet veniam
              labore ea. Sunt est officia minim pariatur quis.
            </p>
          </div>
        </div>
        <hr className="end-of-post" />
        <div className="blog-post">
          <div className="date">
            <p />
          </div>
          <div className="quote">
            <p>Culpa dolor magna nulla mollit eiusmod.</p>
          </div>
          <div className="post">
            <p>
              Aliqua labore qui enim ipsum cillum. Aliquip et deserunt
              consectetur excepteur nostrud dolor voluptate Lorem amet veniam
              labore ea. Sunt est officia minim pariatur quis.
            </p>
          </div>
        </div>
        <hr className="end-of-post" />
        <div className="blog-post">
          <div className="date">
            <p />
          </div>
          <div className="quote">
            <p>Culpa dolor magna nulla mollit eiusmod.</p>
          </div>
          <div className="post">
            <p>
              Aliqua labore qui enim ipsum cillum. Aliquip et deserunt
              consectetur excepteur nostrud dolor voluptate Lorem amet veniam
              labore ea. Sunt est officia minim pariatur quis.
            </p>
          </div>
        </div>
        <hr className="end-of-post" />
        <div className="blog-post">
          <div className="date">
            <p />
          </div>
          <div className="quote">
            <p>Culpa dolor magna nulla mollit eiusmod.</p>
          </div>
          <div className="post">
            <p>
              Aliqua labore qui enim ipsum cillum. Aliquip et deserunt
              consectetur excepteur nostrud dolor voluptate Lorem amet veniam
              labore ea. Sunt est officia minim pariatur quis.
            </p>
          </div>
        </div>
      </div>
      
        <div className="footer">
        <div className="footertext">
            <p>
            <div className="navbar-logo">
              Metal Allies
            </div>
            </p>
            <p>
              Powerpils BV<br></br>
              Residentie Rotzooi<br></br>
              Enschede GP Skyboxlaan 123A<br></br>
              1234 AB Enschede<br></br>
            </p>
            <p>
            info@metal-allies.com<br></br>
            06-123456
            </p>
          </div>
          </div>
    </div>
  );
}

export default Aboutus;
