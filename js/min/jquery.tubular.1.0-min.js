!function($,e){var t={ratio:16/9,videoId:"ZCAnLxRvNNc",mute:!0,repeat:!0,width:$(e).width(),wrapperZIndex:99,playButtonClass:"tubular-play",pauseButtonClass:"tubular-pause",muteButtonClass:"tubular-mute",volumeUpClass:"tubular-volume-up",volumeDownClass:"tubular-volume-down",increaseVolumeBy:10,start:0},a=function(a,n){var n=$.extend({},t,n),i=$("body");$node=$(a);var o='<div id="tubular-container" style="overflow: hidden; position: fixed; z-index: 1; width: 100%; height: 100%"><div id="tubular-player" style="position: absolute"></div></div><div id="tubular-shield" style="width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;"></div>';$("html,body").css({width:"100%",height:"100%"}),i.prepend(o),$node.css({position:"relative","z-index":n.wrapperZIndex}),e.player,e.onYouTubeIframeAPIReady=function(){player=new YT.Player("tubular-player",{width:n.width,height:Math.ceil(n.width/n.ratio),videoId:n.videoId,playerVars:{controls:0,showinfo:0,modestbranding:1,wmode:"transparent"},events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})},e.onPlayerReady=function(e){u(),n.mute&&e.target.mute(),e.target.seekTo(n.start),e.target.playVideo()},e.onPlayerStateChange=function(e){0===e.data&&n.repeat&&player.seekTo(n.start)};var u=function(){var t=$(e).width(),a,i=$(e).height(),o,u=$("#tubular-player");t/n.ratio<i?(a=Math.ceil(i*n.ratio),u.width(a).height(i).css({left:(t-a)/2,top:0})):(o=Math.ceil(t/n.ratio),u.width(t).height(o).css({left:0,top:(i-o)/2}))};$(e).on("resize.tubular",function(){u()}),$("body").on("click","."+n.playButtonClass,function(e){e.preventDefault(),player.playVideo()}).on("click","."+n.pauseButtonClass,function(e){e.preventDefault(),player.pauseVideo()}).on("click","."+n.muteButtonClass,function(e){e.preventDefault(),player.isMuted()?player.unMute():player.mute()}).on("click","."+n.volumeDownClass,function(e){e.preventDefault();var t=player.getVolume();t<n.increaseVolumeBy&&(t=n.increaseVolumeBy),player.setVolume(t-n.increaseVolumeBy)}).on("click","."+n.volumeUpClass,function(e){e.preventDefault(),player.isMuted()&&player.unMute();var t=player.getVolume();t>100-n.increaseVolumeBy&&(t=100-n.increaseVolumeBy),player.setVolume(t+n.increaseVolumeBy)})},n=document.createElement("script");n.src="//www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i),$.fn.tubular=function(e){return this.each(function(){$.data(this,"tubular_instantiated")||$.data(this,"tubular_instantiated",a(this,e))})}}(jQuery,window);