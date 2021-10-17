var MODEL = (function(){
    var homeContent = `<div class="homePage">
    <div class="hero">
        <div class="hero-image">
            <div class="hero-header">
                <p>Header goes here</p>
            </div>
          <div class="hero-description">
              <p>less important text goes here</p>
          </div>
          <div class="hero-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  <br>
                  Fugiat aliquid minus nemo sed est.</p>
          </div>
          <div class="hero-button">
              <button>Read More</button>
          </div>
        </div>
    </div>

    <div class="home-filter"></div>

    <div class="home-ceo">
        <div class="ceo-quote">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”
      </div>
        <div class="ceo-name">John Smith</div>
        <div class="ceo-business">Corporation CEO, Book's author.</div>
    </div>
    <div class="events-container">
        <div class="events-title">
            <div class="events-titlebox">UPCOMING EVENTS:</div>
        </div>
        <div class="events-specifics">

            <div class="events-boxes">
                <div class="event-date">
                    <h1>06</h1>
                    <p>JUN</p>
                </div>
                <div class="event-text">
                    <h1>Sed et persipiatis unde omnis iste natus</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
                </div>
        </div>
        <div class="events-boxes">
          <div class="event-date">
              <h1>30</h1>
              <p>JUL</p>
          </div>
          <div class="event-text">
              <h1>Sed et persipiatis unde omnis iste natus</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
          </div>
  </div>
  <div class="events-boxes">
      <div class="event-date">
          <h1>30</h1>
          <p>AUG</p>
      </div>
      <div class="event-text">
          <h1>Sed et persipiatis unde omnis iste natus</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
      </div>
</div>
<div class="events-boxes">
  <div class="event-date">
      <h1>23</h1>
      <p>NOV</p>
  </div>
  <div class="event-text">
      <h1>Sed et persipiatis unde omnis iste natus</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
  </div>
</div>
<div class="events-boxes">
<div class="event-date">
  <h1>23</h1>
  <p>DEC</p>
</div>
<div class="event-text">
  <h1>Sed et persipiatis unde omnis iste natus</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
</div>
</div>

  </div>

</div>


</div>`;
    var aboutContent = `<div class="nav-border"></div>

    <div class="about">
<div class="about-photo">
  <div class="photo-container">
      <img src="images/about.jpg" alt="">
  </div>
</div>
<div class="about-title">
  <div class="about-titlebox">OUR HISTORY:</div>
</div>

<div class="about-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </div>
    </div>


  </div>
`;
    var galleryContent = ` <div class="nav-border"></div>
    <div class="gallery">
<div class="gallery-title">
  <div class="gallery-titlebox">GALLERY:</div>
</div>

<div class="gallery-top">
  <div class="left-photo">
      <a id="galleryOne" href="gallery-one.html"><img src="images/gallery/1.png" alt=""></a>
  </div>
  <div class="middle-photo">
      <a id="galleryTwo" href="gallery-two.html"><img src="images/gallery/2.jpeg" alt=""></a>
  </div>
  <div class="right-photo">
      <a id="galleryThree "href="gallery-three.html"><img src="images/gallery/3.jpg" alt=""></a>
  </div>
</div>


<div class="gallery-bottom">
  <div class="bottom-left">
      <a id="galleryFour "href="gallery-four.html"><img src="images/gallery/4.jpg" alt=""></a>
  </div>
  <div class="bottom-right">
      <a id="galleryFive" href="gallery-five.html"><img src="images/gallery/5.png" alt=""></a>
  </div>
</div>
    </div>


  </div>`;
    var blogContent = `<div class="nav-border"></div>
    <div class="blog-main">
<div class="blog-title">
  <div class="blog-titlebox">BLOG:</div>
</div>

<div class="blog-container">
  <div class="blog-left">
      <div class="blog-date">
          <h1>06</h1>
          <p>JUN</p>
      </div>
      <div class="blog-photoContent">
          <div class="blog-photo">
            <a href="blog-one.html"><img src="images/blog.jpg" alt=""></a>
          </div>
          <div class="blog-photoTitle">Sed et persipiatis unde omnis iste natus</div>
          <div class="blog-photoDescription">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
      </div>
  </div>
  <div class="blog-right">
      <div class="blog-date">
          <h1>30</h1>
          <p>JUL</p>
      </div>
      <div class="blog-photoContent">
          <div class="blog-photo">
              <a href="blog-two.html"><img src="images/blog.jpg" alt=""></a>
          </div>
          <div class="blog-photoTitle">Sed et persipiatis unde omnis iste natus</div>
          <div class="blog-photoDescription">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
      </div>

  </div>
</div>

<div class="blog-container">
  <div class="blog-left">
      <div class="blog-date">
          <h1>30</h1>
          <p>AUG</p>
      </div>
      <div class="blog-photoContent">
          <div class="blog-photo">
              <a href="blog-three.html"><img src="images/blog.jpg" alt=""></a>
          </div>
          <div class="blog-photoTitle">Sed et persipiatis unde omnis iste natus</div>
          <div class="blog-photoDescription">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
      </div>
  </div>
  <div class="blog-right">
      <div class="blog-date">
          <h1>23</h1>
          <p>NOV</p>
      </div>
      <div class="blog-photoContent">
          <div class="blog-photo">
              <a href="blog-four.html"><img src="images/blog.jpg" alt=""></a>
          </div>
          <div class="blog-photoTitle">Sed et persipiatis unde omnis iste natus</div>
          <div class="blog-photoDescription">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
      </div>
  </div>
</div>

<div class="blog-container">
  <div class="blog-left">
      <div class="blog-date">
          <h1>23</h1>
          <p>DEC</p>
      </div>
      <div class="blog-photoContent">
          <div class="blog-photo">
              <a href="blog-five.html"><img src="images/blog.jpg" alt=""></a>            </div>
          <div class="blog-photoTitle">Sed et persipiatis unde omnis iste natus</div>
          <div class="blog-photoDescription">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
      </div>
  </div>
</div>

<div class="blog-border"></div>


    </div>


  </div>`;
    var contactContent = `<div class="nav-border"></div>
    <div class="contact">
<div class="contact-title">
  <div class="contact-titlebox">CONTACT:</div>
</div>
<div class="contact-container">
  <div class="contact-form">
      <div class="contact-input">
          <label for="name">Your name...</label>
          <input type="text">
      </div>
      <div class="contact-input">
          <label for="email">Email address...</label>
          <input type="email">
      </div>
      <div class="contact-input">
          <label for="company">Company...</label>
          <input type="email">
      </div>
      <div class="message-input">
          <label for="message">Message...</label>
          <input type="text">
      </div>
      <button>SEND MESSAGE</button>

  </div>
  <div class="contact-map">
      <div class="map-photo">
          <img src="images/map.jpg" alt="">
      </div>
  </div>
</div>
  </div>
</div>`;

    var _changePageContent = function(pageName) {
        let contentName = pageName + "Content";
        $("#app").html(eval(contentName));
    };

    return {
        changePageContent: _changePageContent,
    }

})();