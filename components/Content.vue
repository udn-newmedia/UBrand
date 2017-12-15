<template>
    <div :style="{backgroundColor: backgroundColor}">
        <div class="container content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ['background-color']
}
</script>

<style scoped>
    h1{
        font-size: 45px;
    }

    h2{
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        margin: 0;
    }
    .chart-title{
        font-size: 28px;
    }
    p,a{
        font-size: 21px;
        margin: 0;
    }
    .img-say{
        font-size: 17px;
        color: gray;
        margin-top: 5px;
    }
    .row{
        margin: 0;
    }
    .col-sm-12, .col-sm-6{
        padding: 0;
    }
    @media screen and (max-width: 767px){
        .container{
            width: 334px;
            padding: 0;
        }
        
        h2{
            font-size: 26px;
        }
        .chart-title{
            font-size: 26px;
        }
        p,a{
            font-size: 18px;
            line-height: 32px;
        }
        .img-say{
            font-size: 15px;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        .container{
            width: 100%;
        }
        .content{
            padding: 64px 100px;
        }
        h2{
            font-size: 30px;
        }
        p,a{
            font-size: 20px;
            line-height: 32px;
        }
    }
    @media screen and (min-width: 1025px){
        .container{
            width: 955px;
        }
        p>br{
            line-height: 50px;
        }
    }
</style>