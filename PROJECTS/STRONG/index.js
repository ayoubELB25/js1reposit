var pass = document.getElementById("password");
var mssg = document.getElementById("message");
var str = document.getElementById("strength");
var togglePassword = document.getElementById("togglePassword");

pass.addEventListener("input", function() {
  var val = pass.value;
  var len = val.length;
  var hasUpper = /[A-Z]/.test(val);
  var hasLower = /[a-z]/.test(val);
  var hasNumber = /[0-9]/.test(val);
  var hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(val);

  if (len > 8 && hasUpper && hasLower && hasNumber && hasSpecial) {
    str.innerHTML = "Strong";
    str.style.color = "green";
    mssg.style.color = "green";
    pass.style.borderColor = "green";
  } else if (len > 4 && (hasUpper || hasLower) && (hasNumber || hasSpecial)) {
    str.innerHTML = "Medium";
    str.style.color = "yellow";
    mssg.style.color = "yellow";
    pass.style.borderColor = "yellow";
  } else {
    str.innerHTML = "Weak";
    str.style.color = "red";
    mssg.style.color = "red";
    pass.style.borderColor = "red";
  }

    if (len > 0) {
        mssg.style.display = "block";
      } else {
        mssg.style.display = "none";
        pass.style.borderColor = "white";
        
    }

});

togglePassword.addEventListener("click", function() {
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
    
    var icon = this.querySelector('i');
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
  });




