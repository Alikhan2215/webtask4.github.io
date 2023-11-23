function nextStep() {
    event.preventDefault();

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function prevStep() {
    event.preventDefault();

    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
}

function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert('You have subscribed successfully!');
    return true;
}