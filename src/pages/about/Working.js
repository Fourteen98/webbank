import React from "react";

function Working() {
  return(
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <div className="content"><br/><br/><br/>
                <h3 className="is-size-1 has-text-primary section-title">Great Careers Perfect Balance</h3>
                <p className="">Come see why WebBank has earned the reputation of being the best in the industry.
                  Explore
                  career opportunities at WebBank and discover pathways to success that don't bypass the work-life
                  balance
                  that's as important to us as it is to you.</p>
              </div>
              <br/>
            </div>
            <div className="column"><br/><br/><br/><br/><img src="https://assets.webbank.com/careers1.png"
                                                         className="body-image"/>
            </div>
          </div>
        </div>
      </section>
      <div className="blue-bg">
        <section className="section">
          <div className="container">
            <div className="has-text-centered">
              <h3 className="has-text-white hero-title is-hidden-mobile">Wide-Ranging Benefits</h3>
              <h3 className="is-size-3 has-text-white section-title is-hidden-desktop">Wide-Ranging Benefits</h3>
            </div>
            <br/><br/>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent">
                      <article className="tile is-child box has-text-centered"><br/><br/><span className="icon diff-icon"><i
                        className="fa-light fa-house-heart fa-4x"></i></span><br/><br/>
                        <h4 className="box-title">Flexible Work Options</h4>
                        <p className="is-size-5">Flexible work-from-home opportunities and other hybrid workplace
                          options are
                          available. </p>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child box has-text-centered"><br/><br/><span className="icon diff-icon"><i
                        className="fa-light fa-umbrella-beach fa-4x"></i></span><br/><br/>
                        <h4 className="box-title">Paid Time Off (PTO)</h4>
                        <p className="is-size-5">We offer generous paid time off plus paid parental leave. </p>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child box has-text-centered"><br/><br/><span className="icon diff-icon"><i
                        className="fa-light fa-hand-holding-medical fa-4x"></i></span><br/><br/>
                        <h4 className="box-title">Health Insurance</h4>
                        <p className="is-size-5">Plans include an employer paid medical option, dental and vision
                          coverage, plus
                          we offer health savings accounts.</p>
                      </article>
                    </div>
                  </div>
                  <div className="tile">
                    <div className="tile is-parent">
                      <article className="tile is-child box has-text-centered"><br/><br/><span className="icon diff-icon"><i
                        className="fa-light fa-piggy-bank fa-4x"></i></span><br/><br/>
                        <h4 className="box-title">401(k)</h4>
                        <p className="is-size-5">WebBank matches up to the first 6 percent of employee contributions and
                          both
                          the employee's contributions and WebBank's match are fully vested immediately. </p>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child box has-text-centered"><br/><br/><span className="icon diff-icon"><i
                        className="fa-light fa-hands-holding-dollar fa-4x"></i></span><br/><br/>
                        <h4 className="box-title">Life and Disability Insurance</h4>
                        <p className="is-size-5">Life insurance and long and short-term disability insurance plans are
                          100%
                          employer paid.</p>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child box has-text-centered"><br/><br/><span className="icon diff-icon"><i
                        className="fa-light fa-user-graduate fa-4x"></i></span><br/><br/>
                        <h4 className="box-title">Tuition Reimbursement</h4>
                        <p className="is-size-5">WebBank provides reimbursement for classes needed to obtain certain
                          degrees, up
                          to $5,250 per academic year.</p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <br/><br/>
      </div>
      <section className="section">
        <div className="container has-text-centered"><a href="#"><img alt="Find us on Glassdoor."
                                                                      src="https://www.glassdoor.com.au/api/widget/verticalStarRating.htm?e=307070"/></a><br/><br/><br/><br/><a
          href="#" className="button is-primary is-large">Open Positions</a><br/><br/><br/></div>
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
      <section className="hero bottom-hero">
        <div className="hero-body">
          <section className="section">
            <div className="container has-text-centered"><br/>
              <p className="hero-title"> Reach Out and Get the Full Story </p>
              <p className="hero-subtitle"> From our Diversity Equity &amp; Inclusion initiatives to our referral bonus
                program, there's more to learn about working at WebBank. Get the full story. Find the opening that looks
                right to you and apply today. Let's take the conversation, and your career, to the next level. </p>
              <br/><a
                href="#" className="button is-white is-large">See All Open Jobs</a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Working;
