# NourishHer(logo)

Weight Loss and Health Management Application!

## Objective:

This project aims to develop a comprehensive weight loss and health management application that provides users with essential tools and resources to support their weight loss journey. The target audience includes women and anyone seeking to lose weight and improve their health.

### Problem

I created this project to help people, especially women, who find it hard to get reliable weight loss information in one place. Many struggle to build healthy habits and track their progress. This app provides easy access to exercises, healthy foods, and a BMI calculator without all the membership fees.

### User Profile

The primary users of the app are women or/and anyone seeking to lose weight and improve their health.
They will use the app to:

- Log their workouts and track their fitness progress.
- Access nutritional recipes tailored to their fitness needs.
- View a list of weight loss exercises to help me stay active and healthy.

### Features

1. User Authentication: Secure login and registration system for personalized access.
2. Weight Loss Exercises: A list of effective exercises to aid in weight loss.
3. Healthy Food Recommendations: Suggestions for nutritious foods to support weight management.
4. BMI Calculator: Tool to calculate and monitor Body Mass Index for tracking health progress.

## User Stories

- As a user, I want to be able to create an account to access personalized features and track my weight loss progress.
- As a user, I want to be able to view a list of weight loss exercises to help me stay active and healthy.
- As a user, I want to be able to see recommendations for healthy foods to improve my diet and support my weight loss goals.
- As a user, I want to be able to use a BMI calculator to monitor my health metrics and track my progress.

## Implementation

### Tech Stack

1. Frontend: React
2. Backend: Express.js
3. Database: MongoDB
4. APIs: API for nutritional recipes and exercises
5. Libraries: _JWT for authentication_ (nice to have)

### APIs

API: To fetch nutritional food recipes and exercises:

- create user registration API
- create nutritional food API
- create exercise API

### Sitemap

- Home Page: Overview of the app and features.
- Sign Up/Log In: User authentication pages.
- Meal Log: Page to log new meals.
- Exercise Page: weight loss exercises to help me stay active and healthy .
- Nutritional Recipes: Browse and search for recipes.

### Mockups

#### Navbar

![Navbar](https://github.com/farheen-syed1/NourishHer/assets/168995397/a811a9a4-c2d6-465c-857c-86245176f260)

#### Home Page

![landing page]

#### Exercise Page

![Exercise Page]

#### Footer

![footer]

#### User Schema

![userschema]

#### Recipe Schema

![recipeschema]

#### Exercise Schema

![exerciseschema]

- User: { id, name, email, password, age, fitness_details }
- Meal: { id, user_id, date, name, calories, protein, carbohydrates ,steps how to make it},
- Recipe: { id, title, ingredients, instructions, image, meal_type }
- Progress: BMI Calculator
- Exerise:{id,Exercise name,calories burn,benefits,equipment,instruction}

### Endpoints

1.  User Authentication:

    - POST /api/register: Register a new user (Parameters: name, email, password,age)
    - POST /api/login: Log in an existing user( Parameters: email, password)

2.  Get weight loss Exercises:

    - GET /api/exercise: Fetch weight lose exercises

3.  Get weight loss Recipes:

    - GET /api/recipes: Fetch Health recipes

    SAMPLE:
    {  
     "id": "84e96018-4022-434e-80bf-000ce4cd12b8",
    "title": "Seared Tilapia",
    "name": "With Spiralized Zucchini",
    "image": "https://hips.hearstapps.com/hmg-prod/images/seared-tilapia-with-spiralized-zucchini-recipe-1621633031.png?crop=1xw:1xh;center,top&resize=640:*",
    "description": "Amp up spiralized zucchini with briny capers, fresh parsley, and bright lemon in this delicious summertime meal. For under 300 calories a plate, it’s a family favorite you’ll make again and again.",
    "duration": "25 mins",
    "likes": "22,479",

         "instructions": [
           {
             "id": "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
             "name": "Ingredients",
             "comment": "The ingredients for the tilapia and zucchini dish: 1 1/2 lb. zucchini, 3 Tbsp. olive oil (divided), kosher salt, pepper, 4 small fillets tilapia (about 1 1/2 lbs.), 1 lemon (thinly sliced and seeded), 2 cloves garlic (thinly sliced), 1 Tbsp. capers, and 1/2 cup fresh flat-leaf parsley (chopped)."
           },
           {
             "id": "091de676-61af-4ee6-90de-3a7a53af7521",
             "name": "Step 1",
             "comment": "Heat oven to 475°F. Line large rimmed baking sheet with reusable baking mat or parchment paper. Using spiralizer, spiralize zucchini, or slice zucchini into thin ribbons."
           },
           {
             "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
             "name": "Step 2",
             "comment": "Transfer zucchini to prepared baking sheet; toss with 1 tbsp. oil and 1/4 tsp. each salt and pepper. Roast 15 min. Increase heat to broil and continue to cook until golden brown, 3 to 4 min."
           }
           ,
           {
             "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
             "name": "Step 3",
             "comment": "Meanwhile, heat 1 tbsp. oil in large cast-iron skillet on medium-high. Season fish with 1/4 tsp. each salt and pepper and cook until just opaque throughout, 2 to 3 min. per side. Transfer to plates."
           }
           ,
           {
             "id": "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
             "name": "Step 4",
             "comment": "Add remaining tbsp. oil to skillet along with lemon, garlic, and capers and cook, stirring occasionally, until garlic is golden brown and tender. Toss with parsley, then spoon over tilapia and serve with zucchini."
           }
         ]

    }

### Auth

- Update UI for logged in users

## Roadmap

1. Set up Repo in Git Hub. (make public after work is done)
2. Create client: Set up React project with routes and boilerplate pages
   a. Navbar
   b. footer
   c. Components
3. Create server: Set up Express project with routing and placeholder 100 responses
   a. API Integration
   b. DB
   c. Update expected requests/responses on protected endpoints.
4. Create migrations
5. Implement sample data for testing
6. Fature: User Authentication
   - Implement registration and login pages.
   - Create POST /api/register and POST /api/login endpoints.
7. Feature: Nutritional exercise
   - Implement exercise page.
   - Integrate API for recipe data.
8. Feature: Weight loss exercise
   - Implement exercise page.
   - Integrate API for exercise data.
9. Bug fixes.
10. DEMO DAY.

## Nice-to-haves:

Feature: Blog Reading

- Implement blog page.
- Implement JWT authentication after core features are completed
  - Store JWT in local storage, include JWT in axios calls.
  - Implement JWT tokens
- Community and Support: Forum or chat feature for sharing experiences and tips.
- Appointment Reminders: Integration for reminders about doctor appointments and prenatal vitamins.
- Blog Access:user can add their own blog.
- videos or GIFs for Exercise Page
