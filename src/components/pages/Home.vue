<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';

const username = ref(localStorage.getItem('username'))

const router = useRouter()
const changePage = function (pageName) {
    router.push(pageName);
}

const selectResult = ref([[]])
const url = 'https://s3l22h3ecmcsmpvxgr22laj7340vfujl.lambda-url.ap-northeast-1.on.aws/'

onBeforeMount(() => {
    console.log('onBeforeMount')
    try {
        axios.post(url).then((response) => {
            console.log(response)
            selectResult.value = response.data
        });
    } catch (error) {
        console.error(error)
    }
    // selectResult.value = [
    //     [1, 'info', 'message', '2023/11/25'],
    //     [2, 'warning', 'message', '2023/11/11'],
    //     [3, 'danger', 'message', '2023/12/14']
    // ]
})

const openGit = function () {
    const url = "https://github.com/Fox-Hub/FreeTask";
    window.open(url, "_blank");
}
</script>
<template>
    <div class="body">
        <div class="main text-center mt-5">
            <h6 class="heading">This page is My portfolio</h6>
            <p class="text-info">Front function uses Vue.js</p>
            <p class="text-info">Server end functionality is Java RestAPI</p>
        </div>
        <div class="container d-flex justify-content-center">
            <div class="row g-1">
                <div class="col-md-4 border-right">
                    <div class="cards" @click="changePage('/tweet')">
                        <div class=" first bg-white p-4 text-center">
                            <img src="../../assets/collaboration.svg" width="100" height="100" />
                            <h5>Tweets</h5>
                            <p class="line1">ツイート</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 border-right">
                    <div class="cards">
                        <div class=" second bg-white p-4 text-center">
                            <img src="../../assets/mms.svg" width="100" height="100" />
                            <h5>Chat</h5>
                            <p class="line2">ユーザー同士のチャット</p>

                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="cards" @click="changePage('/youtube')">
                        <div class=" third bg-white p-4 text-center">
                            <img src="../../assets/video_file.svg" width="100" height="100" />
                            <h5>Youtube</h5>
                            <p class="line3">動画視聴とランキング</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-1 mb-6 d-flex justify-content-center">
            <div class="row g-1">
                <div class="col-md-6 border-right">
                    <div class="cards" @click="openGit()">
                        <div class="first bg-white p-4 text-center">
                            <img src="../../assets/settings.svg" width="100" height="100" />

                            <h5>GitHub</h5>
                            <p class="line1">GitHubページを開く</p>
                        </div>
                    </div>
                </div>
                <div v-show="username != 'null'" class="col-md-6 border-right">
                    <div class="cards" @click="changePage('/setting')">
                        <div class="first bg-white p-4 text-center">
                            <img src="../../assets/settings.svg" width="100" height="100" />

                            <h5>Settings</h5>
                            <p class="line1">アカウント情報の設定</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main text-center mt-5 mb-5">
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title" style="text-align: left;">Notifications</h4>
                            </div>
                            <div v-for="select in selectResult" :key="select" class="card-body">
                                <div v-if="select[1] == 'success'" class="alert alert-success" role="alert">
                                    <strong>{{ select[3] }}</strong> {{ select[2] }}
                                </div>
                                <div v-else-if="select[1] == 'info'" class="alert alert-info" role="alert">
                                    <strong>{{ select[3] }}</strong> {{ select[2] }}
                                </div>
                                <div v-else-if="select[1] == 'warning'" class="alert alert-warning" role="alert">
                                    <strong>{{ select[3] }}</strong> {{ select[2] }}
                                </div>
                                <div v-else-if="select[1] == 'danger'" class="alert alert-danger" role="alert">
                                    <strong>{{ select[3] }}</strong> {{ select[2] }}
                                </div>
                                <div v-else class="alert alert-info">
                                    <strong>Info!</strong> {{ select }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.heading {
    font-size: 20px;
    font-weight: 600;
    color: #3D5AFE;

}

.line1 {
    color: #000;
    font-size: 12px;

}

.line2 {
    color: #000;
    font-size: 12px;

}

.line3 {
    color: #000;
    font-size: 12px;

}

.cards {

    transition: all 0.2s ease;
    cursor: pointer;
    width: 350px;


}

.card {
    width: 1100px;
}

.card-header {
    width: 1100px;
}

.card-body {
    transition: all 0.2s ease;
    cursor: pointer;
    width: 1100px;
    padding: 2px;
    height: 50px;
    text-align: left;
}



.cards:hover {

    box-shadow: 5px 6px 6px 2px #e9ecef;
    transform: scale(1.1);
}
</style>