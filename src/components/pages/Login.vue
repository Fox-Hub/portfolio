<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';

const error_message = ref('')
const url = 'https://r60151378g.execute-api.ap-northeast-1.amazonaws.com/Dev/user-login'
const username = ref('');
const password = ref('')
const router = useRouter();

const login = function () {
    try {
        axios.post(
            url,
            {
                "username": username.value,
                "password": password.value,
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((response) => {
                localStorage.setItem('username', username.value);
                router.push('/');
                setTimeout(() => {
                    location.reload()
                }, 1000);
            }).catch((error) => {
                error_message.value = error.response.data
            });
    } catch (error) {
        console.error('here')
    }
}
</script>
<template>
    <div class="container mt-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Login</h4>
                    </div>
                    <div class="card-body">
                        <!-- <div  class="mb-3 alert alert-danger" style="color: red;">{{ error_message }}
                                                            </div> -->
                        <div v-show="error_message" class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>※{{ error_message }}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter your username" required
                                v-model="username">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Enter your password"
                                required v-model="password">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                        </div>
                        <button class="btn btn-primary btn-block" @click="login()">Login</button>
                    </div>
                    <div class="card-footer text-center">
                        <p class="mb-0">Don't have an account? <a href="#" class="text-primary">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>