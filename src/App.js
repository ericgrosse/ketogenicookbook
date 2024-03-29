import React, { Component } from 'react';
import animate from './helpers/animate';

class App extends Component {
  componentDidMount() {
    animate();
  }

  render() {
    return (
      <div className="App">
        <div class="section-1">
          
          <div class="header">
            <span class="cl-effect-1">
              <a class="logo" href="/">Ketogenic Cookbook</a>
            </span>
            
            <div class="menu-icon-container">
              <div class="menu-icon">
                <i class="fa fa-bars"></i>
              </div>
            </div>

            <ul class="cl-effect-4">
              <li><a href="#one">Lorem Diam</a></li>
              <li><a href="#two">Faucibus</a></li>
              <li><a href="#three">Lacinia Tellus</a></li>
              <li><a href="#four">Gravida Nunc</a></li>
              <li><a href="#five">Aliquam</a></li>
            </ul>
          </div>

          <div class="text-overlay">
            <h1>Ketogenic Cookbook</h1>
            <button class="primary" data-toggle="modal" data-target="#myModal">Lorem Ipsum</button>
          </div>

          <img class="desktop" src={require('./images/section-1/background2-resized-optimized.jpg')}alt=""/>
          <img class="mobile" src={require('./images/section-1/background2-mobile-alt.jpg')}alt=""/>
          <img class="mobile-small" src={require('./images/section-1/background2-mobile-alt3.jpg')} alt=""/>
          <div class="img-overlay"></div>
        </div>

        <div id="one" class="section-2 container">
          <div class="inner-container">
            <h1>Vivamus Vitae Sapien Nec Purus Semper Tincidunt. Nullam Nunc Mi, Fermentum Eu</h1>
            <p>Proin tincidunt sed enim vitae viverra. Cras tincidunt finibus arcu a varius. Vivamus vitae sapien nec purus semper tincidunt. Nullam nunc mi, fermentum eu suscipit id, tristique a ipsum. Curabitur eu dui euismod.</p>
            <button class="secondary" data-toggle="modal" data-target="#myModal">Lorem Ipsum</button>
          </div>
        </div>

        <div id="two" class="section-3">
          <div class="image-large">
            <img class="desktop" src={require('./images/section-3/food-1-resized-optimized.jpg')}alt=""/>
            <img class="mobile" src={require('./images/section-3/food-1-mobile.jpg')} alt=""/>
            <div class="img-overlay">
              <div class="text-container">
                <h2> Nulla Ut Finibus Justo</h2>
                <p>Pellentesque feugiat massa tellus, at elementum orci elementum in. Curabitur tortor metus, commodo posuere metus in, ornare posuere justo.</p>
              </div>
            </div>
          </div>
          <div class="image-small" id="img-1">
            <img class="desktop" src={require('./images/section-3/food-2-resized-optimized.jpg')} alt=""/>
            <img class="mobile" src={require('./images/section-3/food-2-mobile.jpg')} alt=""/>
            <div class="img-overlay">
              <div class="text-container">
                <h2>Nam At Pretium Nisi</h2>
                <p>Phasellus dapibus blandit ligula sed ornare. Ut molestie elementum orci.</p>
              </div>
            </div>
          </div>
          <div class="image-small" id="img-2">
            <img class="desktop" src={require('./images/section-3/food-3-resized-optimized.jpg')} alt=""/>
            <img class="mobile" src={require('./images/section-3/food-3-mobile.jpg')} alt=""/>
            <div class="img-overlay">
              <div class="text-container">
                <h2>Ut Ullamcorper Nisl Feugiat</h2>
                <p>Donec accumsan nulla velit, at commodo justo aliquam quis.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="clearfix"></div>

        <div id="three" class="section-4">
          <div class="container">
            <div class="inner-container">
              <h2 class="alt">Nulla facilisi. Etiam vel fringilla diam. Praesent ullamcorper diam in dui accumsan mollis.</h2>
              <button class="tertiary" data-toggle="modal" data-target="#myModal">Lorem Ipsum</button>
            </div>
          </div>
        </div>

        <div id="four" class="section-5">
          <div class="container">
            <ul>
              <li>
                <img src={require('./images/section-5/food-1-resized-optimized.jpg')} alt=""/>
                <h2>Lorem Ipsum</h2>
                <div class="img-overlay">
                  <p>Nec Hendrerit <i class="fa fa-chevron-right"></i></p>
                </div>
              </li>
              <li>
                <img src={require('./images/section-5/food-2-resized-optimized.jpg')} alt=""/>
                <h2>Dolor Amet</h2>
                <div class="img-overlay">
                  <p>Nec Hendrerit <i class="fa fa-chevron-right"></i></p>
                </div>
              </li>
              <li>
                <img src={require('./images/section-5/food-3-resized-optimized.jpg')} alt=""/>
                <h2>Suspendisse</h2>
                <div class="img-overlay">
                  <p>Nec Hendrerit... <i class="fa fa-chevron-right"></i></p>
                </div>
              </li>
              <div class="clearfix"></div>
              <li>
                <img src={require('./images/section-5/food-4-resized-optimized.jpg')} alt=""/>
                <h2>Porttitor</h2>
                <div class="img-overlay">
                  <p>Nec Hendrerit <i class="fa fa-chevron-right"></i></p>
                </div>
              </li>
              <li>
                <img src={require('./images/section-5/food-5-resized-optimized.jpg')} alt=""/>
                <h2>Aenean Dictum</h2>
                <div class="img-overlay">
                  <p>Nec Hendrerit <i class="fa fa-chevron-right"></i></p>
                </div>
              </li>
              <li>
                <img src={require('./images/section-5/food-6-resized-optimized.jpg')} alt=""/>
                <h2>Morbi Consectetur</h2>
                <div class="img-overlay">
                  <p>Nec Hendrerit <i class="fa fa-chevron-right"></i></p>
                </div>
              </li>
              <div class="clearfix"></div>
            </ul>
          </div>
        </div>

        <div id="five" class="section-6">
          <div class="container">

            <div class="container-left">
              <div class="image-left">
                <img class="desktop" src={require('./images/section-6/food-1-resized-optimized.jpg')} alt=""/>
                <img class="mobile" src={require('./images/section-6/food-1-mobile-alt.jpg')} alt=""/>
                <div class="img-overlay"></div>
              </div>

              <div class="content-left">
                <span>11.22.33</span>
                <h1>Phasellus ut feugiat est, vitae elementum felis</h1>
                <p>Quisque mollis dui ac condimentum laoreet. Mauris venenatis lacus</p>
              </div>
            </div>

            <div class="container-right">
              <div class="image-right">
                <img class="desktop" src={require('./images/section-6/food-2-resized-optimized.jpg')} alt=""/>
                <img class="mobile" src={require('./images/section-6/food-2-mobile-alt.jpg')} alt=""/>
                <div class="img-overlay"></div>
              </div>

              <div class="content-right">
                <span>22.33.44</span>
                <h1>Nisi nec ornare consequat</h1>
                <p>Sed quam orci, consectetur non congue et, aliquet et ipsum. Aenean laoreet vulputate</p>
              </div>
            </div>

            <div class="clearfix"></div>

          </div>
        </div>

        <div class="section-7">

        </div>

        <div class="section-8">
          <div class="image-left">
            <img class="desktop" src={require('./images/section-8/food-1-resized-optimized.jpg')} alt=""/>
            <img class="mobile" src={require('./images/section-8/food-1-mobile.jpg')} alt=""/>
            <div class="img-overlay">
              <h2>Gravida Est</h2>
            </div>
          </div>
          <div class="image-right">
            <img class="desktop" src={require('./images/section-8/food-2-resized-optimized.jpg')} alt=""/>
            <img class="mobile" src={require('./images/section-8/food-2-mobile.jpg')} alt=""/>
            <div class="img-overlay">
              <h2>Vivamus Vitae</h2>
            </div>
          </div>
          <div class="clearfix"></div>        
        </div>

        <div class="section-9">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <h2>Lorem Ipsum</h2>
                <p>Dolor Amet</p>
                <p>Consectetur Leo</p>
                <p>Tincidunt condimentum</p>
                <p>Imperdiet Elit</p>
              </div>
              <div class="col-sm-3">
                <h2>Class Aptent</h2>
                <p>Egestas Gravida</p>
                <p>Magna</p>
              </div>
              <div class="col-sm-3">
                <h2>Nullam Quis</h2>
                <p>Donec</p>
                <p>Nam fermentum</p>
                <p class="underline"><a href="#">Elementum</a></p>
              </div>
              <div class="col-sm-3">
                <h2>Titora Torquent</h2>
                <p class="underline"><a href="#">Eros Ac Tempor</a></p>
                <p>Elit</p>
                <p class="social-media">
                  <a href="https://github.com/ericgrosse" class="fa fa-github"></a>
                  <a href="https://www.linkedin.com/in/eric-grosse" class="fa fa-linkedin"></a>
                </p>
              </div>
            </div>
            <p class="copyright">Nulla Luctus 2016 | Quis Sollicitudin Elit</p>
          </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Contact Us</h4>
              </div>
              <div class="modal-body">

                <form>

                  <div class="row">

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" class="form-control" id="" />
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Company</label>
                        <input type="text" class="form-control" id="" />
                      </div>                    
                    </div>

                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Email</label>
                        <input type="text" class="form-control" id="" />
                      </div>
                    </div>
                    
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Subject</label>
                        <input type="text" class="form-control" id="" />
                      </div>                    
                    </div>

                    <div class="col-xs-12">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <textarea type="text" class="form-control" id=""></textarea>
                      </div>          
                    </div>

                  </div>
                  
                  <div class="modal-buttons">
                    <button type="button" class="primary" data-dismiss="modal">Submit</button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
