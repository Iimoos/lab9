// 1. Нэр шалгах: Хоёр захын зайг хасна. Хоосон биш, 2–50 тэмдэгт, тоо агуулахгүй.
function validateName(value) {
  const trimmed = value.trim();
  if (trimmed === "") {
    return "Нэр хоосон байж болохгүй.";
  }
  if (trimmed.length < 2 || trimmed.length > 50) {
    return "Нэр 2–50 тэмдэгтийн урттай байх ёстой.";
  }
  // Тоо агуулсан эсэхийг шалгах (0-9)
  if (/\d/.test(trimmed)) {
    return "Нэр дотор тоо орж болохгүй.";
  }
  return ""; // Алдаагүй
}

// 2. Имэйл шалгах: Хоосон биш; «нэр@домэйн.өргөтгөл» хэлбэр (regex); зай агуулахгүй.
function validateEmail(value) {
  if (value === "") {
    return "Имэйл хаяг хоосон байж болохгүй.";
  }
  if (/\s/.test(value)) {
    return "Имэйл хаяг дотор хоосон зай байж болохгүй.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return "Имэйл хаяг «нэр@домэйн.өргөтгөл» хэлбэртэй байх ёстой.";
  }
  return ""; // Алдаагүй
}

// 3. Нууц үг шалгах: Дор хаяж 8 тэмдэгт; хоосон зайгүй; үсэг (кирилл эсвэл латин) ба тоо агуулна.
function validatePassword(value) {
  if (value.length < 8) {
    return "Нууц үг дор хаяж 8 тэмдэгттэй байх ёстой.";
  }
  if (/\s/.test(value)) {
    return "Нууц үг дотор хоосон зай байж болохгүй.";
  }
  const hasLetter = /[a-zA-Zа-яА-ЯөӨүҮёЁ]/.test(value);
  const hasNumber = /\d/.test(value);
  if (!hasLetter || !hasNumber) {
    return "Нууц үг дотор үсэг болон тоо заавал орсон байх ёстой.";
  }
  return ""; // Алдаагүй
}

// 4. Мессеж шалгах: Хоёр захын зайг хасна. 10–500 тэмдэгт.
function validateMessage(value) {
  const trimmed = value.trim();
  if (trimmed.length < 10 || trimmed.length > 500) {
    return "Санал хүсэлт 10–500 тэмдэгтийн урттай байх ёстой.";
  }
  return ""; // Алдаагүй
}
