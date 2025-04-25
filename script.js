// script.js

// Function to fetch jobs based on user location
function fetchJobs(location) {
    // Simulated job data
    const jobs = [
        { title: "Construction Worker", distance: 5 },
        { title: "Electrician", distance: 15 },
        { title: "Plumber", distance: 35 },
    ];

    const filteredJobs = jobs.filter(job => {
        if (location <= 10) return job.distance <= 10;
        else if (location <= 30) return job.distance > 10 && job.distance <= 30;
        else return job.distance > 30;
    });

    const jobContainer = document.getElementById('jobs');
    jobContainer.innerHTML = filteredJobs.map(job => `<div>${job.title} - ${job.distance} km</div>`).join('');
}

// Function to handle chat
document.getElementById('send-btn').addEventListener('click', function() {
    const input = document.getElementById('chat-input').value;
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML += `<div>You: ${input}</div>`;
    document.getElementById('chat-input').value = ''; // Clear input
    // Here you would typically send the message to the server and get a response
});