<template>
    <v-footer
        color="amber lighten-1"
        padless
    >
        <v-row
        justify="center"
        no-gutters
        >
            <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                text
                rounded
                class="my-2"
            >
                {{ link }}
            </v-btn>
            <v-col
                class="amber lighten-2 py-4 text-center white--text"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>Yamo</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer2",
        data(){
            return{
                links: [
                    'Produits',
                    'Modes de paiement',
                    'Tarifs',
                    'Aide',
                    'Contact Us',
                ]
            }
        }
    }
</script>

<style>

</style>