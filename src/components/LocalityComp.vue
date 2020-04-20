<template>
    <div class="hello">
        <div id="localityMapid"></div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'LocalityComp',
    props: {
        msg: String
    },
    data() {
        return {
            locality: [],
            population: [],
            households: [],
            todos: [],
            rings: []
        };
    },
    async created() {
        try {
            const res = await axios.get('https://api.jsonbin.io/b/5e96c65c2940c704e1d86721');
            this.todos = res.data;

            for (var i = 0; i < this.todos.features.length; i++) {

                this.rings[i] = this.todos.features[i].geometry.rings;

                this.locality[i] = this.todos.features[i].attributes.locality;
                this.population[i] = this.todos.features[i].attributes.population;
                this.households[i] = this.todos.features[i].attributes.households;

            }

            this.mapWork();

        } catch (e) {
            console.error(e);
        }
    },
    methods: {
        mapWork() {
            var L = window.L;
            const localitymymap = L.map('localityMapid').setView([77, 12], 9);
            const attribution = '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

            const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            const tiles = L.tileLayer(tileUrl, { attribution });
            tiles.addTo(localitymymap);


            for (var j = 0; j < this.todos.features.length; j++) {
                var latlngs = this.rings[j];
                var polygon = L.polygon(latlngs, { color: '#99b2e5' }).addTo(localitymymap);
                polygon.bindPopup('<p> LocalityComp:' + this.locality[j] + '<br>Population:' + this.population[j] + '<br>Households:' + this.households[j] + '</p>').openPopup();
            }
            localitymymap.on('popupopen', function(e) {
                var popupContent = e.popup._content;
                var element = document.getElementById("details");
                if (element) {
                    element.innerHTML = popupContent;
                }

            });

        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

#localityMapid {
    height: 25vh;
}
</style>
