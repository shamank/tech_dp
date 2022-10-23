<template>
    <div class="row">
        <div class="col-10 mx-auto border py-3 rounded-5">
        <div class="row my-5">
            <div class="col-6 mx-auto">
                <div v-show="submited" class="alert alert-success" role="alert">
                    Записка с темой {{ submited_theme }} была успешно создана!
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-6 mx-auto">
                <div class="text-center">Создание новой записки</div>
            </div> 
        </div>
        <div class="row">
            <div class="col-4 mx-auto">
                <div class="form-floating mb-3">
                    <input v-model="theme" type="text" class="form-control" id="floatingInput" placeholder="Тема">
                    <label for="floatingInput">Тема</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea v-model="content" type="text" class="form-control" id="floatingPassword" placeholder="Ваше сообщение" style="height: 150px"></textarea>
                    <label for="floatingPassword">Текст записки</label>
                </div>
                <button type="button" class="btn btn-outline-success" :disabled="!isFormReady" @click="submit()">Сохранить</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            theme: '',
            content: '',
            submited: false
        }
    },
    computed: {
        isFormReady() {
            return this.theme && this.content;
        }
    },
    methods: {
        submit() {
            if (this.isFormReady) {
                this.submited = true;
                this.$store.dispatch('SAVE_NOTE', {'theme': this.theme, 'content': this.content});
                this.submited_theme = this.theme
                this.theme = '';
                this.content = '';
            }
        }
    }
}
</script>