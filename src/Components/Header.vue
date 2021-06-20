<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
<div class="container">
<nav class="navbar navbar-expand-lg navbar-light ">
  <router-link class="navbar-brand" to="/"><img src="./apple-touch-icon.png"  alt="logo" height="40"> </router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav 
    ml-auto">
     
        
        <router-link tag="li" class="nav-item nav-link" to="/"><span class="sr-only"></span></router-link>
       
     
        <li class="nav-item  dropdown pr-3">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Quick Start Guide
        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown"><li>
          <a class="dropdown-item" href="/StartBlog">Start a Blog</a>
          <a class="dropdown-item" href="/StartEcommerce">Start an E-Commerce</a>
          
          <a class="dropdown-item" href="/StartAffiliate">Start Affiliate Earning</a>
           
           <a class="dropdown-item" href="/DigitalMarketing">Start a Digital Marketing Agency</a></li>

        </div>
                        
                    </li>
                  
       <li class="nav-item"><a class=" nav-link pr-3 scrollto" href="https://blog.webandseo.org/" target="_blank">Blog</a></li>
       
        <li class="nav-item pr-3 dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Resources
        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/ReSites">Recommended Sites</a>
          <a class="dropdown-item" href="/Retools">Recommended Tools</a>
        
          <a class="dropdown-item" href="/Reviews">Reviews</a>
        </div>
        </li>
       <li class="nav-item pr-3">
        <a class="nav-link" href="/Services">Services</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/GetinTouch">Get In Touch</a>
      </li>

    
     
    </ul>
   
  </div>
  
</nav>
</div>
    
    </div>
  </header>


</template>
<style scoped>
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
  font-size: 18px;
}

a {
  color: #2487ce;
  text-decoration: none;
}

a:hover {
  color: #469fdf;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Raleway", sans-serif;
}
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  background: #fff;
  z-index: 997;
  padding: 7px 0;
font-size: 20px;
 border-bottom: 1px solid #e6f2fb;
}

#header.header-scrolled {
  border-color: #fff;
  box-shadow: 0px 2px 15px rgba(18, 66, 101, 0.08);
}


#header .logo {
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 300;
  letter-spacing: 0.5px;
  font-family: "Poppins", sans-serif;
}

#header .logo a {
  color: #16507b;
}

#header .logo img {
  max-height: 40px;
}

@media (max-width: 992px) {
  #header .logo {
    font-size: 28px;
  }
}
.navbar {
  padding: 0;
}

.navbar-nav .navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar-nav li {
  position: relative;
}

.navbar .navbar-nav a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 14px;
  color: #16507b;
  white-space: nowrap;
  transition: 0.3s;
}

.navbar .navbar-nav a i {
  font-size: 18px;
  line-height: 0;
  margin-left: 5px;
}

.navbar .nav-item  a:hover, .navbar .active, .navbar li:hover > a {
  color: #2487ce;
}

.navbar .getstarted {
  background: #2487ce;
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 4px;
  color: #fff;
}

.navbar .getstarted:hover {
  color: #fff;
  background: #3194db;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  text-transform: none;
}

.navbar div .dropdown ul a i {
  font-size: 19px;
}

.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #2487ce;
}

.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}


</style>



