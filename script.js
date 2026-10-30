
/* ==========================================
   G8TE OFFICIAL CERTIFICATE LOGO
========================================== */

const g8teCertificateLogo = new Image();
g8teCertificateLogo.src = "g8te-logo.png";

// Preserve the existing certificate design.
const originalDrawG8TECertificate = drawCertificate;

// Add the logo after drawing the original certificate.
drawCertificate = function () {

    originalDrawG8TECertificate();

    if (
        !g8teCertificateLogo.complete ||
        g8teCertificateLogo.naturalWidth === 0
    ) {
        return;
    }

    const canvas = document.getElementById(
        "certificate-canvas"
    );

    const ctx = canvas.getContext("2d");

    // Upper-left logo position.
    const logoX = 75;
    const logoY = 75;
    const logoWidth = 105;
    const logoHeight = 105;

    // White background behind the logo.
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(
        logoX - 5,
        logoY - 5,
        logoWidth + 10,
        logoHeight + 10
    );

    // Draw the official G8TE logo.
    ctx.drawImage(
        g8teCertificateLogo,
        logoX,
        logoY,
        logoWidth,
        logoHeight
    );
};

// Refresh certificate when logo finishes loading.
g8teCertificateLogo.onload = function () {

    const certificateScreen = document.getElementById(
        "certificate-screen"
    );

    if (
        certificateScreen &&
        !certificateScreen.classList.contains("hidden")
    ) {
        drawCertificate();
    }
};

// Preserve the existing download behavior.
const originalDownloadG8TECertificate =
    downloadCertificate;

// Ensure the logo is loaded before downloading.
downloadCertificate = function () {

    if (
        g8teCertificateLogo.complete &&
        g8teCertificateLogo.naturalWidth > 0
    ) {

        drawCertificate();
        originalDownloadG8TECertificate();

    } else {

        alert(
            "The G8TE logo is still loading. Please try again in a moment."
        );

    }
};
