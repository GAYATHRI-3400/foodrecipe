// Function to show the recipe details in the modal
function showRecipeDetails(button) {
    const mealItem = button.closest('.meal-item');

    // Get the details of the meal from the data attributes
    const name = mealItem.getAttribute('data-name');
    const category = mealItem.getAttribute('data-category');
    const ingredients = mealItem.getAttribute('data-ingredients');
    const instructions = mealItem.getAttribute('data-instructions');
    const preparation = mealItem.getAttribute('data-preparation');

    // Update the modal content with the meal details
    document.getElementById('recipe-title').textContent = name;
    document.getElementById('recipe-category').textContent = category;
    document.getElementById('recipe-ingredients').textContent = ingredients;
    document.getElementById('recipe-instructions').textContent = instructions;
    document.getElementById('recipe-preparation').textContent = preparation;

    // Show the modal
    document.getElementById('recipe-modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('recipe-modal').style.display = 'none';
}

// Function to filter and display meals based on the search input
document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const mealItems = document.querySelectorAll('.meal-item');

    mealItems.forEach(function(mealItem) {
        const name = mealItem.getAttribute('data-name').toLowerCase();
        
        // Check if the query matches the meal name
        if (name.includes(query)) {
            mealItem.style.display = 'block';  // Show matching meal
        } else {
            mealItem.style.display = 'none';   // Hide non-matching meals
        }
    });
});

