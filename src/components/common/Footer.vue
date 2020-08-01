<template>
    <div class ="footer">
        <v-footer
                dark
                padless
        >
            <v-card
                    width="100%"
                    flat
                    tile
                    class="indigo lighten-1 white--text text-center"
            >
                <v-card-text>
                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-4 white--text"
                            @click="onClickIcon(icon)"
                            icon
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    WHO에 오신 걸 환영합니다.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>회장 김경훈
                </strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-instagram',
            ],
        }),
        methods:{
            onClickIcon: function (icon) {
                if(icon === 'mdi-facebook') window.open("https://www.facebook.com/profile.php?id=100002533279341", "_blank");
                else window.open("https://www.instagram.com/khoon_25/", "_blank");
            }
        }
    }
</script>

<style>
    .footer{
        position: absolute;
        width: 100%;
        bottom:0;
        float: left;
        height: 10%;
    }
</style>