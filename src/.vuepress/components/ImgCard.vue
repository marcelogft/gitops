<template>
     <div class="card"> 
        <img class="imgObj" :src="url" :width="width"/>
        <div class="center">
            <p class="caption">{{ url }}</p> 
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
        width: {
            type: String,
            default: "100",
        },
    }
}
</script>
<style lang="stylus" scoped>
  .imgObj 
    display: block;
    margin-left: auto;
    margin-right: auto;

  .card  
    background: #fff
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    border-radius: 2px
    padding: 1rem
    margin: 1rem 0
    .center
      text-align: center    
      .caption
        font-size: 0.8em
        font-style: italic
        color: #999
        word-break:break-all
</style>