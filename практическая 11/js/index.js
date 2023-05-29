// oops nothing here //

const query = 'salad';
const id = '12bbb430';
const key = '8a325e0004a093bd7d73fa5839319ed6';

$.ajax({
    method: 'GET',
    url: `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&q=random&app_id=${id}&app_key=${key}`,
    method: 'GET',
    success: function(result) {
        console.log(result);
        result.hits.forEach(element => {

            $('.recepts_block').append(`
            <div class="recipe_item">
                <img src="${element.recipe.image}"/>
                <div class="recipe_info">
                    <p class="recipe_text_p">${element.recipe.label}</p>
                    <p class="recipe_text">${element.recipe.dietLabels}</p>
                    <ul class="ingridient_list">
                        <li>${element.recipe.ingredients[0].text}</li>
                        <li>${element.recipe.ingredients[1].text}</li>
                        <li>${element.recipe.ingredients[2].text}</li>
                        <li>${element.recipe.ingredients[3].text}</li>
                        <li>${element.recipe.ingredients[4].text}</li>
                    </ul>
                </div>
            </div>`)
        });
    }
});