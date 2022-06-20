import React, { Component} from 'react';

export default class SearchBus extends React.Component {
    render(){
        return (
            <main id="content">
            {/*Introduction*/}
            <section id="about" className="introduction scrollto">
              <div className="row clearfix">
                <div className="col-3">
                  <div className="section-heading">
                    <h3>THÀNH CÔNG</h3>
                    <h2 className="section-title">ĐỐI VỚI CHÚNG TÔI CHẤT LƯỢNG LÀ DANH DỰ</h2>
                    <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                  </div>
                </div>
                <div className="col-2-3">
                  {/*Icon Block*/}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                    {/*Icon*/}
                    <div className="icon">
                      <i className="fa fa-html5 fa-2x" />
                    </div>
                    {/*Icon Block Description*/}
                    <div className="icon-block-description">
                      <h4>Hơn 20 triệu lượt khách</h4>
                      <p>Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis
                        choro
                        neglegentur iudico</p>
                    </div>
                  </div>
                  {/*End of Icon Block*/}
                  {/*Icon Block*/}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                    {/*Icon*/}
                    <div className="icon">
                      <i className="fa fa-bolt fa-2x" />
                    </div>
                    {/*Icon Block Description*/}
                    <div className="icon-block-description">
                      <h4>Hơn 250 phòng vé, phòng khách</h4>
                      <p>Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit
                        detracto mediocrem disputationi</p>
                    </div>
                  </div>
                  {/*End of Icon Block*/}
                  {/*Icon Block*/}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                    {/*Icon*/}
                    <div className="icon">
                      <i className="fa fa-tablet fa-2x" />
                    </div>
                    {/*Icon Block Description*/}
                    <div className="icon-block-description">
                      <h4>Hơn 1,600 chuyến mỗi ngày</h4>
                      <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an
                        pro
                        nemore vivendum</p>
                    </div>
                  </div>
                  {/*End of Icon Block*/}
                  {/*Icon Block*/}
                  <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
                    {/*Icon*/}
                    <div className="icon">
                      <i className="fa fa-rocket fa-2x" />
                    </div>
                    {/*Icon Block Description*/}
                    <div className="icon-block-description">
                      <h4>An toàn trước tốc độ sau</h4>
                      <p>Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an
                        pro
                        nemore vivendum</p>
                    </div>
                  </div>
                  {/*End of Icon Block*/}
                </div>
              </div>
            </section>
            {/*End of Introduction*/}
            <form className="row text-center clearfix w3-container w3-card-4 scrollto">
              <div className="section-heading">
                <h2 className="section-title">Vui lòng đặt vé cho chuyến đi của bạn</h2>
              </div>
              <div>
                <input className="w3-radio" type="radio" name="gender" defaultValue="male" defaultChecked />
                <label>Một chiều</label>
                <input className="w3-radio" type="radio" name="gender" defaultValue="female" />
                <label>Khứ hồi</label>
              </div>
              <br />
              <div className="w3-half">
                <label>Điểm đi</label>
                {/* <input class="w3-input w3-border" type="text" placeholder="Điểm đi"> */}
                <select className="w3-select w3-border" name="option">
                  <option value disabled selected>Điểm đi</option>
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                  <option value={3}>Option 3</option>
                </select>
              </div>
              <div className="w3-half">
                <label>Điểm đến</label>
                {/* <input class="w3-input w3-border" type="text" placeholder="Điểm đến"> */}
                <select className="w3-select w3-border" name="option">
                  <option value disabled selected>Điểm đến</option>
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                  <option value={3}>Option 3</option>
                </select>
              </div>
              <div className="w3-half">
                <label>Ngày đi</label>
                <input className="w3-input w3-border" type="date" placeholder="Ngày đi" />
              </div>
              <div className="w3-half">
                <label>Ngày đến</label>
                <input className="w3-input w3-border" type="text" placeholder="Ngày đến" />
              </div>
            </form>
            {/*Gallery*/}
            {/* <aside id="gallery" class="row text-center scrollto clearfix" data-featherlight-gallery
                    data-featherlight-filter="a">
    
                    
    
                </aside> */}
            {/*End of Gallery*/}
            {/*Content Section*/}
            <div id="services" className="scrollto clearfix">
              <div className="row no-padding-bottom clearfix">
                {/*Content Left Side*/}
                <div className="col-3">
                  {/*User Testimonial*/}
                  <blockquote className="testimonial text-right bigtest">
                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      ut
                      labore
                      et dolore magna aliqua</q>
                    <footer>— John Doe, Happy Customer</footer>
                  </blockquote>
                  {/* End of Testimonial*/}
                </div>
                {/*End Content Left Side*/}
                {/*Content of the Right Side*/}
                <div className="col-3">
                  <div className="section-heading">
                    <h3>BELIEVING</h3>
                    <h2 className="section-title">Focusing On What Matters Most</h2>
                    <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                  </div>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                    vitae
                    dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!
                  </p>
                  {/* Just replace the Video ID "UYJ5IjBRlW8" with the ID of your video on YouTube (Found within the URL) */}
                  <a href="#" data-videoid="UYJ5IjBRlW8" data-videosite="youtube" className="button video link-lightbox">
                    WATCH VIDEO <i className="fa fa-play" aria-hidden="true" />
                  </a>
                </div>
                {/*End Content Right Side*/}
                <div className="col-3">
                  <img src="images/dancer.jpg" alt="Dancer" />
                </div>
              </div>
            </div>
            {/*End of Content Section*/}
            {/*Testimonials*/}
            <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">
              <div className="row clearfix">
                <div className="section-heading">
                  <h3>Nhận xét</h3>
                  <h2 className="section-title">Khách hàng nói về chúng tôi như thê nào</h2>
                </div>
                {/*User Testimonial*/}
                <blockquote className="col-3 testimonial classic">
                  <img src="images/user-images/user-1.jpg" alt="User" />
                  <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua</q>
                  <footer>John Doe - Happy Customer</footer>
                </blockquote>
                {/* End of Testimonial*/}
                {/*User Testimonial*/}
                <blockquote className="col-3 testimonial classic">
                  <img src="images/user-images/user-2.jpg" alt="User" />
                  <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua</q>
                  <footer>Roslyn Doe - Happy Customer</footer>
                </blockquote>
                {/* End of Testimonial*/}
                {/*User Testimonial*/}
                <blockquote className="col-3 testimonial classic">
                  <img src="images/user-images/user-3.jpg" alt="User" />
                  <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore
                    et dolore magna aliqua</q>
                  <footer>Thomas Doe - Happy Customer</footer>
                </blockquote>
                {/* End of Testimonial*/}
              </div>
            </aside>
            {/*End of Testimonials*/}
            {/*Clients*/}
            <section id="clients" className="scrollto clearfix">
              <div className="row clearfix">
                <div className="col-3">
                  <div className="section-heading">
                    <h3>TRUST</h3>
                    <h2 className="section-title">Companies who use our services</h2>
                    <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
                  </div>
                </div>
                <div className="col-2-3">
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo1.png" alt="Company" />
                    <div className="client-overlay"><span>Tree</span></div>
                  </a>
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo2.png" alt="Company" />
                    <div className="client-overlay"><span>Fingerprint</span></div>
                  </a>
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo3.png" alt="Company" />
                    <div className="client-overlay"><span>The Man</span></div>
                  </a>
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo4.png" alt="Company" />
                    <div className="client-overlay"><span>Mustache</span></div>
                  </a>
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo5.png" alt="Company" />
                    <div className="client-overlay"><span>Goat</span></div>
                  </a>
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo6.png" alt="Company" />
                    <div className="client-overlay"><span>Justice</span></div>
                  </a>
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo7.png" alt="Company" />
                    <div className="client-overlay"><span>Ball</span></div>
                  </a>
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo8.png" alt="Company" />
                    <div className="client-overlay"><span>Cold</span></div>
                  </a>
                  <a href="#" className="col-3">
                    <img src="images/company-images/company-logo9.png" alt="Company" />
                    <div className="client-overlay"><span>Cold</span></div>
                  </a>
                </div>
              </div>
            </section>
            {/*End of Clients*/}
            {/*Pricing Tables*/}
            <section id="pricing" className="secondary-color text-center scrollto clearfix ">
              <div className="row clearfix">
                <div className="section-heading">
                  <h3>Sự lựa chọn hàng đầu cho bạn</h3>
                  <h2 className="section-title">Các chuyến xe nổi bật</h2>
                </div>
                {/*Pricing Block*/}
                <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="pricing-block-content">
                    <h3>Sài gòn đến Hồ Chí Minh</h3>
                    <p className="pricing-sub">The standard version</p>
                    <div className="pricing">
                      <div className="price"><span>$</span>250</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <ul>
                      <li>5 Downloads</li>
                      <li>2 Extensions</li>
                      <li>Tutorials</li>
                      <li>Forum Support</li>
                      <li>1 year free updates</li>
                    </ul>
                    <a href="#" className="button">BUY TODAY</a>
                  </div>
                </div>
                {/*End Pricing Block*/}
                {/*Pricing Block*/}
                <div className="pricing-block featured col-3 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="pricing-block-content">
                    <h3>Student</h3>
                    <p className="pricing-sub">Most popular choice</p>
                    <div className="pricing">
                      <div className="price"><span>$</span>29</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <ul>
                      <li>15 Downloads</li>
                      <li>5 Extensions</li>
                      <li>Tutorials with Files</li>
                      <li>Forum Support</li>
                      <li>2 years free updates</li>
                    </ul>
                    <a href="#" className="button">BUY TODAY</a>
                  </div>
                </div>
                {/*End Pricing Block*/}
                {/*Pricing Block*/}
                <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="pricing-block-content">
                    <h3>Business</h3>
                    <p className="pricing-sub">For the whole team</p>
                    <div className="pricing">
                      <div className="price"><span>$</span>49</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <ul>
                      <li>Unlimited Downloads</li>
                      <li>Unlimited Extensions</li>
                      <li>HD Video Tutorials</li>
                      <li>Chat Support</li>
                      <li>Lifetime free updates</li>
                    </ul>
                    <a href="#" className="button">BUY TODAY</a>
                  </div>
                </div>
                {/*End Pricing Block*/}
              </div>
            </section>
            {/*End of Pricing Tables*/}
          </main>
        )
    }
}