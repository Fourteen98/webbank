import React from "react";

function BecomePartner() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-5 is-offset-1">
                <br></br>
              <br></br>
              <h3 className="is-size-1 has-text-primary section-title">Explore a Strategic Partnership</h3><br></br>
              <p className="">WebBank is a leading player in the digital lending space, driving innovation in financial
                products through embedded finance with Strategic Partner platforms. We engage in a full range of banking
                activities including consumer and commercial loan products, revolving lines of credit, credit cards,
                private-label card issuance, auto refinancing, and more.</p>
              <br></br>
            </div>
            <div className="column is-5">
              <br></br>
              <img src="https://assets.webbank.com/R5_C1723.png" className="body-image" alt="r5_c1723"></img>
            </div>
          </div>
          <hr></hr>
            <br></br>
            <br></br>
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="has-text-centered">
                  <h3 className="is-size-1 has-text-primary section-title">Let's Work Together</h3><br></br>
                  <p>Interested in learning more about a Strategic Partnership with WebBank? Complete the form and
                    someone
                    from our team will reach out to you to start a conversation. </p>
                </div>
                <br></br>
                <br></br>
                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">First Name</label>
                        <div className="control">
                          <input className="input" type="text" name="first_name" placeholder="John" />
                        </div>

                      </div>
                    </div>
                    <div className="column">
                      <div className="field"><label className="label">Last Name</label>
                        <div className="control">
                          <input className="input" type="text" name="last_name" placeholder="Doe" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                          <input className="input" type="email" name="email" placeholder="me@mycompany.com" />
                          <span className="icon is-small is-left">
                              <i className="fas fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                      </div>
                    </div>
                    <div className="column">
                      <div className="field"><label className="label">Phone</label>
                        <div className="control">
                          <input className="input" type="tel" name="phone" placeholder="xxx-xxx-xxxx" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">Company Name</label>
                        <div className="control">
                          <input className="input" type="text" name="company_name" placeholder="My Company" />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field"><label className="label">Website</label>
                        <div className="control">
                          <input className="input" type="text" name="website" placeholder="htps://mycomapany.com" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">Number of Employees</label>
                        <div className="control">
                          <input className="input" type="number" name="number_employees" placeholder="1" />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field"><label className="label">Years in Business</label>
                        <div className="control">
                          <input className="input" type="number" name="years_in_business" placeholder="1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">Annual Revenue</label>
                        <div className="control has-icons-left has-icons-right">
                          <input className="input" type="tel" name="annual_revenue" placeholder="xxxxxx"/>
                            <span
                            className="icon is-small is-left">
                            <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                          </span>
                          </div>

                      </div>
                    </div>
                    <div className="column">
                      <div className="field"><label className="label">Projected Year-One Product Volume</label>
                        <div className="control">
                          <input className="input" type="number" name="year_one_volume" placeholder="1"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">Amount of Most Recent Capital Raise</label>
                        <div className="control has-icons-left has-icons-right">
                          <input className="input" type="tel" name="recent_capital_amount" placeholder="xxxxxx"/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-dollar-sign" aria-hidden="true">
                          </i>
                          </span>
                          </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="field"><label className="label">Date of Most Recent Capital Raise</label>
                        <div className="control has-icons-left has-icons-right">
                          <input className="input" type="date" name="recent_capital_date" placeholder="mm/dd/yyyy" />
                            <span className="icon is-small is-left">
                              <i className="fas fa-calendar" aria-hidden="true"></i>
                            </span>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="field"><label className="label">Product Stage</label>
                    <div className="control">
                      <div className="select"><select name="product_stage">
                        <option>Choose One...</option>
                        <option value="in_market">In Market</option>
                        <option value="in_testing">In Testing</option>
                        <option value="under_development">Under Development</option>
                      </select></div>
                    </div>
                  </div>
                  <br></br>
                    <div className="field"><label className="label">Description of Opportunity</label>
                      <div className="control"><textarea className="textarea" placeholder="Your message..."
                                                         name="description"></textarea></div>
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
    </div>
);
}

export default BecomePartner;
