document.body.style.margin = "0";
document.body.style.padding = "20px";
document.body.style.background = "#0b0b0b";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.color = "white";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";

document.body.innerHTML = `
<style>
.container {
    width: 100%;
    max-width: 520px;
    background: #121212;
    padding: 25px;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.7);
}
.logo {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 18px;
    margin-bottom: 10px;
}
.header {
    text-align: center;
    margin-bottom: 12px;
}
.header h1 {
    margin: 0;
    font-size: 22px;
    color: #f43f5e;
}
.sub {
    font-size: 14px;
    color: #facc15;
}
.section {
    margin-top: 20px;
}
.section h2 {
    font-size: 16px;
    color: #34d399;
    border-bottom: 1px solid #555;
    padding-bottom: 4px;
    margin-bottom: 10px;
}
.vouch {
    background: #1a1a1a;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 12px;
    font-size: 13px;
}
.userid { color: #f43f5e; font-weight: bold; }
.service { color: #facc15; margin-top: 4px; }
.feedback { color: #ddd; margin-top: 4px; }
.rating { color: #38bdf8; margin-top: 4px; }
.price { color: #34d399; margin-top: 4px; }
.date { color: #888; margin-top: 4px; font-size: 12px; }
</style>

<div class="container" id="app">
    <img class="logo" src="https://raw.githubusercontent.com/kielsvu/Utility/Lua/Icons/IMG_20260101_195045.jpg">
    <div class="header">
        <h1>TrustKiel BloxFruit Vouch</h1>
        <div class="sub" id="total"></div>
    </div>
</div>
`;

const data = {
    "FULL GEAR": [
        ["1096000028826411120","Full Gear (Shark)","Trusted Piloter","10/10","₱160","Dec 06 2025"],
        ["1442138909399191653","Full Gear (Ghoul)","Trusted Piloter","10/10","₱160","Dec 29 2025"],
        ["1442138909399191653","Full Gear (Angel)","Legit Piloter","10/10","₱160","Dec 30 2025"],
        ["1043373780631830619","Full Gear (Cyborg)","Legit And Trusted Piloter","10/10","₱160","Dec 30 2025"],
        ["1442138909399191653","Full Gear (Human)","Trusted Piloter","10/10","₱160","Jan 01 2026"]
    ],
    "BLUE GEAR": [
        ["1442138909399191653","Blue Gear","Fast Service","10/10","₱60","Jan 31 2025"],
        ["1037901440938680350","Blue Gear","Fast and Trusted","10/10","₱60","Jan 02 2026"]
    ],
    "LEVI": [
        ["1037901440938680350","Levi (Tiki)","Spawned In Just 5mins, Legit","10/10","₱80","Dec 11 2025"]
    ]
};

let total = 0;
const app = document.getElementById("app");

for (const section in data) {
    const sec = document.createElement("div");
    sec.className = "section";
    sec.innerHTML = `<h2>${section}</h2>`;

    data[section].forEach(v => {
        total++;
        sec.innerHTML += `
        <div class="vouch">
            <div class="userid">Discord ID: ${v[0]}</div>
            <div class="service">${v[1]}</div>
            <div class="feedback">${v[2]}</div>
            <div class="rating">${v[3]}</div>
            <div class="price">${v[4]}</div>
            <div class="date">${v[5]}</div>
        </div>`;
    });

    app.appendChild(sec);
}

document.getElementById("total").textContent =
    "Total Unlisted Vouches: " + total;
