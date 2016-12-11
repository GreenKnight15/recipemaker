export var Recipe = (function () {
    function Recipe(Id, title, userId, description, ingredients, steps, meal, category, imageUrl, reviews, userImg, likes, dateCreated) {
        this.Id = Id;
        this.title = title;
        this.userId = userId;
        this.description = description;
        this.ingredients = ingredients;
        this.steps = steps;
        this.meal = meal;
        this.category = category;
        this.imageUrl = imageUrl;
        this.reviews = reviews;
        this.userImg = userImg;
        this.likes = likes;
        this.dateCreated = dateCreated;
    }
    return Recipe;
}());
//# sourceMappingURL=recipe.js.map