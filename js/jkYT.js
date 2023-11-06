let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        videoId: 'YKJyP8L6QEs',
        playerVars: {
            'controls': 1
        },
    });
}