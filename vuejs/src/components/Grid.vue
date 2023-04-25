<template>
    <section class="mb-4">
        <header class="d-flex justify-content-around mb-4">
            <h2 class="font-weight-bold mb-0">
                <a class="text-body" href="">
                    {{ nameBox }}
                </a>
            </h2>
            <a class="btn btn-primary ml-auto" href="/">View all</a>
        </header>
        <div class="row">
            <div  v-for="item in items" :key="item" class="col-12 col-sm-6 col-lg-4 mb-4" >
                <a class="" :style="{backgroundImage:`url(${item.image})`}" href="/">
                    <div class="d-flex align-items-end p-3 position-absolute">
                        <h3 class="h6 font-weight-bold">{{ item.title }}</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name:"BoxContent",
    props:{
        items: Array,
        nameBox: String
    },
}
</script>
