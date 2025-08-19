function generateQRCode() {
      let text = document.getElementById("text").value;
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = ""; // eski kodni tozalash
      if (text.trim() !== "") {
        new QRCode(qrcodeContainer, {
          text: text,
          width: 200,
          height: 200,
          colorDark: "#000000",
          colorLight: "#ffffff"
        });
      } else {
        alert("Iltimos, matn yoki url kiriting!");
      }
    }