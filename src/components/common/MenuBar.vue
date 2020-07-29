<template>
    <div class="menubar">
    <v-list
            dense
            nav
    >
        <v-list-item
                v-for="items in menulist.menulist"
                :key="items.title"
                link
        >
            <v-list-item-content>
                <v-list-item-title>{{ items.name }}</v-list-item-title>
                <v-list-item
                        v-for="item in items.children"
                        :key="item.title"
                        link
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-content>
        </v-list-item>
    </v-list>
    </div>
</template>

<script>
    import menulist from "@/assets/menu.json"
    export default {
        data: () => ({
            menulist,
        }),
        computed:{
            menu_first(){
                const menu_first = this.menulist.menulist[0];
                return menu_first;
            },
            menu_second(){
                const menu_second = this.menulist.menulist[1];
                return menu_second;
            },
            menu_third(){
                const menu_third = this.menulist.menulist[2];
                return menu_third;
            },
        },
        methods:{
            gotoUrl(url){
                this.$router.push(url);
            }
        },
        mounted() {
        }
    }
</script>


<style>
    .menubar {
        position: relative;
        z-index: 1;
        width: 280px;
        transition: width .2s;
        background-color: #fff;
        box-shadow: -14px 0 48px 0 #99a7bf;
        flex: 0 0 auto;
    }
    .menubar::after {
        position: absolute;
        top: 0;
        right: -20px;
        bottom: 0;
        display: block;
        width: 20px;
        content: '';
        cursor: col-resize;
    }
</style>