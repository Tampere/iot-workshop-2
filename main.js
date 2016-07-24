const URL = 'http://dev.avoindata.net/v1/envs/1/latest';

Vue.component('dash-panel', {
    template: '#dash-panel-template',
    props: ['heading', 'value', 'type'],
});

Vue.filter('round', function(value, decimals) {
    return Math.round(value * Math.pow(10, decimals))
                / Math.pow(10, decimals);
});

new Vue({
    el: '#app', // 1.

    data: {     // 2.
        temperature: 0,
        humidity: 0,
        pressure: 0,
        luminance: 0
    },

    ready() {   // 3.
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.$http.get(URL).then(response => {
                this.temperature = response.data.Temperature.val;
                this.humidity = response.data.Humidity.val;
                this.pressure = response.data.Pressure.val;
                this.luminance = response.data.Luminance.val;
            });
        }
    }
});
