import { Document, Schema } from 'mongoose';

import * as connections from '../../config/connection/connection';

/**
 * @export
 * @interface IMeanModel
 * @extends {Document}
 */
export interface IMealModel extends Document {
    name: string;
    description: string;
    image: string;
    cost: number;
    recipe: string;
    timeToTable: number;
    mode: string;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    MealSchema:
 *      required:
 *        - name
 *        - timeToTable
 *        - mode
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        description:
 *          type: string
 *        image:
 *          type: string
 *        recipe:
 *          type: string
 *        mode:
 *          type: string
 *        timeToTable:
 *          type: number
 *        cost:
 *          type: number
 *    Meals:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/MealSchema'
 */

const MealSchema: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
    },
    description: String,
    image: String,
    recipe: String,
    mode: String,
    cost: Number,
    timeTotable: Number,
}, {
    collection: 'meals',
    versionKey: false,
});

export default connections.db.model< IMealModel >('MealModel', MealSchema);
