import React from "react";

function AssetFinance() {

  return (
    <>
      <section className="section">
        <div className="container"><br/>
          <h3 className="is-size-1 has-text-primary section-title">The WebBank Difference</h3><br/>
          <div className="columns">
            <div className="column is-half"><br/><br/>
              <div className="content">
                <p className="">In WebBank's decades long role as "The Bank Behind the Brand<sup>®</sup>, we have worked
                  with
                  premier non-bank financial technology companies, many of which are now household names, to provide
                  unique specialty finance business models and solutions. Our decades of experience and unparalleled
                  access to leading fintech companies enables us to provide creative solutions to bespoke platforms
                  ranging from VC-backed startups to Fortune 50 companies. Working with WebBank, fintech and specialty
                  finance companies can attain bank-level pricing for structured credit facilities that traditionally
                  have
                  only been provided by much higher cost credit funds and non-bank direct lenders.</p><br/>
                <p>Given our work with diverse specialty finance platforms, we are experts in a wide variety of consumer
                  and SMB asset classes, including equipment-backed finance, unsecured consumer loans (including Buy Now
                  Pay Later), MCA, credit card receivables, supply chain finance, installment loans, and dealer
                  floorplan
                  lines, just to name a few. More importantly, our approach and mindset allow us to tailor customized,
                  asset-based solutions for newer platforms with specialty assets seeking lower cost options as
                  portfolios
                  season.</p><br/>
                <p>Whether you're an entrepreneur with a specialty finance business seeking growth capital greater than
                  $10 million, a broker-dealer advising specialty finance companies on funding options for their
                  receivables, or a credit fund portfolio manager seeking leverage for your existing, asset-based
                  investments, contact us and let's discuss how we can work together.</p>
              </div>
              <br/>
            </div>
            <div className="column"><br/><br/><img src="https://assets.webbank.com/R5_C1616.png" className="body-image"/>
            </div>
          </div>
          <hr/><br/><br/>
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="has-text-centered">
                  <h3 className="is-size-1 has-text-primary section-title">Asset Finance</h3><br/>
                  <p>Asset Finance from WebBank helps customers get the capital they need to finance business
                    growth.</p>
                </div>
                <br/><br/>

                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">First Name</label>
                        <div className="control"><input className="input" type="text" name="first_name"
                                                        placeholder="John"/></div>

                      </div>
                    </div>
                    <div className="column">
                      <div className="field"><label className="label">Last Name</label>
                        <div className="control"><input className="input" type="text" name="last_name"
                                                        placeholder="Doe"/></div>

                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right"><input className="input" type="email"
                                                                                       name="email"
                                                                                       placeholder="me@mycompany.com"/><span
                          className="icon is-small is-left"><i className="fas fa-envelope"
                                                               aria-hidden="true"></i></span></div>

                      </div>
                    </div>
                    <div className="column">
                      <div className="field"><label className="label">Phone</label>
                        <div className="control"><input className="input" type="tel" name="phone"
                                                        placeholder="xxx-xxx-xxxx"/></div>

                      </div>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="field"><label className="label">Company</label>
                        <div className="control"><input className="input" type="text" name="brand_partner"
                                                        placeholder="My Company"/>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="field"><label className="label">Description of Opportunity</label>
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

export default AssetFinance;
