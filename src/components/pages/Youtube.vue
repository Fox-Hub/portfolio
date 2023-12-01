<script setup></script>
<template>
    <div class="container">
        <div class="row">
            <div class="mb-3">
                <div class="row">
                    <div class="col-xs-12 my-2">
                        <h1>Posted video</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-5">
            <div class="slider">
                <div id="carousel" class="carousel carousel-dark slide carousel-fade">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Xanh3PXRdug"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="carousel-item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/PTjsLiLOTPA"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="carousel-item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/bgwZzFhJodU"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                        <div class="carousel-item">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/UyL604iIpQ0"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="mb-3">
                <div class="row">
                    <div class="col-xs-12 my-2">
                        <h1>Search</h1>
                    </div>
                </div>
            </div>
        </div>
        <button id="searchVideo" name="searchVideo" class="btn-blue btn-pill btn-lg">Search</button>
        <h4>VideoList</h4>
        <div class="mb-5">
            <table class="table table-light">
                <thead class="thead-dark">
                    <tr>
                        <th style="width: 10%">samune</th>
                        <th style="width: 20%">Title</th>
                        <th style="width: 60%">URL</th>
                    </tr>
                </thead>
                <tr th:each="tweet : ${tweetMap}">
                    <td th:text="${tweet.key}"></td>
                    <td th:text="${tweet.value}"></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style scoped>
@import 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/reset.css';
@import 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css';
@import '../../../public/css/youTube.css';
</style>