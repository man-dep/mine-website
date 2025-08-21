document.addEventListener("DOMContentLoaded", loadSubmissions);

function loadSubmissions() {
    let tableBody = document.querySelector(".rqst-cont");

    if (!tableBody) {
        console.error("Error: .rqst-cont element not found!");
        return;
    }

    fetch("load_submissions.php")
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = ""; // Clear container
            console.log(data);

            if (!data || data.length === 0) {
                tableBody.innerHTML = `
                    <div class="rqst-box">
                        <h1 class="text-center">0 Requests</h1>
                    </div>
                `;
            } else {
                data.forEach(submission => {
                    let row = `
                        <div class="rqst-box">
                            <div><strong>ID:</strong> ${submission.id}</div>
                            <div><strong>Name:</strong> ${submission.name}</div>
                            <div><strong>DOB:</strong> ${submission.dob} (${calculateAge(submission.dob)} years old)</div>
                            <div><strong>Gender:</strong> ${submission.gender}</div>
                            <div><strong>Class:</strong> ${submission.class}</div>
                            <div><strong>Father:</strong> ${submission.father_name}</div>
                            <div><strong>Mother:</strong> ${submission.mother_name}</div>
                            <div><strong>Contact:</strong> ${submission.contact}</div>
                            <div><strong>Address:</strong> ${submission.address}</div>
                            <div><strong>Submitted:</strong> ${timeSince(submission.submitted_at)}</div>
                            ${submission.photo ? `<img src="${submission.photo}" class="std-img" alt="Student Photo" style="width:100px;height:100px;cursor:pointer;border-radius:50%;transition:0.3s;">` : ''}
                        </div>
                    `;
                    tableBody.innerHTML += row;
                });

                // Apply zoom effect only if images exist
                document.querySelectorAll('.std-img').forEach(img => {
                    img.addEventListener('click', event => {
                        let target = event.target;
                        const isZoomed = target.style.transform === 'scale(5)';
                        target.style.transform = isZoomed ? 'scale(1)' : 'scale(5)';
                        target.style.position = 'relative';
                        target.style.borderRadius = isZoomed ? '50%' : '0';
                        target.style.zIndex = isZoomed ? '0' : '100';
                    });
                });
            }
        })
        .catch(error => console.error("Error fetching submissions:", error));
}

function timeSince(startDateString) {
    const startDate = new Date(startDateString);
    const now = new Date();

    const seconds = Math.floor((now - startDate) / 1000);
    if (seconds < 60) return `${seconds} second${seconds === 1 ? '' : 's'} ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;

    const days = Math.floor(hours / 24);
    if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`;

    const months = Math.floor(days / 30);
    return `${months} month${months === 1 ? '' : 's'} ago`;
}

function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}
