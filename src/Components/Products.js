import React,{Component} from 'react';
export default class Products extends Component {
    render() {
        return(
            
             
              <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
                <div className="pricing-block-content">
                  <h3>{this.props.tuyen}</h3>
                  <p className="pricing-sub"></p>
                  
                
                  <ul>
                    <li>{this.props.km}</li>
                    <li>{this.props.gio}</li>
                    <li>{this.props.giatien}</li>
                  
                  </ul>
                  <a href="#datve" className="button">Đặt ngay</a>
                </div>
                </div>
        )
    }
    }