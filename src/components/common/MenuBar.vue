<template>
    <div class="nav">
        <v-card
                max-width="250"
                class="mx-auto"
                height="720px"
                tile
        >
            <v-toolbar
                    color="#5c6bc0"
                    dark
                    height="50px"
            >

                <v-toolbar-title>WHO</v-toolbar-title>

                <v-spacer></v-spacer>

            </v-toolbar>

            <v-list>
                <v-list-group
                        v-for="item in menulist.menulist"
                        :key="item.name"
                        v-model="item.active"
                        :prepend-icon="item.action"
                        no-action
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.name"></v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                            v-for="subItem in item.children"
                            :key="subItem.name"
                            @click="gotoUrl(subItem.url)"
                    >
                        <v-list-item-content>
                            <v-list-item-title v-text="subItem.name"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    import menulist from "@/assets/menu.json"
    export default {
        data: () => ({
            menulist,

        }),
        computed:{

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
    .nav {
      position: relative;
      margin: 0;
      float: left;
      z-index: 1;
      flex: 0 0 auto;
      left: 0;
      width: 250px;

    }
    .v-sheet.v-card:not(.v-sheet--outlined) {
        height: 100%;
    }

</style>