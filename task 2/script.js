// ---------- Mobile tab menu toggle ----------
document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("menuBtn");
  var tabs = document.querySelector(".tabbar__tabs");
  if (menuBtn && tabs) {
    menuBtn.addEventListener("click", function () {
      tabs.classList.toggle("open");
    });
  }

  // ---------- Hero typewriter effect (home page only) ----------
  var typedEl = document.getElementById("typedCode");
  if (typedEl) {
    var lines = [
      { key: "const", name: " developer", punc: " = {" },
    ];
    var codeHTML =
      '<span class="tok-kw">const</span> developer <span class="tok-punc">=</span> {\n' +
      '  <span class="tok-key">name</span><span class="tok-punc">:</span> <span class="tok-str">"Aditya Singh"</span>,\n' +
      '  <span class="tok-key">role</span><span class="tok-punc">:</span> <span class="tok-str">"Full Stack Intern"</span>,\n' +
      '  <span class="tok-key">stack</span><span class="tok-punc">:</span> [<span class="tok-str">"React"</span>, <span class="tok-str">"Node"</span>, <span class="tok-str">"MongoDB"</span>],\n' +
      '  <span class="tok-key">status</span><span class="tok-punc">:</span> <span class="tok-str">"Building..."</span>\n' +
      "};";

    // Type it out character by character (tags treated as atomic chunks)
    var i = 0;
    var speed = 10; // ms per chunk
    var buffer = "";
    var chunks = codeHTML.split(/(<[^>]+>)/g).filter(Boolean);

    function typeNext() {
      if (i < chunks.length) {
        buffer += chunks[i];
        typedEl.innerHTML = buffer + '<span class="cursor">&nbsp;</span>';
        i++;
        setTimeout(typeNext, speed);
      } else {
        typedEl.innerHTML = buffer + '<span class="cursor">&nbsp;</span>';
      }
    }
    typeNext();
  }

  // ---------- Contact form validation ----------
  var form = document.forms["contactForm"];
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateForm()) {
        var note = document.getElementById("formNote");
        note.textContent = "Message sent — thanks, I'll get back to you soon.";
        note.className = "form-note success";
        form.reset();
      }
    });
  }
});

function validateForm() {
  var name = document.forms["contactForm"]["name"].value.trim();
  var email = document.forms["contactForm"]["email"].value.trim();
  var note = document.getElementById("formNote");

  if (name === "" || email === "") {
    alert("Name and Email must be filled out!");
    if (note) {
      note.textContent = "Please fill in both name and email.";
      note.className = "form-note error";
    }
    return false;
  }
  return true;
}