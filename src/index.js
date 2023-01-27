// get request
fetch('http://localhost:3000')
.then(response => response.json())
.then(data => (data))
.catch(error => console.error('Error'));