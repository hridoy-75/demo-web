<template>
    <nav id="navbar" class="navbar navbar-mobile">
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
            <ul class="dropdown-active">
              <router-link to="/ReSites" tag="li">Recommended Sites</router-link>
              <router-link to="/Retools" tag="li">Recommended Tools</router-link>
              <router-link to="/Reviews" tag="li">Reviews</router-link>
            </ul>
            </li>
        
          <router-link class="nav-link scrollto" to="/Services" tag="li">Services</router-link>
          <router-link class="nav-link scrollto" to="/GetinTouch" tag="li">Get in touch</router-link>
         
           

        </ul> <i class="bi bi-x mobile-nav-toggle "></i>
        </nav> 
        
</template>