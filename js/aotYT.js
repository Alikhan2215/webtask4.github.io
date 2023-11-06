let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        videoId: 'E7WytLM2KvY',
        playerVars: {
            'controls': 1
        },
    });
}