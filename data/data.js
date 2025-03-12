let data = [
    {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
    },
];

const maleImgsrc = "../DESKTOP-IMG/maleProfile.jpg";
const femaleImgsrc = "../DESKTOP-IMG/femaleProfile.jpg";

const select = document.querySelector(".select");

let card;

function showDataContent(items) {
    card = items.map((content) => {
        if (content.gender === "male") {
            return `<div class="card">
        <img src="${maleImgsrc}" alt="#" />
        <div class="name">J${content.fullName}</div>
        <div class="destination">${content.designation}</div>
    </div>`;
        } else {
            return `<div class="card">
        <img src="${femaleImgsrc}" alt="#" />
        <div class="name">J${content.fullName}</div>
        <div class="destination">${content.designation}</div>
    </div>`;
        }
    });
    document.querySelector(".card-container").innerHTML = card.join("");
}

showDataContent(data);

function grabDataType() {
    let showoffopt = data.reduce(
        (arr, value) => {
            if (!arr.includes(value.teamName)) {
                arr.push(value.teamName);
            }
            return arr;
        },
        ["ALL"]
    );
    showoffopt = showoffopt.map((name) => {
        if (name === "ALL") {
            return `<option value="${name}">${name}</option>`;
        } else {
            return `<option value="${name}">${name.slice(
                0,
                -1
            )}&ThinSpace;&ThinSpace;${name.slice(-1)}</option>`;
        }
    });
    select.innerHTML = showoffopt.join("");

    select.addEventListener("change", (e) => {
        const newData = data.filter((content) => {
            if (content.teamName === e.target.value) {
                return content;
            }
        });
        if (e.target.value === "ALL") {
            showDataContent(data);
        } else {
            showDataContent(newData);
        }
    });
}

grabDataType();
