import React from "react";

function AboutWebBank() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half"><br/><br/>
              <h3 className="is-size-1 has-text-primary section-title">About WebBank</h3><br/>
              <div className="content">
                <p>WebBank (“Bank”) is a Utah chartered industrial bank headquartered in Salt Lake City, Utah. The Bank
                  has originated and funded over $150 billion in consumer and commercial credit products since its
                  inception, helping millions of people and small businesses get affordable credit products.</p>
              </div>
              <br/>
            </div>
            <div className="column"><br/><img src="https://assets.webbank.com/about1.png" className="body-image"/></div>
          </div>
        </div>
      </section>
      <section className="section blue-bg">
        <div className="container">
          <div className="columns">
            <div className="column is-half"><br/><img src="https://assets.webbank.com/about2.png" className="body-image"/>
            </div>
            <div className="column">
              <h3 className="is-size-1 has-text-white section-title">What We Do</h3><br/>
              <div className="content">
                <p>As The Bank Behind the Brand<sup>®</sup>, WebBank is a national issuer of consumer and small business
                  credit products through Strategic Partner (Brand) platforms, which include retailers, manufacturers,
                  finance companies, software as a service (SaaS), and financial technology (fintech) companies. The
                  Bank
                  is a leading player in the digital lending space, driving innovation in financial products through
                  embedded finance with Strategic Partner platforms.</p><br/>
                <p>WebBank engages in a full range of banking activities including consumer and commercial loan
                  products,
                  revolving lines of credit, credit cards, private-label card issuance, auto-refinancing and more.
                  WebBank
                  provides capital in the form of asset-based lending and other credit facilities to Strategic Partner
                  platforms, credit funds, and other lenders with a targeted focus on specialty finance assets. The Bank
                  is also a leading provider of commercial insurance premium finance products through its wholly owned
                  subsidiary, National Partners.</p>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half"><br/><br/>
              <h3 className="is-size-1 has-text-primary section-title">Our Mission</h3><br/>
              <div className="content">
                <p>Empowering fintech strategic partners to drive innovation and financial inclusion. </p>
              </div>
              <br/>
            </div>
            <div className="column"><br/><img src="https://assets.webbank.com/about3.png" className="body-image"/></div>
          </div>
        </div>
      </section>
      <section className="section grey-bg">
        <div className="container">
          <div className="columns">
            <div className="column is-half"><img src="https://assets.webbank.com/2022_webbank_25_100-3.png"
                                                 className="body-image"/></div>
            <div className="column">
              <div className="content">
                <h3 className="is-size-1 has-text-primary section-title">Celebrating 25 Years of Innovation and
                  Financial
                  Inclusion </h3>
                <p>During 2022, WebBank celebrates its 25th year in existence. From its humble beginnings in 1997 when
                  Steel Partners purchased the Bank and capitalized it with $4.5 million of initial shareholders'
                  equity,
                  we have grown into a bank with a diversified customer and product base, growth mindset, and a
                  profitable
                  business model.</p><br/><a href="/our-people" className="button is-primary is-large">Meet Our Team</a>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="has-text-centered">
            <h3 className="is-size-1 has-text-primary section-title">Our Offices</h3>
          </div>
          <br/>
            <div className="columns">
              <div className="column">
                <div className="box">
                  <h3 className="is-size-3 has-text-primary section-title">Salt Lake City, Utah</h3>
                  <address>215 South State Street, Suite 1000<br/>Salt Lake City, UT 84111</address>
                  <p>1-844-994-BANK (2265)</p><br/>
                  <p>9am - 5pm Weekdays<br/> 9am - 1pm Saturday<br/> Closed Sunday</p>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <h3 className="is-size-3 has-text-primary section-title">Summit, New Jersey</h3>
                  <address>25 Deforest Avenue,<br/>Summit, NJ 07901</address>
                  <br/><br/>
                    <p>9am - 5pm Weekdays<br/> 9am - 1pm Saturday<br/> Closed Sunday</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="hero bottom-hero">
        <div className="hero-body">
          <section className="section">
            <div className="container has-text-centered"><br/>
              <p className="hero-title"> Make an Impact Every Day </p>
              <p className="hero-subtitle"> Great benefits? You bet. Flexible workplace? You got it. But we think what
                will
                inspire you the most is a chance to make a difference every day with a company brimming with growth
                opportunities that are there for the taking. </p><br/><a href="/working-at-webbank"
                                                                        className="button is-large is-white">Learn
              More</a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default AboutWebBank;
