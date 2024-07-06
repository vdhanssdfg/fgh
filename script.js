const medicationSchedule = [
    {
        day: "Day 1",
        medications: [
            { name: "Tab Faroalfa (Faropenam)", dosage: "200mg", timing: "A/F 1-0-1" },
            { name: "Tab Rantac (Ranitidine)", dosage: "150mg", timing: "B/F 1-0-0" },
            { name: "Tab Nodosis (Sodium Bicarbonate)", dosage: "500mg", timing: "A/F 1-1-1" },
            { name: "Tab Atorva (Atorvastatin)", dosage: "40mg", timing: "A/F 0-0-1" }
        ]
    },
    {
        day: "Day 2",
        medications: [
            { name: "Tab Proninty (Probiotics)", timing: "A/F 1-0-1" },
            { name: "Tab Pulmoclear (Acebrophylline)", timing: "A/F 1-0-1" },
            { name: "Tab Buxostat (Febuxostat)", timing: "A/F 1-0-1" },
            { name: "Tab Doxobid (Doxofylline)", dosage: "400mg", timing: "A/F 1/2-0-1/2" }
        ]
    },
    {
        day: "Day 3",
        medications: [
            { name: "Tab Ivabrad (Cortanor)", dosage: "5mg", timing: "A/F 1-0-1" },
            { name: "Tab Ecospirin (Ecosprin)", dosage: "75mg", timing: "P/O 0-1-0 (WITH HOLD)" },
            { name: "Tab Clopilet", dosage: "75mg", timing: "P/O 0-1-0 (WITH HOLD)" }
        ]
    },
    {
        day: "Day 4",
        medications: [
            { name: "Tab Dytor (Torsemide)", dosage: "10mg", timing: "A/F 1-1-0" },
            { name: "Tab Planep (Eplerenone)", dosage: "25mg", timing: "A/F 0-1-0" },
            { name: "Tab Nexitoplus (Clonazepam and Escitalopram)", timing: "A/F 0-0-1" }
        ]
    },
    {
        day: "Day 5",
        medications: [
            { name: "Tab Riboclayin", dosage: "10mg", timing: "A/F 2-2-2" },
            { name: "Jol Budcort (Budecort)", timing: "A/F 1-0-1" },
            { name: "Tab Trajenta", timing: "SMG A/F 1-0-0" }
        ]
    },
    {
        day: "Day 6",
        medications: [
            { name: "Syp Cremaffin Plus (Milk of Magnesia)", dosage: "20ml", timing: "A/F 0-0-1" },
            { name: "Steam Inhalation", timing: "P/N 1-0-1" },
            { name: "Betadine Gargle", timing: "P/O 1-1-1" }
        ]
    },
    {
        day: "Day 7",
        medications: [
            // Adjust as per your actual schedule for day 7
        ]
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const medicationList = document.getElementById("medication-list");

    // Display medication schedule
    medicationSchedule.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.classList.add("medication-item");

        const title = document.createElement("h3");
        title.textContent = day.day;
        dayElement.appendChild(title);

        day.medications.forEach(med => {
            const medInfo = document.createElement("p");
            medInfo.textContent = `${med.name} - ${med.dosage ? `${med.dosage} ` : ''}${med.timing}`;
            dayElement.appendChild(medInfo);
        });

        medicationList.appendChild(dayElement);
    });

    // Function to show reminder (not implemented here, but could be added)
    function showReminder(message) {
        alert(message);
    }

    // Example reminder after 3 seconds (for demonstration purposes)
    setTimeout(function() {
        showReminder("Reminder: Take your medications now!");
    }, 3000);
});
