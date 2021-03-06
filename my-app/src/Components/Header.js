import React, { Component} from 'react';

export default class Header extends React.Component {
    render(){
        return (
                    <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
                      <div id="header" className="nav-collapse">
                        <div className="row clearfix">
                          <div className="col-1">
                            {/*Logo*/}
                            <div id="logo">
                              {/*Logo that is shown on the banner*/}
                              <img src="images/Logo.jpg" id="banner-logo" alt="Landing Page" />
                              {/*End of Banner Logo*/}
                              {/*The Logo that is shown on the sticky Navigation Bar*/}
                              <img src="images/Logo-2.jpg" id="navigation-logo" alt="Landing Page" />
                              {/*End of Navigation Logo*/}
                            </div>
                            {/*End of Logo*/}
                            <aside>
                              {/*Social Icons in Header*/}
                              <ul className="social-icons">
                                <li>
                                  <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                                    <i className="fa fa-facebook fa-1x" /><span>Facebook</span>
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="Google+" href="http://google.com/+username">
                                    <i className="fa fa-google-plus fa-1x" /><span>Google+</span>
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                                    <i className="fa fa-twitter fa-1x" /><span>Twitter</span>
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
                                    <i className="fa fa-instagram fa-1x" /><span>Instagram</span>
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="behance" href="http://www.behance.net">
                                    <i className="fa fa-behance fa-1x" /><span>Behance</span>
                                  </a>
                                </li>
                              </ul>
                              {/*End of Social Icons in Header*/}
                            </aside>
                            {/*Main Navigation*/}
                            <nav id="nav-main">
                              <ul>
                                <li>
                                  <a href="#banner">Trang ch???</a>
                                </li>
                                <li>
                                  <a href="#about">?????t v??</a>
                                </li>
                                <li>
                                  <a href="#gallery">Ki???m tra v??</a>
                                </li>
                                <li>
                                  <a href="#services">H?????ng d???n</a>
                                </li>
                                <li>
                                  <a href="#testimonials">Quy ?????nh</a>
                                </li>
                                <li>
                                  <a href="#clients">V??? ch??ng t??i</a>
                                </li>
                                <li>
                                  <a href="#pricing">Li??n h???</a>
                                </li>
                              </ul>
                            </nav>
                            {/*End of Main Navigation*/}
                            <div id="nav-trigger"><span /></div>
                            <nav id="nav-mobile" />
                          </div>
                        </div>
                      </div>
                      {/*End of Header*/}
                      {/*Banner Content*/}
                      <div id="banner-content" className="row clearfix">
                        <div className="col-38">
                          <div className="section-heading">
                            <h1>MU???N C?? M???T CHUY???N ??I THO???I M??I TH?? LI??N H??? CH??NG T??I</h1>
                            <h2>Ch??ng t??i lu??n s???n s??ng ph??? v??? qu?? kh??ch 24/7 ????? c?? ???????c tr???i nghi???m tuy???t v???i nh???t trong
                              xu???t qu???ng ???????ng</h2>
                          </div>
                          {/*Call to Action*/}
                          <a href="#" className="button">Nh???n ????? ?????t v??
                          </a>
                          {/*End Call to Action*/}
                        </div>
                      </div>
                      {/*End of Row*/}
                    </header>
            )
    }
}