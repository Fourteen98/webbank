import React from 'react'

function Commercial() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half"><br/><br/>
              <h3 className="is-size-1 has-text-primary section-title">Learn More About Commercial Insurance Premium
                Financing
              </h3><br/>
              <div className="content">
                <p className="">Commercial Insurance Premium Financing through WebBank's subsidiary, National Partners,
                  helps
                  businesses get the insurance coverage they need while avoiding the high upfront costs of premiums. Our
                  premium finance experts help businesses set up plans that spread out the cost of insurance so they can
                  manage cash flow better and grow.</p><br/><a href="#" className="button is-primary is-large">Visit The
                Website</a>
              </div>
              <br/>
            </div>
            <div className="column"><br/><br/><img src="https://assets.webbank.com/cinsurance.png" className="body-image"/>
            </div>
          </div>
        </div>
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <h2 className="box-title">Your are leaving our site!</h2><br/>
              <p>You will be linking to another website not owned or operated by WebBank.</p><br/>
              <p>WebBank is not responsible for the availability or content of this website and does not represent
                either
                the linked website or you, should you enter into a transaction.</p><br/>
              <p>The inclusion of any hyperlink does not imply any endorsement, investigation, verification or
                monitoring
                by WebBank of any information in any hyperlinked site. We encourage you to review their privacy and
                security policies which may differ from WebBank.</p><br/>
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
      </section>
    </>
  );
}

export default Commercial;
