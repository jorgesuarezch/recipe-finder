import axios from 'axios'
import range from 'lodash/range'

const instance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1', // TODO: move to env variable
  timeout: 1000,
})

enum Paths {
  Search = '/search.php',
  Random = '/random.php',
}
/**
 * This is the raw meal response object type that comes from the API
 */
interface RawMealObject {
  idMeal: string
  strMeal: string
  strDrinkAlternate?: any
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string
  strYoutube: string
  strIngredient1: string
  strIngredient2: string
  strIngredient3: string
  strIngredient4: string
  strIngredient5: string
  strIngredient6: string
  strIngredient7: string
  strIngredient8: string
  strIngredient9: string
  strIngredient10: string
  strIngredient11: string
  strIngredient12: string
  strIngredient13: string
  strIngredient14: string
  strIngredient15: string
  strIngredient16: string
  strIngredient17: string
  strIngredient18: string
  strIngredient19: string
  strIngredient20: string
  strMeasure1: string
  strMeasure2: string
  strMeasure3: string
  strMeasure4: string
  strMeasure5: string
  strMeasure6: string
  strMeasure7: string
  strMeasure8: string
  strMeasure9: string
  strMeasure10: string
  strMeasure11: string
  strMeasure12: string
  strMeasure13: string
  strMeasure14: string
  strMeasure15: string
  strMeasure16: string
  strMeasure17: string
  strMeasure18: string
  strMeasure19: string
  strMeasure20: string
  strSource: string
  strImageSource?: any
  strCreativeCommonsConfirmed?: any
  dateModified?: any
}

/**
 * Default structure from The Meal API
 */
export interface RawMealAPIBaseResponse {
  meals: RawMealObject[] | null
}

export interface Ingredient {
  name: string
  measure: string
}

export interface Meal {
  id: string
  name: string
  image: string
  ingredients: Ingredient[]
  instructions: string
}

export namespace MealAPI {
  export const getRandomRecipe = async (): Promise<Meal> => {
    const response = await instance.get<RawMealAPIBaseResponse>(
      `${Paths.Random}`
    )

    if (response.data.meals === null) {
      throw Error('random endpoint not working')
    }
    const meal = response.data.meals[0]

    return MealAPIUtils.transformMeal(meal)
  }

  export const searchRecipeByName = async (name: string): Promise<Meal[]> => {
    const response = await instance.get<RawMealAPIBaseResponse>(
      `${Paths.Search}`,
      { params: { s: name } }
    )

    if (response.data.meals === null) {
      return []
    }

    return response.data.meals.map(MealAPIUtils.transformMeal)
  }
}

export namespace MealAPIUtils {
  /**
   * Extract and format the ingredients from a raw meal object
   * Note: it is assumed that are always returned 20 ingredients and measures based on API reposponse
   */
  export const extractIngredients = (meal: RawMealObject): Ingredient[] => {
    const INGRIDENT_PREFIX = 'strIngredient'
    const MEASURE_PREFIX = 'strMeasure'
    const result: Ingredient[] = []
    return range(1, 21).reduce((acc, n) => {
      const name = meal[`${INGRIDENT_PREFIX}${n}` as keyof typeof meal]
      if (name) {
        acc.push({
          name,
          measure: meal[`${MEASURE_PREFIX}${n}` as keyof typeof meal],
        })
      }
      return acc
    }, result)
  }

  export const transformMeal = (meal: RawMealObject): Meal => ({
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb,
    instructions: meal.strInstructions,
    ingredients: MealAPIUtils.extractIngredients(meal),
  })
}
