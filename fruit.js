document.addEventListener('DOMContentLoaded', function () {
  console.log("Input event triggered");
  const suggestionsBox = document.querySelector(".suggestions ul");
  const inputBox = document.getElementById("fruit");
  const availableKeywords = ["apple", "banana", "orange", "mango", "grape", "pineapple", "cherry", "strawberry", "blueberry", "kiwi"];

  inputBox.addEventListener('input', function () {
    let input = inputBox.value.trim().toLowerCase();
    let result = customSearch(input, availableKeywords);
    display(result);
  });

  function customSearch(str, array) {
    return array.filter(keyword =>
      keyword.toLowerCase().includes(str)
    );
  }
  function display(result) {
      const content = result.map(item => `<li>${item}</li>`).join('');
      suggestionsBox.innerHTML = content;
      
      // Get the parent .suggestions div
      const suggestionsContainer = suggestionsBox.parentElement;
  
      if (result.length > 0) {
          suggestionsContainer.classList.add('has-suggestions');
      } else {
          suggestionsContainer.classList.remove('has-suggestions');
      }
  }
  
  
});

  




