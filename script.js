const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




function calculatePeriod() {

    const lastPeriodInput = document.getElementById("lastPeriod").value;
    const cycleLength = parseInt(document.getElementById("cycleLength").value);
    const periodLength = parseInt(document.getElementById("periodLength").value);

    const resultText = document.getElementById("resultText");

    // Validation
    if (!lastPeriodInput || !cycleLength || !periodLength) {
        resultText.innerHTML = "Please fill in all fields correctly.";
        return;
    }

    // Convert date
    const lastPeriodDate = new Date(lastPeriodInput);

    // Next period calculation
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

    // Ovulation (usually 14 days before next period)
    const ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(ovulationDate.getDate() - 14);

    // Fertile window (5 days before ovulation + ovulation day)
    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(fertileStart.getDate() - 5);

    const fertileEnd = new Date(ovulationDate);

    // Format dates
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const nextPeriod = nextPeriodDate.toLocaleDateString(undefined, options);
    const ovulation = ovulationDate.toLocaleDateString(undefined, options);
    const fertile1 = fertileStart.toLocaleDateString(undefined, options);
    const fertile2 = fertileEnd.toLocaleDateString(undefined, options);

    // Output result
    resultText.innerHTML = `
        <strong>Next Period:</strong> ${nextPeriod}<br>
        <strong>Ovulation Day:</strong> ${ovulation}<br>
        <strong>Fertile Window:</strong> ${fertile1} - ${fertile2}
    `;
}




const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // Close other open items (optional but more professional UX)
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        // Toggle current item
        item.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

});