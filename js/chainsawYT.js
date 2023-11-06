let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        videoId: 'v4yLeNt-kCU',
        playerVars: {
            'controls': 1
        },
    });
}