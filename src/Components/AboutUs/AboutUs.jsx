import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Heading Div */}
      <div className="heading-div">
        <h1>Making shopping easier</h1>
        <p>
          De-compras is a shooping app on a mission to build products that level
          the financial playing field.
        </p>
      </div>

      {/* info Div - One  */}
      <div className="info-div-one">
        <div className="info-one">
          <div className="info-one-image-div">
            <img
              src="https://a.cdn-hotels.com/gdcs/production171/d1558/d5250534-92b6-413c-bedf-2b9ac96e96fe.jpg?impolicy=fcrop&w=800&h=533&q=medium"
              alt="about-img"
            />
          </div>
          <div className="info-one-info-div">
            <h2>Fighting for the underdog</h2>{" "}
            <p>
              We started Dave for one reason: banks weren’t built for people
              like us, and we knew we deserved better. Like David slaying
              Goliath, we’re taking on big banks and their predatory ways.
            </p>
          </div>
        </div>
        <div className="info-one">
          <div className="info-one-info-div">
            <h2>Features that work for you</h2>
            <p>
              We give our members what traditional banks won't: ExtraCash™
              advances up to $500,¹ fee-free goal tracking, and Side Hustles
              when you’re behind on your budget.
            </p>
          </div>
          <div className="info-one-image-div">
            <img
              src="https://a.cdn-hotels.com/gdcs/production24/d1082/279d2db2-57d5-4f49-853e-13d5e6790a15.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*  info div - Two */}
      <div className="info-div-two">
        <h1>It all started with overdrafts</h1>
        <p>
          Our first fight was to make overdraft fees a thing of the past by
          spotting members the money they needed, without charging them $38.
          Why? Because it’s the right thing to do.
        </p>
      </div>

      {/*  info div - Three */}
      <div className="info-div-three">
        <h3>Indian's paid $11B in overdraft fees to banks in 2021</h3>
      </div>

      {/* info div - Four */}
      <div className="info-div-four">
        <h2>Our values</h2>
        <p>
          They serve as a compass guiding who we are, how we work, and what
          we’re focused on next.
        </p>
        <div className="inner-info-div-four">
          <div>
            <h3>Member Centric</h3>
            <p>We care deeply about our members.</p>
          </div>
          <div>
            <h3> Helpful</h3>
            <p>Being helpful is part of our DNA.</p>
          </div>
          <div>
            <h3>Transparent</h3>
            <p>We are open, honest, and straightforward.</p>
          </div>
          <div>
            <h3>Persistent</h3>
            <p>We don't give up when things get challenging.</p>
          </div>
          <div>
            <h3>Better together</h3>
            <p>Opportunity exists for everyone at Dave.</p>
          </div>
        </div>
      </div>

      {/* info div - Five */}

      <div className="info-div-five">
        <div className="info-five">
          <div className="info-five-info-div">
            <h2>Join our team</h2>
            <p style={{ fontSize: "25px" }}>
              Help make a difference in improving our members’ relationship with
              money and join our growing team.
            </p>
            <button className="info-five-btn">View Job Openings</button>
          </div>
          <div className="info-five-image-div">
            <img
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGl0JTIwdGVhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
