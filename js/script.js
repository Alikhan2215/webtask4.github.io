document.addEventListener('DOMContentLoaded', function() {
    let subscribeButton = document.getElementById('subscribeButton');

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function () {
            let popover = new bootstrap.Popover(subscribeButton, {
                content: "You have subscribed!",
                trigger: "manual",
            });
            popover.show();

            setTimeout(function() {
                popover.hide();
            }, 4000);
        });
    }
});
