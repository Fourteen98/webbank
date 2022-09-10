import React from "react";

function BusinessAssociations() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div className="content"><br/><br/><br/><br/>
                <h3 className="is-size-1 has-text-primary section-title">Business and Community Associations and
                  Memberships
                </h3>
                <p className="">At WebBank, our corporate and community partnerships represent our commitment to
                  strengthen
                  not just our industry but also the communities where we work and live.</p>
              </div>
              <br/>
            </div>
            <div className="column"><br/><br/><br/><br/><img src="https://assets.webbank.com/associations3.png"
                                                         className="body-image" /></div>
          </div>
        </div>
      </section>
      <div className="grey-bg">
        <section className="section">
          <div className="container">
            <div className="has-text-centered">
              <h3 className="is-size-1 has-text-white section-title">Organizations We're Proud to Support</h3><br/>
              <div className="content has-text-left">
                <div className="columns">
                  <div className="column">
                    <ul>
                      <li>American Fintech Council</li>
                      <li>American Bankers Association (ABA)</li>
                      <li>Commercial Finance Association (CFA)</li>
                      <li>Economic Development Corporation of Utah</li>
                      <li>Gettysburg College</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul>
                      <li>Habitat for Humanity</li>
                      <li>Junior Achievement of Utah</li>
                      <li>National Association of Industrial Banks (NAIB)</li>
                      <li>NeighborWorks Salt Lake</li>
                      <li>Salt Lake Valley Habitat for Humanity</li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul>
                      <li>University of Utah/Opportunity Scholars Program</li>
                      <li>Utah Association of CPAs</li>
                      <li>Utah Association of Financial Services (UAFS)</li>
                      <li>Utah Bankers Association (UBA)</li>
                      <li>Utah Community Reinvestment Corporation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br/>
          </div>
        </section>
      </div>
      <section className="hero bottom-hero">
        <div className="hero-body">
          <section className="section">
            <div className="container has-text-centered"><br/>
              <p className="hero-title"> Support for Interests That are Important to You </p>
              <p className="hero-subtitle"> We hire more than just great banking and finance talent. We hire people who
                are
                also great citizens, neighbors, and difference makers. Let's talk about a career at WebBank and about
                how
                we can support interests you have that go beyond the Bank. </p><br/><a href="/contact-us"
                                                                                      className="button is-large is-white">Contact
              Us</a>
            </div>
          </section>
        </div>
      </section>
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <h2 className="box-title">Your are leaving our site!</h2><br/>
            <p>You will be linking to another website not owned or operated by WebBank.</p><br/>
            <p>WebBank is not responsible for the availability or content of this website and does not represent either
              the linked website or you, should you enter into a transaction.</p><br/>
            <p>The inclusion of any hyperlink does not imply any endorsement, investigation, verification or monitoring
              by
              WebBank of any information in any hyperlinked site. We encourage you to review their privacy and security
              policies which may differ from WebBank.</p><br/>
            <p>If you click "Proceed", the link will open in a new window.</p><br/><br/>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Proceed</button>
              </div>
              <div className="control">
                <button className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessAssociations;
