<script setup>
import { ref, onBeforeMount } from 'vue'
import axios from 'axios';

const username = ref('')
const email = ref('')
const available = ref(false)
const new_password = ref('')
const con_password = ref('')
const getUrl = 'https://r60151378g.execute-api.ap-northeast-1.amazonaws.com/Dev/get-user'
const save_url = 'https://r60151378g.execute-api.ap-northeast-1.amazonaws.com/Dev/save-user'
const success_message = ref('')
const error_message = ref('')
const loading_flag = ref(false)

onBeforeMount(() => {
    try {
        loading_flag.value = true
        axios.post(
            getUrl,
            {
                "username": localStorage.getItem('username'),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                username.value = response.data.username
                email.value = response.data.email
                if (response.data.available == 1) available.value = true
                else available.value = false
            }).catch((error) => {
                console.log(error)
            });
    } catch (error) {
        console.error(error)
    } finally {
        setTimeout(() => {
            loading_flag.value = false
        }, 1000);
    }
})

const saveUser = (() => {
    error_message.value = ''
    if (new_password.value != '') {
        alert(new_password.value !== con_password.value)
        alert(new_password.value + " : " + con_password.value)
        if (new_password.value !== con_password.value) {
            error_message.value = 'パスワードが違います。'
            return
        }
    }

    try {
        loading_flag.value = true
        axios.post(
            save_url,
            {
                "oldUsername": localStorage.getItem('username'),
                "newUsername": username.value,
                "email": email.value,
                "password": password.value,
                "available": available.value,
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((response) => {
                error_message.value = ''
                success_message.value = 'ユーザー情報を更新しました。'
            }).catch((error) => {
                console.log(error)
            });

    } catch (error) {
        console.error('here')
    } finally {
        setTimeout(() => {
            loading_flag.value = false
        }, 1000);
    }
})

</script>
<template>
    <div v-show="loading_flag" id="loading" class="position-absolute top-0 start-0 w-100 h-100">
        <div class="text-center position-absolute top-50 start-50 w-100 translate-middle">
            <div class="spinner-border text-light" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    </div>
    <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">User Settings</h4>
                    </div>
                    <div v-show="success_message" class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>※{{ success_message }}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div v-show="error_message" class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>※{{ error_message }}</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input v-model="username" type="text" class="form-control" id="username"
                                placeholder="Enter new username">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input v-model="email" type="email" class="form-control" id="email"
                                placeholder="exsample@xxx.com">
                        </div>
                        <div class="form-check form-switch mb-3">
                            <input v-model="available" class="form-check-input" type="checkbox" role="switch"
                                id="available">
                            <label class="form-check-label" for="available">User Available</label>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">New Password</label>
                            <input v-model="new_password" type="password" class="form-control" id="password"
                                placeholder="Enter new password">
                        </div>
                        <div class="mb-3">
                            <label for="confirmPassword" class="form-label">Confirm New Password</label>
                            <input v-model="con_password" type="password" class="form-control" id="confirmPassword"
                                placeholder="Confirm new password">
                        </div>
                        <button class="btn btn-primary" @click="saveUser()">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#loading {
    background: rgba(0, 0, 0, .5);
    z-index: 10000;
}
</style>