import React from "react";

function DepositProducts() {
  return (
    <>
      <section className="hero deposits-hero is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only">
        <div className="hero-body">
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-8">
                  <div className="deposit-products-box">
                    <p className="title hero-title"> Deposit Products </p>
                    <p className="subtitle hero-subtitle"> Help your savings work harder and grow faster with savings
                      products
                      from WebBank. </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="blue-bg is-hidden-widescreen"><img src="https://assets.webbank.com/wb-deposits-hero3.png" alt="deposits"></img>
        <section className="section">
          <div className="container">
            <p className="title hero-title-mobile"> Deposit Products </p>
            <p className="subtitle hero-subtitle-mobile"> Help your savings work harder and grow faster with savings
              products
              from WebBank. </p><br></br>
          </div>
        </section>
      </div>
      <div className="grey-bg">
        <section className="section">
          <div className="container">
            <br></br>
            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child box has-text-centered"><br></br><span className="icon diff-icon"><i
                      className="fa-light fa-badge-dollar fa-4x"></i></span><br></br><br></br>
                      <h4 className="box-title">Certificates of Deposit</h4>
                      <p className="">A certificate of deposit (CD) from WebBank is a great way to set money aside, let
                        it
                        grow with interest earned, and then cash it out at maturity.</p><br></br><a href="/time-deposits"
                                                                                               className="button is-primary">Learn
                      More</a>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box has-text-centered"><br></br><span className="icon diff-icon"><i
                      className="fa-light fa-sack-dollar fa-4x"></i></span><br></br><br></br>
                      <h4 className="box-title">Savings Accounts</h4>
                      <p className="">WebBank savings accounts feature no monthly fee and competitive interest rates to
                        help
                        your money grow faster!</p><br></br><br></br><a href="/savings" className="button is-primary">Learn
                      More</a>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                <div className="tile">
                  <div className="tile is-parent">
                    <article className="tile is-child box has-text-centered"><br></br><span className="icon diff-icon"><i
                      className="fa-light fa-coins fa-4x"></i></span><br></br><br></br>
                      <h4 className="box-title">Rates and Fees</h4>
                      <p className="">Our accounts feature competitive rates and no monthly fees. Check out our rates
                        and fees
                        and see how much more you can save.</p><br></br><a href="/rates-fees" className="button is-primary">Learn
                      More</a>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box has-text-centered"><br></br><span className="icon diff-icon"><i
                      className="fa-light fa-envelope-open-text fa-4x"></i></span><br></br><br></br>
                      <h4 className="box-title">Forms</h4>
                      <p className="">Get access to various forms that simplify managing your deposit account.</p>
                      <br></br><br></br><a
                        href="/forms" className="button is-primary">Learn More</a>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box has-text-centered"><br></br><span className="icon diff-icon"><i
                      className="fa-light fa-building-lock fa-4x"></i></span><br></br><br></br>
                      <h4 className="box-title">Banking Security</h4>
                      <p className="">Protecting your money is paramount. See how WebBank keeps your money safe, and get
                        tips
                        on the best banking practices you can use to stay secure.</p><br></br><a href="/security"
                                                                                            className="button is-primary">Learn
                      More</a>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br></br><br></br>
      </div>
      <section className="hero bottom-hero">
        <div className="hero-body">
          <section className="section">
            <div className="container has-text-centered"><br></br>
              <p className="hero-title"> Let's Talk </p>
              <p className="hero-subtitle"> Reach out to a WebBank Customer Service Representative<br></br>if you have
                questions
                about the products we offer.</p><br></br><a href="/contact-us" className="button is-large is-white">Contact
              an
              Associate</a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default DepositProducts;
