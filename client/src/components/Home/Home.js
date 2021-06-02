import React from "react";
import "./styles.scss";

const Home = () => {
  return (
    <div className="container">
      <img
        className="img"
        src="https://www.theindiaforum.in/sites/default/files/field/image/2019/10/01/Ramkumar%20Radhakrishnan%2C%20Wikimedia-1569929663.jpeg"
        alt="landing-page"
      />
      <div className="text">
        <div>
          Small and marginal farmers play an essential role in driving forward
          India's economy and growth. Despite cultivating nearly 85% of the
          viable land in the country, these farmers are disproportionately
          vulnerable to the effects of climate change, market shifts, and other
          production risks. Too often these farmers fall through the cracks
          unable to access the services they need to increase their incomes and
          prosper.
        </div>
        <div>
          For information about the crops visit the crops tab or &nbsp;
          <a href="/crops">click here</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
