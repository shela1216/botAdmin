(function (window) {
    var ua = navigator.userAgent.toLowerCase() || navigator.vendor || window.opera;
    var data = {
        viewHeight: document.body.clientHeight,
        keyword:"",
        learncontent:"",
        groupId:"",
        password:""
    }
    var vm = new Vue({
        el: "#main",
        data: data,
        computed: {
            PageHeight: function () {
                return this.viewHeight - 147 + "px"
            },
            args: function () {
                var ret = {};
                var str = this.params;
                if (!str) {
                    return ret;
                }
                var seg = str.replace(/^\?/, "").split('&');

                for (var i = seg.length - 1; i >= 0; i--) {
                    if (!seg[i]) {
                        continue;
                    }
                    var s = seg[i].split('=');
                    ret[s[0]] = s[1];
                }

                return ret;
            },
        },
        mounted: function () {
            this.viewHeight = document.body.clientHeight;
            window.addEventListener('resize', this.heightChange);
        },
        created: function () {
            if (this.args.groupId) {
                this.groupId=this.args.groupId;
            }
        },

        methods: {


        }
    })
})(window);