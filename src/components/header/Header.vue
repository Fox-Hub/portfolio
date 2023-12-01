<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const username = ref(localStorage.getItem('username'));

onBeforeMount(() => {
    username.value = localStorage.getItem('username');
})

const router = useRouter()

const signIn = function () {
    router.push('/login');
}

const signOut = function () {
    localStorage.setItem('username', null);
    username.value = null;
    router.push('/');
}

const changePage = function (pageName) {
    router.push(pageName);
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-md bg-teal navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <!-- <img src="/assets/images/logos/nowsquare-dark.svg" alt="" style="height: 42px"> -->
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav" style="font-size: 20px; color: #FFFFFF">
                        <li class="nav-item"><a class="nav-link" @click="changePage('/')">Home <span
                                    class="sr-only">(current)</span>
                            </a></li>

                        <li class="nav-item"><a class="nav-link">Twitter</a></li>
                        <li class="nav-item"><a class="nav-link" @click="changePage('/youtube')">YouTube</a>
                        </li>
                        <li class="nav-item"><a class="nav-link">Chat</a></li>
                        <li class="nav-item"><a class="nav-link">Setting</a></li>
                        <li class="nav-item"><a class="nav-link disabled" href="#">Disabled</a></li>
                    </ul>
                    <div class="input-group">
                        <form v-if="username == 'null'" class=" form-inline ms-auto" data-background-color>
                            <button class="btn btn-outline-light btn-pill btn-lg" @click="signIn()">Sign
                                In</button>
                        </form>
                        <form v-else class="form-inline ms-auto" data-background-color>
                            <span class="text-center" style="font-size: 20px; color: #FFFFFF; margin-right: 30px">
                                Login UserID : {{ username }}
                            </span>
                            <button class="btn btn-outline-light btn-pill btn-lg" @click="signOut()">Sign
                                Out</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>