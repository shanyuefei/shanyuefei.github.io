webpackJsonp([3],{K2K2:function(t,n){},"Sgn/":function(t,n,e){"use strict";n.b=function(){var t=s()({},r.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq",g_tk:108465258});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,r.c)},n.a=function(t){var n=s()({},r.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:100,songstatus:1,g_tk:108465258,singermid:t});return Object(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",n,r.c)};var i=e("aA9S"),s=e.n(i),a=e("Gak4"),r=e("T452")},lEJ1:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("4YfN"),s=e.n(i),a=e("HVJf"),r=e("Sgn/"),c=e("T452"),o=e("PvFA"),u=e("kvay"),g={data:function(){return{songs:[]}},computed:s()({title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}},Object(a.c)(["singer"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.singer.id?Object(r.a)(this.singer.id).then(function(n){n.code===c.a&&(t.songs=t._normalizeSongs(n.data.list))}):this.$router.push("/singer")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var e=t.musicData;e.songid&&e.albummid&&n.push(Object(o.a)(e))}),n}},components:{MusicList:u.a}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var f=e("C7Lr")(g,l,!1,function(t){e("K2K2")},"data-v-0d397fbc",null);n.default=f.exports}});
//# sourceMappingURL=3.2955dd0450cfab14c8d8.js.map