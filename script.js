let internships = JSON.parse(localStorage.getItem("internships")) || [];

function addInternship() {

    let name = document.getElementById("name").value;
    let college = document.getElementById("college").value;
    let company = document.getElementById("company").value;
    let role = document.getElementById("role").value;
    let startDate = document.getElementById("startDate").value;

    if (name === "" || college === "" || company === "" || role === "" || startDate === "") {
        alert("Please fill all fields");
        return;
    }

    let internship = {
        name: name,
        college: college,
        company: company,
        role: role,
        startDate: startDate
    };

    internships.push(internship);

    localStorage.setItem("internships", JSON.stringify(internships));

    document.getElementById("name").value = "";
    document.getElementById("college").value = "";
    document.getElementById("company").value = "";
    document.getElementById("role").value = "";
    document.getElementById("startDate").value = "";

    displayInternships();
}

function displayInternships() {

    let list = document.getElementById("internshipList");
    let search = document.getElementById("search").value.toLowerCase();

    list.innerHTML = "";

    let filtered = internships.filter(function(internship) {
        return internship.name.toLowerCase().includes(search);
    });

    filtered.forEach(function(internship, index) {

        let row = `
            <tr>
                <td>${internship.name}</td>
                <td>${internship.college}</td>
                <td>${internship.company}</td>
                <td>${internship.role}</td>
                <td>${internship.startDate}</td>
                <td>
                    <button class="delete-btn"
                    onclick="deleteInternship(${index})">
                    Delete
                    </button>
                </td>
            </tr>
        `;

        list.innerHTML += row;
    });

    document.getElementById("total").innerText = internships.length;
}

function deleteInternship(index) {

    internships.splice(index, 1);

    localStorage.setItem("internships", JSON.stringify(internships));

    displayInternships();
}

displayInternships();