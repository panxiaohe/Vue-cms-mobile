<template>
    <div class="goods-container">
        <v-comment></v-comment>
    </div>
</template>

<script>
import Comment from '../subcomponents/Comment.vue'

export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    components: {
        'v-comment': Comment
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>