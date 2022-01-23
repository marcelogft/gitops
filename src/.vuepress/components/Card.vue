<template>
    <div class="card" @click="go(link)"> 
        <font-awesome-icon class="icon" :icon="icon" />
        <div class="center">
            <h2>{{ title }}</h2>
            <h4>{{ description }}</h4>
             
        </div>
    </div>
</template>

<script>
 
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        }, 
        link: {
            type: String,
            default: '',
        },
    }, 
    methods: {
        go(link) {
            this.$router.push(link);
        }
    }
};
</script>

<style lang="stylus" scoped>
.icon 
    font-size: 3em
    margin-bottom: 0.5em
    margin auto
    color: #d6532f
    flex-basis: 0
    flex-grow: 1

.card
    display flex
    flex-direction column
    flex-wrap wrap
    background: #fff
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    border-radius: 2px
    padding: 1rem
    margin: 1rem 0
    .center
        text-align: center
    cursor pointer
    transition 0.3s

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>