let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        videoId: 'YKJyP8L6QEs',
        playerVars: {
            'controls': 1
        },
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let subscribeButton = document.getElementById('subscribeButton');

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function () {
            let popover = new bootstrap.Popover(subscribeButton, {
                content: "You have subscribed!",
                trigger: "manual",  // Ensure manual trigger
            });
            popover.show();

            setTimeout(function() {
                popover.hide();
            }, 4000);
        });
    }
});
