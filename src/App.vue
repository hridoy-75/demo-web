<template>
 <div>
 
 <compHeader />
 <router-view></router-view>

   <compFooter/>
 <compbacktotop/>
 
 </div>
</template>

<script>
import compHeader from './Components/Header'
import compFooter from './Components/Footer'
import compbacktotop from './Components/Backtotop'

export default {
  
 
  components: 
   {
      compHeader,
    
      compFooter,
      compbacktotop
  }
  
};
</script>

<style>
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

#navigation-icon {
  padding:10px 10px 20px;
  margin-right:10px;
  cursor: pointer;

 
}
i{
font-size:2rem; 
}

</style>
