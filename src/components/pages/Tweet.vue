<script setup>
import { ref, onBeforeMount } from 'vue'
const search_condition = ref('')
const word = ref('')
const search_word = ref([])
const search_user = ref('')

onBeforeMount(() => {
    search_condition.value = 'tweet'
    word.value = ''
    search_word.value = []
    search_user.value = ''
})

const condition_change = ((condition) => {
    search_condition.value = condition
    alert(search_condition.value)
})

const add_word = ((wd) => {
    search_word.value.push(wd)
    word.value = ''
})

const delete_word = ((index) => {
    search_word.value.splice(index, 1)
})

</script>
<template>
    <div class="container">
        <div class="mb-5">
            <div class="mb-5">
                <div class="row">
                    <div class="col-xs-12 my-2">
                        <h1>Twitter</h1>
                    </div>
                </div>
            </div>
            <div class="mb-5">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Search
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div class="dropdown mb-3">
                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        search conditions
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" @click="condition_change('tweet')">tweet</a>
                                        </li>
                                        <li><a class="dropdown-item" @click="condition_change('user')">user</a>
                                        </li>
                                    </ul>
                                </div>
                                <div v-show="search_condition == 'tweet'">
                                    <h3><strong>Tweet</strong></h3>
                                    <h4>search word</h4>
                                    <div class="input-group mb-3">
                                        <button type="button" id="button-addon1" class="btn btn-outline-primary"
                                            @click="add_word(word)">add</button>
                                        <input v-model="word" type="text" class="form-control">
                                    </div>
                                    <div class="row">
                                        <div v-for="word, key in search_word" class="col-2">
                                            <div class="input-group mb-3">
                                                <input :value="word" type="text" class="form-control"
                                                    style="background-color: lightcyan;" disabled>
                                                <button type="button" class="btn-close" aria-label="Close"
                                                    @click="delete_word(key)"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-show="search_condition == 'user'">
                                    <h3><strong>User</strong></h3>
                                    <h4>search username</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3>TweetList</h3>
            <div class="mb-5">
                <table class="table table-light">
                    <thead class="thead-dark">
                        <tr>
                            <th style="width: 20%">Users</th>
                            <th style="width: 70%">Contents</th>
                        </tr>
                    </thead>
                    <tr th:each="tweet : ${tweetMap}">
                        <td th:text="${tweet.key}"></td>
                        <td th:text="${tweet.value}"></td>
                    </tr>
                </table>
            </div>
            <div class="mb-5">
                <h3>Tweet</h3>
                <div class="form-group">
                    <div class="cnt_area">
                        <span class="now_cnt">0</span> / 140
                    </div>
                    <span> <textarea rows="8" cols="120" id="tweetContent" name="tweetContent"
                            class="form-control ta"></textarea>
                    </span>
                    <div class="text-right">
                        <button type="button" id="clearBtn" name="clearBtn" class="btn btn-outline-secondary btn-pill"
                            onclick="clear()">Clear</button>
                    </div>
                    <button id="tweet" name="tweet" type="submit" class="btn btn-outline-primary btn-pill">tweet</button>
                </div>
            </div>
        </div>
    </div>
</template>