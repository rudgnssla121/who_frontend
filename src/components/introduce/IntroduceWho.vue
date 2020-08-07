<template>
    <div class="introducewho">
        <div class="app-header">
            <app-header></app-header>
        </div>
        <div class="intropic">
            <v-card
                    class="mx-auto"
                    max-width="300"
                    height="400"
            >
                <v-img
                        class="white--text align-end"
                        height="300px"
                        width="300px"
                        src="../../assets/professor.png"
                >
                </v-img>
    
                <v-card-subtitle class="pb-0">지도교수 박현찬</v-card-subtitle>
    
                <v-card-text class="text--primary">
                    <div>이메일 :  hyunchan.park @ jbnu.ac.kr</div>
    
                    <div>전공 : 운영체제 / 가상화 시스템</div>
                </v-card-text>
    
            </v-card>
        </div>
        <div class = "introword">

            <br><br><h1>WHO(Who will cHange Our world)</h1><br>
            <p>
                컴퓨터공학은 컴퓨터뿐만 아니라 휴대폰, 자동차, 가전, 드론, 웨어러블 등 컴퓨팅 능력을 가진 온갖 종류의 기기에서 동작하는 소프트웨어를 다루는 학문입니다. 컴퓨터공학 기술은 우리가 사는 세상을 빠르게 바꾸어가고 있습니다. 스마트폰은 이미 필수품이 되었습니다. 인공지능 소프트웨어 알파고는 이세돌 기사를 이겼습니다. 하늘에는 드라마 촬영, 국립공원 감시, 퀵 배달을 하는 드론이 점점 많아지고 있습니다. 빅데이터 기술은 의료 전문가가 아닌 사람이 신약을 개발할 수 있는 길을 터주며, 3D프린터는 내 발에 딱 맞는 구두를 만들어줍니다. 머지않아 자율주행 자동차가 도로에 나타날 것입니다. 사물인터넷(IoT) 기술은 과일 나무에 센서를 부착하여 스마트 팜을 실현할 것이며, 로봇은 화재 현장에 들어가 사람을 구해내는 감동적인 일까지 수행할 것입니다. 이러한 멋진 응용기술의 밑바탕에는 “컴퓨터공학” 기술이 있습니다.
            </p>
        </div>
        <div class="footer">
            <app-footer></app-footer>
        </div>
    </div>
</template>


<script>
    import AppHeader from "@/components/common/Header"
    import AppFooter from "@/components/common/Footer"

    export default {
        components: {
            'app-footer' : AppFooter,
            'app-header':AppHeader,
        }

    }
</script>

<style>
    .intropic{
        float: left;
        margin-right: 15px;
        margin-top: 15px;
        height: 80%;
    }
    .introducewho{
        overflow-x: auto;
        height: calc(100vh - 60px);
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
</style>