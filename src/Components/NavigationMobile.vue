<template>
<div>
 <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <!-- <h1 class="logo"><a href="index.html">Web & Seo</a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo -->
      <router-link to="/" class="logo"><img src="./apple-touch-icon.png" alt="logo" class="img-fluid"></router-link>

      <nav id="navbar-mobile" class="navbar  navbar-mobile ">
        <ul>
          <router-link class="nav-link scrollto" to="/" tag="li"></router-link>

          <li class="dropdown">
          <router-link  to="#"><span>Quick Start Guide</span> <i class="bi bi-chevron-down"></i></router-link>
            <ul class="dropdown-active">
              <router-link to="/StartBlog" tag="li">Start a Blog</router-link>
              <router-link to="/StartEcommerce" tag="li">Start an E-Commerce</router-link>
             <router-link to="/StartAffiliate" tag="li">Start Affiliate Earning</router-link>
              <router-link to="/DigitalMarketing" tag="li">Start a Digital Marketing Agency</router-link>
            </ul>
          </li>
          
          <router-link class="nav-link scrollto" to="/Blog" tag="li">Blog</router-link>

          <li class="dropdown">
          
          <router-link  to="#"><span>Resources</span> <i class="bi bi-chevron-down"></i></router-link>
            <u class="dropdown-active">
           
              <router-link to="/ReSites" tag="li">Recommended Sites</router-link>
              <router-link to="/Retools" tag="li">Recommended Tools</router-link>
              <router-link to="/Reviews" tag="li">Reviews</router-link>
            </u>
            </li>
        
          <router-link class="nav-link scrollto" to="/Services" tag="li">Services</router-link>
          <router-link class="nav-link scrollto" to="/GetinTouch" tag="li">Get in touch</router-link>

        </ul>
        
       <i class="bi bi-x mobile-nav-toggle">
        
       </i>
      
      </nav>
      <!-- .navbar -->
    </div>
  </header>  <!-- End Header -->
</div>
</template>
<script>

export default {
  

}
</script>
<style scoped>
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
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
  padding: 15px 0;
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

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #124265;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

.mobile-nav-toggle.bi-x {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }
  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 38, 58, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile a {
  padding: 10px 20px;
  font-size: 15px;
  color: #124265;
}

.navbar-mobile a:hover, .navbar-mobile .active, .navbar-mobile li:hover > a {
  color: #2487ce;
}

.navbar-mobile .getstarted {
  margin: 15px;
}

.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li {
  min-width: 200px;
}

.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover, .navbar-mobile .dropdown ul .active:hover, .navbar-mobile .dropdown ul li:hover > a {
  color: #2487ce;
}

.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}
</style>