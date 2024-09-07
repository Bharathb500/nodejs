fetch('http://localhost:5000/student-details', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'htarahb', 
        id: 39
    }),
})
.then(response => {
    console.log(response)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log("Got data from server:", data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});
