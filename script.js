const inputEmail = document.querySelector(".input-email");
const inputotp = document.querySelector(".input-otp");
const btnsubmit = document.querySelector(".buttonSubmit");
const btnotp = document.querySelector(".buttonOTP");

function Otpgenerator() {
  return Math.floor(100000 + Math.random() * 900000);
}
function sendEmail(_email, onetimepass) {
  console.log(_email, onetimepass);
  Email.send({
    SecureToken: "5af4f914-5d2d-47de-92f4-c9728dd4ac35",
    To: _email,
    From: "priyank8770534@gmail.com",
    Subject: "OTP for Login",
    Body: `Thankyou for connecting with us your OTP is ${onetimepass}`,
  }).then((message) => alert("mail sent successfully"));
}
let onetimepass;
btnotp.addEventListener("click", function (e) {
  e.preventDefault();
  onetimepass = Otpgenerator();
  sendEmail(String(inputEmail.value), Number(onetimepass));
});

btnsubmit.addEventListener("click", function (c) {
  c.preventDefault();
  if (Number(inputotp.value) === onetimepass) {
    inputEmail.value = "";
    inputotp.value = "";
    alert("Email verified.");
  } else {
    alert("Invalid Credentials!!");
  }
});
