window.onload = () => {
    // --- BODY STYLING ---
    const body = document.body;
    body.style.margin = "0";
    body.style.padding = "20px";
    body.style.background = "#0b0b0b";
    body.style.fontFamily = "Arial, sans-serif";
    body.style.color = "white";
    body.style.display = "flex";
    body.style.justifyContent = "center";

    // --- CONTAINER ---
    const container = document.createElement("div");
    container.className = "container";
    container.style.width = "100%";
    container.style.maxWidth = "520px";
    container.style.background = "#121212";
    container.style.padding = "25px";
    container.style.borderRadius = "16px";
    container.style.boxShadow = "0 8px 25px rgba(0,0,0,0.7)";
    body.appendChild(container);

    // --- LOGO ---
    const logo = document.createElement("img");
    logo.className = "logo";
    logo.src = "https://raw.githubusercontent.com/kielsvu/Utility/Lua/Icons/IMG_20260101_195045.jpg"; // raw link
    logo.style.width = "100%";
    logo.style.aspectRatio = "16 / 9";
    logo.style.objectFit = "cover";
    logo.style.borderRadius = "18px";
    logo.style.marginBottom = "10px";
    container.appendChild(logo);

    // --- HEADER ---
    const header = document.createElement("div");
    header.className = "header";
    header.style.textAlign = "center";
    header.style.marginBottom = "12px";
    container.appendChild(header);

    const h1 = document.createElement("h1");
    h1.textContent = "TrustKiel BloxFruit Vouch";
    h1.style.margin = "0";
    h1.style.fontSize = "22px";
    h1.style.color = "#f43f5e";
    header.appendChild(h1);

    const sub = document.createElement("div");
    sub.id = "totalVouches";
    sub.style.fontSize = "14px";
    sub.style.color = "#facc15";
    header.appendChild(sub);

    // --- VOUCH DATA ---
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

    // --- CSS STYLES FOR VOUCH ---
    const style = document.createElement("style");
    style.textContent = `
    .section { margin-top:20px; }
    .section h2 { font-size:16px; color:#34d399; border-bottom:1px solid #555; padding-bottom:4px; margin-bottom:10px; }
    .vouch { background:#1a1a1a; border-radius:12px; padding:12px; margin-bottom:12px; font-size:13px; }
    .userid { color:#f43f5e; font-weight:bold; }
    .service { color:#facc15; margin-top:4px; }
    .feedback { color:#ddd; margin-top:4px; }
    .rating { color:#38bdf8; margin-top:4px; }
    .price { color:#34d399; margin-top:4px; }
    .date { color:#888; margin-top:4px; font-size:12px; }
    `;
    document.head.appendChild(style);

    // --- RENDER VOUCHES ---
    let total = 0;
    for (const sectionName in data) {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "section";

        const secTitle = document.createElement("h2");
        secTitle.textContent = sectionName;
        sectionDiv.appendChild(secTitle);

        data[sectionName].forEach(v => {
            total++;
            const vouchDiv = document.createElement("div");
            vouchDiv.className = "vouch";

            vouchDiv.innerHTML = `
            <div class="userid">Discord ID: ${v[0]}</div>
            <div class="service">${v[1]}</div>
            <div class="feedback">${v[2]}</div>
            <div class="rating">${v[3]}</div>
            <div class="price">${v[4]}</div>
            <div class="date">${v[5]}</div>
            `;
            sectionDiv.appendChild(vouchDiv);
        });

        container.appendChild(sectionDiv);
    }

    sub.textContent = "Total Unlisted Vouches: " + total;
};
