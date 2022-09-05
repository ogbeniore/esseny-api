import { Router } from 'express';
import { MealComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * POST method route
 * @example http://localhost:PORT/v1/meals
 *
 * @swagger
 * /v1/meals:
 *   post:
 *      description: Create new Meal
 *      tags: ["meals"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: meal creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MealSchema'
 *            example:
 *              name: jollof
 *              description: wonderful jollof rice from nigeria with hot pepper and chicken
 *              image: https://instagram.com/lmaooo
 *              timeToTable: 40
 *              cost: 3000
 *              mode: cook
 *      responses:
 *        201:
 *          description: return created meal
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/MealSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', MealComponent.create);

/**
 * POST method route
 * @example http://localhost:PORT/v1/meals/:id
 *
 * @swagger
 * /v1/meals:
 *   post:
 *      description: Create new Meal
 *      tags: ["meals"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: meal creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MealSchema'
 *            example:
 *              name: jollof
 *              description: wonderful jollof rice from nigeria with hot pepper and chicken
 *              image: https://instagram.com/lmaooo
 *              timeToTable: 40
 *              cost: 3000
 *              mode: cook
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique mealId
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        200:
 *          description: return updated meal
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/MealSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.put('/:id', MealComponent.update);

/**
 * GET method route
 * @example http://localhost:PORT/v1/meals/:id
 *
 * @swagger
 * /v1/meals/{id}:
 *  get:
 *    description: Get meal by mealId
 *    tags: ["meals"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique mealId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return meal by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/MealSchema'
 */
router.get('/:id', MealComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/meals/:id
 *
 * @swagger
 * /v1/meals/{id}:
 *  delete:
 *    description: Delete meal by mealId
 *    tags: ["meals"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique mealId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted meal
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/UserSchema'
 */

router.delete('/:id', MealComponent.remove);

export default router;
