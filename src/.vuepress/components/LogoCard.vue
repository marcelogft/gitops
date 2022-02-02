<template>
     <div class="logocard">
        <div class="logoObj">
          <img :src="url" width="100"/>
        </div>
        <div class="service">
          <a class="caption" :href="service">{{ service }}</a> 
          <p class="description"> {{ description }}</p>
        </div>        
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: '',
        }, 
        service: {
            type: String,
            default: '',
        }, 
        description: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '',
        },
    }
}
</script>
<style scoped>
.logocard {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 5px;
  border-color: #ccc;
}
.logoObj { 
   padding: 15px;
   max-width: 100px;
   min-width: 100px; 

}
.service {
  flex-grow: 2;  
  font-size: 25px;
  text-align: left; 
  margin-top: 20px;  
  padding: 10px;
}
.description { 
  text-align: left; 
  font-size: 15px;
   
}
</style>