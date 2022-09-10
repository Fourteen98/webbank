import React from "react";

function ContactUs() {
  return (
    <>
      <section className="hero contact-hero is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
        <div className="hero-body">
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-8 is-offset-4-desktop">
                  <div className="hero-box-right">
                    <p className="title hero-title"> Contact Us </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="hero map-hero is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
        <div className="hero-body">
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-8 is-offset-4-desktop has-text-right">
                  <div className="hero-box-right">
                    <h3 className="title hero-title">Salt Lake City</h3>
                    <address className="is-size-3"> 215 S. State St.<br/> Suite 1000<br/> Salt Lake City, UT 84111
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="blue-bg is-hidden-widescreen"><img src="https://assets.webbank.com/382.png" alt="WebBank Map"
                                                         style={{marginBottom: '-10px'}} /><img
        src="https://assets.webbank.com/wbmap2.png" alt="WebBank Map" />
        <section className="section">
          <div className="blue-bg container">
            <h2 className="title hero-title-mobile">Contact Us</h2>
            <h3 className="box-title has-text-white">Salt Lake City</h3>
            <address className="is-size-5"> 215 S. State St.<br/> Suite 1000<br/> Salt Lake City, UT 84111</address>
          </div>
        </section>
      </div>
      <section className="section">
        <div className="container">
          <div className="has-text-centered">
            <h3 className="is-size-1 has-text-primary section-title">How Can We Help?</h3>
          </div>
          <br/><br/>
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="columns">
                  <div className="column">
                    <div className="field"><label className="label">First Name</label>
                      <div className="control"><input className="input" type="text" placeholder="John"
                                                      name="first_name" /></div>

                    </div>
                  </div>
                  <div className="column">
                    <div className="field"><label className="label">Last Name</label>
                      <div className="control"><input className="input" type="text" placeholder="Doe" name="last_name" />
                      </div>

                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field"><label className="label">Email</label>
                      <div className="control has-icons-left has-icons-right"><input className="input" type="email"
                                                                                     name="email"
                                                                                     placeholder="me@mycompany.com" /><span
                        className="icon is-small is-left"><i className="fas fa-envelope"
                                                             aria-hidden="true"></i></span></div>

                    </div>
                  </div>
                  <div className="column">
                    <div className="field"><label className="label">Phone</label>
                      <div className="control"><input className="input" type="tel" name="phone"
                                                      placeholder="xxx-xxx-xxxx" /></div>

                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <div className="field"><label className="label">Brand Partner</label>
                      <div className="control"><input className="input" type="text" name="brand_partner"
                                                      placeholder="My Company" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field"><label className="label">Message</label>
                  <div className="control"><textarea className="textarea" name="description"
                                                     placeholder="Additional Details">
                            </textarea></div>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
