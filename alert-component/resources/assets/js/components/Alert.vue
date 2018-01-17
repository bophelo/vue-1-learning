<template>
    <!--in some case the alert should not disappear unless x is clicked-->
    <div :class="`alert alert--${type}`" v-show="show" transition="fade"><!--binding the state of this to that value-->
        <slot></slot>
        <span class="alert--close" v-show="important" @click="show = false">&times;</span>
    </div>
</template>

<script>
    export default {
        props: {
            type: { default : 'info' },
            timeout: { default: 3000 },//make timeout configurable
            important: {
                type : Boolean,
                default : false
            }
        },
        data(){
            return { show: true };
        },//when we are all set to go trigerr a function where we update some kind of state or data property
        mounted() {
            if (! this.important) {
                 setTimeout(
                    () => this.show = false,
                    this.timeout
                )
            }
        }
    }
</script>

<style>
    .alert{
        padding: 10px;
        position: relative;
    }
    .alert--info{
        background-color: lightblue;
    }
    .alert--success{
        background-color: lightgreen;
    }
    .alert--close{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
    .fade-transition{
        transition: opacity .4s ease;
    }
    .fade-leave{
        opacity: 0;
    }
</style>
