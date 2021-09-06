import { MealAPIUtils } from './api'

const rawMeal = {
  idMeal: '52929',
  strMeal: 'Timbits',
  strDrinkAlternate: null,
  strCategory: 'Dessert',
  strArea: 'Canadian',
  strInstructions:
    'Sift together dry ingredients.\r\nMix together wet ingredients and incorporate into dry. Stir until smooth.\r\nDrop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides.\r\nRemove and drain.\r\nRoll in cinnamon sugar while still warm and serve.',
  strMealThumb:
    'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg',
  strTags: 'Snack,Treat',
  strYoutube: 'https://www.youtube.com/watch?v=fFLn1h80AGQ',
  strIngredient1: 'Flour',
  strIngredient2: 'Sugar',
  strIngredient3: 'Baking Powder',
  strIngredient4: 'Salt',
  strIngredient5: 'Egg',
  strIngredient6: 'Milk',
  strIngredient7: 'Oil',
  strIngredient8: 'Oil',
  strIngredient9: 'Icing Sugar',
  strIngredient10: '',
  strIngredient11: '',
  strIngredient12: '',
  strIngredient13: '',
  strIngredient14: '',
  strIngredient15: '',
  strIngredient16: '',
  strIngredient17: '',
  strIngredient18: '',
  strIngredient19: '',
  strIngredient20: '',
  strMeasure1: '2 cups ',
  strMeasure2: '1/3 cup',
  strMeasure3: '3 tsp',
  strMeasure4: '½ tsp',
  strMeasure5: '1 beaten',
  strMeasure6: '¾ cup',
  strMeasure7: '3 tbs',
  strMeasure8: 'for frying',
  strMeasure9: 'garnish',
  strMeasure10: '',
  strMeasure11: '',
  strMeasure12: '',
  strMeasure13: '',
  strMeasure14: '',
  strMeasure15: '',
  strMeasure16: '',
  strMeasure17: '',
  strMeasure18: '',
  strMeasure19: '',
  strMeasure20: '',
  strSource: 'http://www.geniuskitchen.com/recipe/drop-doughnuts-133877',
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
}

describe('MealAPIUtils - extractIngredients', () => {
  it('should return an array with the ingredients and their measures properly', () => {
    expect(MealAPIUtils.extractIngredients(rawMeal)).toEqual([
      {
        name: rawMeal.strIngredient1,
        measure: rawMeal.strMeasure1,
      },
      {
        name: rawMeal.strIngredient2,
        measure: rawMeal.strMeasure2,
      },
      {
        name: rawMeal.strIngredient3,
        measure: rawMeal.strMeasure3,
      },
      {
        name: rawMeal.strIngredient4,
        measure: rawMeal.strMeasure4,
      },
      {
        name: rawMeal.strIngredient5,
        measure: rawMeal.strMeasure5,
      },
      {
        name: rawMeal.strIngredient6,
        measure: rawMeal.strMeasure6,
      },
      {
        name: rawMeal.strIngredient7,
        measure: rawMeal.strMeasure7,
      },
      {
        name: rawMeal.strIngredient8,
        measure: rawMeal.strMeasure8,
      },
      {
        name: rawMeal.strIngredient9,
        measure: rawMeal.strMeasure9,
      },
    ])
  })
})

describe('MealAPIUtils - transformMeal', () => {
  it('should transform and format a meal object properly', () => {
    expect(MealAPIUtils.transformMeal(rawMeal)).toEqual({
      id: rawMeal.idMeal,
      name: rawMeal.strMeal,
      image: rawMeal.strMealThumb,
      instructions: rawMeal.strInstructions,
      ingredients: [
        {
          name: rawMeal.strIngredient1,
          measure: rawMeal.strMeasure1,
        },
        {
          name: rawMeal.strIngredient2,
          measure: rawMeal.strMeasure2,
        },
        {
          name: rawMeal.strIngredient3,
          measure: rawMeal.strMeasure3,
        },
        {
          name: rawMeal.strIngredient4,
          measure: rawMeal.strMeasure4,
        },
        {
          name: rawMeal.strIngredient5,
          measure: rawMeal.strMeasure5,
        },
        {
          name: rawMeal.strIngredient6,
          measure: rawMeal.strMeasure6,
        },
        {
          name: rawMeal.strIngredient7,
          measure: rawMeal.strMeasure7,
        },
        {
          name: rawMeal.strIngredient8,
          measure: rawMeal.strMeasure8,
        },
        {
          name: rawMeal.strIngredient9,
          measure: rawMeal.strMeasure9,
        },
      ],
    })
  })
})
