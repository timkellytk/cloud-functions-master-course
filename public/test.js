document.addEventListener('DOMContentLoaded', () => {
    let app = firebase.app();

    fetch('http://localhost:5001/cloud-functions-test-2b72a/us-central1/api/dog').then(console.log)
})