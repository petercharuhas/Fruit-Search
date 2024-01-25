document.addEventListener('DOMContentLoaded', function () {
    const suggestionsBox = document.querySelector(".suggestions ul");
    const inputBox = document.getElementById("fruit");

    inputBox.addEventListener('input', function () {
        let result = [];
        let input = inputBox.value;
        if (input.length) {
            result = availableKeywords.filter((keyword) => {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }
        display(result);
    });

    function display(result) {
        const content = result.map((list) => {
            return "<li>" + list + "</li>";
        });

        suggestionsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }
});



