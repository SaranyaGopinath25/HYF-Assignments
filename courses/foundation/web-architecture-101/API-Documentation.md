# Swagger API Documentation

## Recipe Collection App

Design the architecture for a simple recipe collection application where users can manage their favorite recipes.

## Requirements

The app should allow users to:

**Create:** Add a new recipe (title, ingredients, instructions)

**Read:** View all recipes and individual recipe details

**Update:** Edit existing recipes

**Delete:** Remove recipes they no longer want

## Table Of Contents

1. Get All Recipes
2. Add a new Recipe
3. Get a specific recipe
4. Edit an existing recipe
5. Delete a recipe

## Recipe App APIs

### 1. Get All Recipes

- **Endpoint:** `GET /api/recipes`
- **Description:** Retrieve a list of all recipes.
- **Response:**

  ```json
  [ 
    {
      "id": 1,
      "title": "Recipe 1 Title",
      "ingredients": ["ingredient1", "ingredient2"],
      "instructions": "Recipe 1 Instruction"
    },
    {
      "id": 2,
      "title": "Recipe 2 Title",
      "ingredients": ["ingredient1", "ingredient2"],
      "instructions": "Recipe 2 Instruction"
    }
  ]
  ```

### 2. Add a new Recipe

- **Endpoint:** `POST /api/recipes`
- **Description:** Add a new recipe.
- **Request Body:**

  ```json
    {
      "title": "Recipe 3 Title",
      "ingredients": ["ingredient1", "ingredient2"],
      "instructions": "Recipe 3 Instruction"
    }
  ```

- **Response:**

  ```json
    {
      "id": 3,
      "title": "Recipe 3 Title",
      "ingredients": ["ingredient1", "ingredient2"],
      "instructions": "Recipe 3 Instruction"
    }
  ```  

### 3. Get a specific recipe

- **Endpoint:** `GET api/recipes/{id}`
- **Description:** Retrieve details of a specific recipe by its ID.
- **Response:**

  ```json
    {
      "id": 1,
      "title": "Recipe 1 Title",
      "ingredients": ["ingredient1", "ingredient2"],
      "instructions": "Recipe 1 Instruction"
    }
  ```

### 4. Edit an existing recipe

- **Endpoint:** `PUT api/recipes/{id}`
- **Description:** Update the details of an existing recipe.
- **Request Body:**

  ```json
    {
      "title": "Recipe 1 Updated Title",
      "ingredients": ["ingredient1", "ingredient2","ingredient3"],
      "instructions": "Recipe 1 Updated Instruction"
    }
  ```

- **Response:**

  ```json
    {
      "id": 1,
      "title": "Recipe 1 Updated Title",
      "ingredients": ["ingredient1", "ingredient2","ingredient3"],
      "instructions": "Recipe 1 Updated Instruction"
    }
  ```

### 5. Delete a recipe

- **Endpoint:** `DELETE /api/recipes/{id}`
- **Description:** Delete a recipe by its ID.
- **Response:**

  ```json
    {
      "message": "Recipe with id 1 has been deleted."
    }
  ```
