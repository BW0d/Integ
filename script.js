// Toggle section open/close
function toggleContent(header) {
  const content = header.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
    header.textContent = header.textContent.replace('▲','▼');
  } else {
    content.style.display = "block";
    header.textContent = header.textContent.replace('▼','▲');
  }
}

// Simple quiz check
function checkQuiz(button, correct) {
  const result = button.parentElement.querySelector(".quiz-result");
  if (correct) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Try again!";
    result.style.color = "red";
  }
}
