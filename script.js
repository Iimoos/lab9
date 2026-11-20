// === 1. Хувьсагч, төрөл, хөрвүүлэлтийн туршилт ===
console.log("--- 0.1 + 0.2 туршилт ---");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004 гарна
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false гарна

// Төрөл ба хөрвүүлэлтийн хүснэгт
const turshiltData = [
  { utga: "Сайн уу", turul: typeof "Сайн уу", hurvuulsen: Boolean("Сайн уу") },
  { utga: 42, turul: typeof 42, hurvuulsen: String(42) },
  { utga: "123", turul: typeof "123", hurvuulsen: Number("123") },
  { utga: true, turul: typeof true, hurvuulsen: Number(true) },
  { utga: null, turul: typeof null, hurvuulsen: String(null) },
  { utga: undefined, turul: typeof undefined, hurvuulsen: Number(undefined) },
  { utga: 0.1 + 0.2, turul: typeof (0.1 + 0.2), hurvuulsen: Number((0.1 + 0.2).toFixed(1)) }
];

console.table(turshiltData);




// ===== 1. Hamburger цэс =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const open = navMenu.classList.toggle('open');
        menuToggle.classList.toggle('active', open);
        menuToggle.setAttribute('aria-expanded', open);
    });
}

// ===== 2. Dark mode (theme товч) =====
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const dark = theme === 'dark';
    themeToggle.setAttribute('aria-pressed', dark);
    themeLabel.textContent = dark ? 'Өдөр' : 'Шөнө';
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) {}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
});

// ===== 3. Flip товч (3D flip card) =====
document.querySelectorAll('.flip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = document.getElementById(btn.getAttribute('aria-controls'));
        const flipped = card.classList.toggle('is-flipped');
        btn.setAttribute('aria-pressed', flipped);
        btn.textContent = flipped ? 'Буцаах' : 'Эргүүлэх';
    });
});

// ===== 4. Харагдац сонгогч (iframe урьдчилан харах) =====
if (window.self !== window.top) {
    document.body.classList.add('in-frame');
}

const vsButtons = document.querySelectorAll('#viewSwitcher button');
const overlay = document.getElementById('previewOverlay');
const frame = document.getElementById('previewFrame');

vsButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        vsButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.dataset.view;

        if (view === 'auto') {
            overlay.hidden = true;
            frame.removeAttribute('src');
            return;
        }
        frame.style.width = view + 'px';
        if (!frame.getAttribute('src')) {
            frame.src = location.href.split('#')[0];
        }
        overlay.hidden = false;
    });
});

// ===== 5. Санал хүсэлтийн форм ба Validation =====
const toggleBtn = document.getElementById("toggleFeedbackBtn");
const feedbackForm = document.getElementById("feedbackForm");

if (toggleBtn && feedbackForm) {
  // Товч дарахад формыг дэлгэх / хумих
  toggleBtn.addEventListener("click", () => {
    const isHidden = feedbackForm.style.display === "none";
    if (isHidden) {
      feedbackForm.style.display = "flex";
      toggleBtn.textContent = "Санал хүсэлт хаах ▲";
    } else {
      feedbackForm.style.display = "none";
      toggleBtn.textContent = "Санал хүсэлт илгээх ▼";
    }
  });

  // Формыг илгээх үед шалгах (Submit)
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Хуудас дахин ачаалахаас сэргийлнэ

    // Утгуудыг авах (таны HTML дээрх id-тай таарч байх ёстой)
    const nameVal = document.getElementById("name")?.value || "";
    const emailVal = document.getElementById("email")?.value || "";
    const passwordVal = document.getElementById("password")?.value || "";
    const messageVal = document.getElementById("message")?.value || "";

    // validators.js дээрх функцүүдийг дуудаж шалгах
    const nameErr = validateName(nameVal);
    const emailErr = validateEmail(emailVal);
    const passwordErr = validatePassword(passwordVal);
    const messageErr = validateMessage(messageVal);

    // Алдааны мессежүүдийг дэлгэц дээр харуулах
    if (document.getElementById("nameError")) document.getElementById("nameError").textContent = nameErr;
    if (document.getElementById("emailError")) document.getElementById("emailError").textContent = emailErr;
    if (document.getElementById("passwordError")) document.getElementById("passwordError").textContent = passwordErr;
    if (document.getElementById("messageError")) document.getElementById("messageError").textContent = messageErr;

    const successMsg = document.getElementById("formSuccess");

    // Бүх талбар алдаагүй (хоосон текст буцаасан) бол амжилттай мессеж харуулна
    if (!nameErr && !emailErr && !passwordErr && !messageErr) {
      if (successMsg) successMsg.textContent = "Таны санал хүсэлт илгээгдлээ! Баярлалаа.";
      feedbackForm.reset(); // Формыг цэвэрлэх
    } else {
      if (successMsg) successMsg.textContent = "";
    }
  });
}



// === 2. Алгоритмын функцүүдийн шалгалт ===
console.log("sumTo(5):", sumTo(5));               // 15
console.log("factorial(5):", factorial(5));       // 120
console.log("isPrime(7):", isPrime(7));           // true
console.log("fizzBuzz(5):", fizzBuzz(5));         // [1, 2, "Fizz", 4, "Buzz"]
console.log("countVowels('Сайн уу'):", countVowels("Сайн уу")); // 3
console.log("isPalindrome('хадах'):", isPalindrome("хадах"));   // true
console.log("maxOf([3, 9, 2]):", maxOf([3, 9, 2]));             // 9
console.log("digitSum(123):", digitSum(123));     // 6


const messageBox = document.getElementById("message");
const charCount = document.getElementById("charCount");

if (messageBox) {
  messageBox.addEventListener("input", function () {
    // Хайрцаг өөрөө өндөр болох (150px хүртэл)
    this.style.height = "auto";
    this.style.height = Math.min(this.scrollHeight, 150) + "px";
    
    // Тэмдэгтийн тоог шинэчлэх
    if (charCount) {
      charCount.textContent = this.value.length;
    }
  });
}
