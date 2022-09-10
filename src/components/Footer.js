import React from "react";
import {NavLink} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function Footer() {
  return (
    <>
      <footer className="blue-bg">
        <div className="container footer">
          <div className="columns">
            <div className="column is-4">
              <p className="is-size-1 section-title has-text-white">WebBank</p><br></br>
              <p><a href="#">Member FDIC</a> | <a href="#"><span>Equal Housing Lender</span><span className="icon"><i
                className="fa-solid fa-house-chimney"></i></span></a></p><br></br>
              <p><a href="tel:18449942265" className="has-text-white">1-844-994-BANK (2265)</a></p>
              <br></br>
              <p><a href="#"><span className="icon"><i className="fa-brands fa-linkedin-in fa-xl"></i></span></a></p>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <p className="is-size-4">Personal</p>
                  <p className="footer-link"><a href="#" className="">
                    <NavLink to="/pages/personal/BrandPartners">
                      Brand Partners
                    </NavLink>
                  </a>
                  </p>
                  <p className="footer-link"><a href="#" className="">
                    <NavLink to="/pages/personal/DepositProducts"> Deposit Products </NavLink>
                    </a></p>
                </div>
                <div className="column">
                  <p className="is-size-4">Business</p>
                  <p className="footer-link"><a href="#" className="">
                    <NavLink to="/pages/business/BusinessBrandPartners">Brand Partners</NavLink>
                  </a></p>
                  <p className="footer-link"><a href="#" className="">
                    <NavLink to="/pages/business/AssetFinance">
                      Asset Finance
                    </NavLink>
                  </a>
                  </p>
                  <p className="footer-link">
                    <a href="#" className="">
                      <NavLink to="/pages/business/Commercial">
                        Commercial Insurance Premium Finance
                      </NavLink>
                    </a>
                  </p>
                </div>
                <div className="column">
                  <p className="is-size-4">WebBank</p>
                  <p className="footer-link"><a href="#" className="">
                    <NavLink to="/pages/about/AboutWebBank">
                      About Us
                    </NavLink>
                  </a></p>
                  <p className="footer-link"><a href="#" className="">
                    <NavLink to="/pages/about/Leadership">
                      Leadership Team
                    </NavLink>
                    </a></p>
                  <p className="footer-link"><a href="#" className="">
                    <NavLink to="/pages/about/Working">Working at WebBank</NavLink>
                  </a></p>
                  <p className="footer-link"><a href="#" className="">
                      <NavLink to="/pages/about/BusinessAssociations">Business Associations and Memberships</NavLink>
                  </a></p>
                  <p className="footer-link"><a href="#">
                    <NavLink to="/pages/about/NewsRoom">Financial Statement Link</NavLink>
                  </a></p>
                </div>
                <div className="column">
                  <p className="is-size-4">Policies</p>
                  <p className="footer-link"><a href="/pages/footers/uiega.html" className="">UIEGA</a></p>
                  <p className="footer-link"><a href="/pages/footers/us_patriot_act.html" className="">USA PATRIOT
                    Act</a>
                  </p>
                  <p className="footer-link"><a href="#" className=""><NavLink to="/pages/about/Privacy">Privacy</NavLink></a></p>
                  <p className="footer-link"><a href="/pages/footers/terms.html" className="">Terms of Use</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <h2 className="box-title">Your are leaving our site!</h2><br></br>
              <p>You will be linking to another website not owned or operated by WebBank.</p><br></br>
              <p>WebBank is not responsible for the availability or content of this website and does not represent
                either
                the linked website or you, should you enter into a transaction.</p><br></br>
              <p>The inclusion of any hyperlink does not imply any endorsement, investigation, verification or
                monitoring
                by WebBank of any information in any hyperlinked site. We encourage you to review their privacy and
                security policies which may differ from WebBank.</p><br></br>
              <p>If you click "Proceed", the link will open in a new window.</p><br></br>
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
      </footer>
    </>
  );
}

export default Footer;
