<script setup>
import { ref, reactive, watch } from 'vue'

const quority_type = ref([])
const angle = ref([])
const angle_of_view_position = ref([])
const camera_work = ref([])
const painting_style = ref([])
const body_shape = ref([])
const pose = ref([])

const incantation = ref('')
const temp_incantation = ref('')

const message = ref('')

watch([quority_type, angle, angle_of_view_position, camera_work, painting_style, body_shape, pose], () => {
    temp_incantation.value = ''
    for (var i = 0; i < quority_type.value.length; i++) {
        if (temp_incantation.value == '') temp_incantation.value = quority_type.value[i]
        else temp_incantation.value += ', ' + quority_type.value[i]
    }

    for (var i = 0; i < angle.value.length; i++) {
        if (temp_incantation.value == '') temp_incantation.value = angle.value[i]
        else temp_incantation.value += ', ' + angle.value[i]
    }

    for (var i = 0; i < angle_of_view_position.value.length; i++) {
        if (temp_incantation.value == '') temp_incantation.value = angle_of_view_position.value[i]
        else temp_incantation.value += ', ' + angle_of_view_position.value[i]
    }

    for (var i = 0; i < camera_work.value.length; i++) {
        if (temp_incantation.value == '') temp_incantation.value = camera_work.value[i]
        else temp_incantation.value += ', ' + camera_work.value[i]
    }

    for (var i = 0; i < painting_style.value.length; i++) {
        if (temp_incantation.value == '') temp_incantation.value = painting_style.value[i]
        else temp_incantation.value += ', ' + painting_style.value[i]
    }

    for (var i = 0; i < body_shape.value.length; i++) {
        if (temp_incantation.value == '') temp_incantation.value = body_shape.value[i]
        else temp_incantation.value += ', ' + body_shape.value[i]
    }

    for (var i = 0; i < pose.value.length; i++) {
        if (temp_incantation.value == '') temp_incantation.value = pose.value[i]
        else temp_incantation.value += ', ' + pose.value[i]
    }

    if (incantation.value != temp_incantation.value) message.value = '変更がありました。generateから再生成してください'
})

const generate = (() => {
    incantation.value = ''
    for (var i = 0; i < quority_type.value.length; i++) {
        if (incantation.value == '') incantation.value = quority_type.value[i]
        else incantation.value += ', ' + quority_type.value[i]
    }

    for (var i = 0; i < angle.value.length; i++) {
        if (incantation.value == '') incantation.value = angle.value[i]
        else incantation.value += ', ' + angle.value[i]
    }

    for (var i = 0; i < angle_of_view_position.value.length; i++) {
        if (incantation.value == '') incantation.value = angle_of_view_position.value[i]
        else incantation.value += ', ' + angle_of_view_position.value[i]
    }

    for (var i = 0; i < camera_work.value.length; i++) {
        if (incantation.value == '') incantation.value = camera_work.value[i]
        else incantation.value += ', ' + camera_work.value[i]
    }

    for (var i = 0; i < painting_style.value.length; i++) {
        if (incantation.value == '') incantation.value = painting_style.value[i]
        else incantation.value += ', ' + painting_style.value[i]
    }

    for (var i = 0; i < body_shape.value.length; i++) {
        if (incantation.value == '') incantation.value = body_shape.value[i]
        else incantation.value += ', ' + body_shape.value[i]
    }

    for (var i = 0; i < pose.value.length; i++) {
        if (incantation.value == '') incantation.value = pose.value[i]
        else incantation.value += ', ' + pose.value[i]
    }

    temp_incantation.value = incantation.value
    message.value = ''
})

const quority_type_jpn = ref(
    ['8k', '8k_壁紙', '非常に詳細なCG', '高画質イラスト', 'イラスト', '現実的', '写真のようにリアル', '写真撮影', ' RAW写真']
)
const quority_type_eng = ref(
    ['8k', '8k wallpaper', 'extremely detailed CG', 'super fine illustration', 'illustration', 'realistic', 'photo realistic', 'photography', 'RAW photo']
)
const quority_type_img = ref([
    '/img/AI/QuorityType/00020-3616697256.png',
    '/img/AI/QuorityType/00021-1657005802.png',
    '/img/AI/QuorityType/00022-1321470918.png',
    '/img/AI/QuorityType/00023-2348807691.png',
    '/img/AI/QuorityType/00024-2203676968.png',
    '/img/AI/QuorityType/00025-1391681112.png',
    '/img/AI/QuorityType/00025-216990480.png',
    '/img/AI/QuorityType/00025-3750985604.png',
    '/img/AI/QuorityType/00025-1081288529.png'
])

const angle_jpn = ref([
    'ダイナミックアングル',
    'ドラマティックアングル',
    '映画的なアングル',
    'ローアングル',
    'ハイアングル',
    '水平アングル'
])
const angle_eng = ref([
    'dynamic angle',
    'dramatic angle',
    'cinematic angle',
    'low angle',
    'high angle',
    'eye-level angle'
])
const angle_img = ref([
    '/img/AI/Angle/00025-3075723502.png',
    '/img/AI/Angle/00025-1333941240.png',
    '/img/AI/Angle/00025-2993530595.png',
    '/img/AI/Angle/00025-639423733.png',
    '/img/AI/Angle/00025-3336221936.png',
    '/img/AI/Angle/00025-3829735195.png'
])

const camera_work_jpn = ref([
    '正面',
    '横から',
    '背中越しに',
    '足元から',
    '頭上から俯瞰'
])
const camera_work_eng = ref([
    'front view',
    'from side',
    'from behind',
    'from below',
    'from adove'
])
const camera_work_img = ref([
    '/img/AI/CameraWork/00025-3204933560.png',
    '/img/AI/CameraWork/00025-240753855.png',
    '/img/AI/CameraWork/00025-1896041132.png',
    '/img/AI/CameraWork/00025-1425452887.png',
    '/img/AI/CameraWork/00025-1865279090.png'
])

const angle_of_view_position_jpn = ref([
    '被写界深度',
    'レンズフレア',
    'ハイコントラスト',
    'クローズアップ',
    'バストアップ',
    'ミディアムショット',
    'フルショット',
    'ロングショット',
    'ワイドショット',
    '腰から頭まで'
])
const angle_of_view_position_eng = ref([
    'depth of field',
    'lens flare',
    'high contrast',
    'close up',
    'bust shot',
    'medium shot',
    'full shot',
    'long shot',
    'wide shot',
    'Show from the hips to the shoulders'
])
const angle_of_view_position_img = ref([
    '/img/AI/AngleOfViewPosition/00025-366422772.png',
    '/img/AI/AngleOfViewPosition/00025-2949469006.png',
    '/img/AI/AngleOfViewPosition/00025-4058964528.png',
    '/img/AI/AngleOfViewPosition/00025-4246781417.png',
    '/img/AI/AngleOfViewPosition/00025-270235161.png',
    '/img/AI/AngleOfViewPosition/00025-2651585751.png',
    '/img/AI/AngleOfViewPosition/00025-107126266.png',
    '/img/AI/AngleOfViewPosition/00025-3279096016.png',
    '/img/AI/AngleOfViewPosition/00025-617053682.png',
    '/img/AI/AngleOfViewPosition/00025-4017019692.png'
])

const painting_style_jpn = ref([
    '漫画調',
    'アニメ',
    'アニメ調',
    'コミック',
    '線画',
    '鉛筆',
    'モノクローム',
    'パステル'
])
const painting_style_eng = ref([
    'manga style',
    'anime',
    'cartoon',
    'comic',
    'lineart',
    'sketch',
    'monochrome',
    'pastel'
])
const painting_style_img = ref([
    '/img/AI/PaintingStyle/00025-3945522650.png',
    '/img/AI/PaintingStyle/00025-3945522650_2.png',
    '/img/AI/PaintingStyle/00025-3945522654.png',
    '/img/AI/PaintingStyle/00025-3945522653.png',
    '/img/AI/PaintingStyle/00025-3945522650_3.png',
    '/img/AI/PaintingStyle/00025-1665788051.png',
    '/img/AI/PaintingStyle/00025-2696473208.png',
    '/img/AI/PaintingStyle/00025-1728075155.png',
])

const body_shape_rective = reactive({
    jpn: [
        '痩せ',
        '小柄',
        'スレンダー'
    ],
    eng: [
        'skinny',
        'petite',
        'slender'
    ],
    img: [
        '/img/AI/BodyShape/00025-3835879101.png',
        '/img/AI/BodyShape/00025-3067692616.png',
        '/img/AI/BodyShape/00025-4116093741.png'
    ]
}
)

const pose_reactive = reactive({
    jpn: [
        '全身',
        '上半身',
        '片腕を上げる',
        '両腕を上げる',
        '座る',
        '腕を組む',
        '足を組む',
        '体操座り',
        '寝そべる',
        '振り返る',
        '後ろ向き',
        'ジャンプ',
        '胸を寄せる',
        'こちらに指をさす',
        'しーっのポーズ',
        'カメラに手を振る'
    ],
    eng: [
        'full body',
        'upper body',
        'arm up',
        'arms up',
        'sitting',
        'crossed arms',
        'crossed legs',
        'knees up',
        'lying',
        'looking back',
        'back',
        'jumping',
        'breast squeeze',
        'point at viewer',
        'finger to mouth',
        'waving at viewer'
    ],
    img: [
        '/img/AI/Pose/00025-1501807032.png',
        '/img/AI/Pose/00025-1431482890.png',
        '/img/AI/Pose/00025-3553931586.png',
        '/img/AI/Pose/00025-975626907.png',
        '/img/AI/Pose/00025-2615392490.png',
        '/img/AI/Pose/00025-1580868416.png',
        '/img/AI/Pose/00025-1292212272.png',
        '/img/AI/Pose/00025-2868473888.png',
        '/img/AI/Pose/00025-2371480630.png',
        '/img/AI/Pose/00025-1144601195.png',
        '/img/AI/Pose/00025-2845494134.png',
        '/img/AI/Pose/00025-3238821013.png',
        '/img/AI/Pose/00025-1780769721.png',
        '/img/AI/Pose/00025-4202109405.png',
        '/img/AI/Pose/00025-730700353.png',
        '/img/AI/Pose/00025-2339352150.png'
    ]
})

</script>
<template>
    <div class="container mt-5 mb-5">
        <div class="mb-5">
            <div class="row">
                <div class="col-xs-12 my-2">
                    <div class="col-xs-12 my-2">
                        <h1>AI Incantation</h1>
                    </div>
                </div>
            </div>
            <div class="mb-5">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                品質種類
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(quority, index) in  quority_type_eng ">
                                            <td scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" :id="quority"
                                                        :value="quority" v-model="quority_type">
                                                    <label class="form-check-label" :id="quority">{{ quority_type_jpn[index]
                                                    }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <img :src="quority_type_img[index]">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Angle -->
            <div class="mb-5">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#angle"
                                aria-expanded="true" aria-controls="angle">
                                アングル
                            </button>
                        </h2>
                        <div id="angle" class="accordion-collapse collapse" data-bs-parent="#angle">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(ang, index) in  angle_eng ">
                                            <td scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" :id="ang" :value="ang"
                                                        v-model="angle">
                                                    <label class="form-check-label" :id="ang">{{ angle_jpn[index]
                                                    }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <img :src="angle_img[index]">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Angle view option -->
            <div class="mb-5">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#angle_of_view_position" aria-expanded="true"
                                aria-controls="angle_of_view_position">
                                アングル（オプション）
                            </button>
                        </h2>
                        <div id="angle_of_view_position" class="accordion-collapse collapse"
                            data-bs-parent="#angle_of_view_position">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(angle_view_position, index) in  angle_of_view_position_eng ">
                                            <td scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox"
                                                        :id="angle_view_position" :value="angle_view_position"
                                                        v-model="angle_of_view_position">
                                                    <label class="form-check-label" :id="camera">{{
                                                        angle_of_view_position_jpn[index]
                                                    }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <img :src="angle_of_view_position_img[index]">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Camera Work -->
            <div class="mb-5">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#camera_work" aria-expanded="true" aria-controls="camera_work">
                                カメラワーク
                            </button>
                        </h2>
                        <div id="camera_work" class="accordion-collapse collapse" data-bs-parent="#camera_work">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(camera, index) in  camera_work_eng ">
                                            <td scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" :id="camera"
                                                        :value="camera" v-model="camera_work">
                                                    <label class="form-check-label" :id="camera">{{ camera_work_jpn[index]
                                                    }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <img :src="camera_work_img[index]">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Painting Style -->
            <div class="mb-5">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#painting_style" aria-expanded="true" aria-controls="painting_style">
                                画風
                            </button>
                        </h2>
                        <div id="painting_style" class="accordion-collapse collapse" data-bs-parent="#painting_style">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(paiting, index) in  painting_style_eng ">
                                            <td scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" :id="paiting"
                                                        :value="paiting" v-model="painting_style">
                                                    <label class="form-check-label" :id="paiting">{{
                                                        painting_style_jpn[index]
                                                    }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <img :src="painting_style_img[index]">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Body Shape -->
            <div class="mb-5">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#body_shape" aria-expanded="true" aria-controls="body_shape">
                                体型
                            </button>
                        </h2>
                        <div id="body_shape" class="accordion-collapse collapse" data-bs-parent="#body_shape">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(body, index) in  body_shape_rective.eng ">
                                            <td scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" :id="body" :value="body"
                                                        v-model="body_shape">
                                                    <label class="form-check-label" :id="body">{{
                                                        body_shape_rective.jpn[index]
                                                    }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <img :src="body_shape_rective.img[index]">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Pose -->
            <div class="mb-5">
                <div class="accordion" id="accordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#pose"
                                aria-expanded="true" aria-controls="pose">
                                ポーズ
                            </button>
                        </h2>
                        <div id="pose" class="accordion-collapse collapse" data-bs-parent="#pose">
                            <div class="accordion-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Type</th>
                                            <th scope="col">image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(po, index) in  pose_reactive.eng ">
                                            <td scope="row">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" :id="po" :value="po"
                                                        v-model="pose">
                                                    <label class="form-check-label" :id="po">{{
                                                        pose_reactive.jpn[index]
                                                    }}</label>
                                                </div>
                                            </td>
                                            <td>
                                                <img :src="pose_reactive.img[index]">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- message -->
            <div v-show="message" class="alert alert-danger alert-dismissible fade mt-5 show" role="alert">
                <strong>※{{ message }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <!-- button -->
            <div class="mb-3">
                <button id="generate" name="generate" class="btn btn-outline-primary btn-pill"
                    @click="generate()">generate</button>
            </div>
            <div class="mb-3">
                <button id="clear" name="clear" class="btn btn-outline-primary btn-pill">clear</button>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">positive</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">{{ incantation }}</textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">negative</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"
                    rows="3">EasyNegative、badhandv4, flat color, flat shading, poor quality, worst quality, nsfw, (worst quality, low quality:1.4), interlocked fingers, (zombie, sketch, comic)</textarea>
            </div>
        </div>
    </div>
</template>