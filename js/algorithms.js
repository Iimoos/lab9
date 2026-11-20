// 1. 1-ээс n хүртэлх тоонуудын нийлбэр
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// 2. n тооны факториал (n!)
function factorial(n) {
  if (n < 0) return null;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 3. Анхны тоо мөн эсэхийг шалгах
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 4. FizzBuzz (1-ээс n хүртэл массив буцаана)
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[result.length] = "FizzBuzz";
    } else if (i % 3 === 0) {
      result[result.length] = "Fizz";
    } else if (i % 5 === 0) {
      result[result.length] = "Buzz";
    } else {
      result[result.length] = i;
    }
  }
  return result;
}

// 5. Текст доторх эгшиг үсгийг тоолох (Латин болон Кирилл)
function countVowels(str) {
  const vowels = "aeiouAEIOUаэиоуөүяеёюАЭИОУӨҮЯЕЁЮ";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}

// 6. Палиндром мөн эсэхийг шалгах (хоёр талаас нь уншихад ижил)
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// 7. Массив дотроос хамгийн их утгыг олох
function maxOf(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 8. Тооны цифрүүдийн нийлбэрийг олох
function digitSum(n) {
  if (n < 0) n = -n; // Сөрөг тоо байвал эерэг болгоно
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = (n - (n % 10)) / 10; // Math.floor хэрэглэхгүйгээр бүхэл хэсгийг авах арга
  }
  return sum;
}
