<template>
    <div>
        <div class="row">
            <div class="col-6 mx-auto" >
                <div class="card mb-3 mx-auto" v-for="note, index in NOTES" :key="index">
                    <div class="card-body" >
                        <h6 class="card-subtitle text-muted"> Тема: {{ note.theme }}</h6>
                        <p class="card-text fs-4"> {{ note.content }}</p>
                        <button type="button" class="btn btn-outline-danger" @click="DELETE_NOTE(index)">X</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['NOTES'])
    },
    methods: {
        ...mapActions(['DELETE_NOTE'])
    },

}
</script>