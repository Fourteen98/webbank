import React from "react";

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
                  <p className="footer-link"><a href="/pages/personal/brand_partners.html" className="">Brand
                    Partners</a>
                  </p>
                  <p className="footer-link"><a href="/pages/personal/deposit-products.html" className="">Deposit
                    Products</a></p>
                </div>
                <div className="column">
                  <p className="is-size-4">Business</p>
                  <p className="footer-link"><a href="/pages/business/business_brand_partners.html" className="">Brand
                    Partners</a></p>
                  <p className="footer-link"><a href="/pages/business/asset_finance.html" className="">Asset Finance</a>
                  </p>
                  <p className="footer-link">
                    <a href=
                         "/pages/business/commercial_insurance_premium_finance.html"

                       className="">Commercial Insurance Premium Finance
                    </a>
                  </p>
                </div>
                <div className="column">
                  <p className="is-size-4">WebBank</p>
                  <p className="footer-link"><a href="/pages/about_us/about_webbank.html" className="">About Us</a></p>
                  <p className="footer-link"><a href="/pages/about_us/leadership_team.html" className="">Leadership
                    Team</a></p>
                  <p className="footer-link"><a href="/pages/about_us/working_at_webbank.html" className="">Working at
                    WebBank</a></p>
                  <p className="footer-link"><a href="/pages/about_us/business_associations.html" className="">Business
                    Associations and
                    Memberships</a></p>
                  <p className="footer-link"><a href="#"> Financial Statement Link </a></p>
                </div>
                <div className="column">
                  <p className="is-size-4">Policies</p>
                  <p className="footer-link"><a href="/pages/footers/uiega.html" className="">UIEGA</a></p>
                  <p className="footer-link"><a href="/pages/footers/us_patriot_act.html" className="">USA PATRIOT
                    Act</a>
                  </p>
                  <p className="footer-link"><a href="/pages/footers/privacy.html" className="">Privacy</a></p>
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
