import * as Joi from 'joi';
import Validation from '../validation';
import { IMealModel } from './model';

/**
 * @export
 * @class MealValidation
 * @extends Validation
 */

class MealValidation extends Validation {
    /**
     * Creates an instance of MealValidation.
     * @memberof MealValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IMealModel} body
     * @returns {Joi.ValidationResult}
     * @memberof MealValidation
     */
    createMeal(
        params: IMealModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            name: Joi.string().required(),
            timeToTable: Joi.number().required(),
            mode: Joi.string().required(),
            cost: Joi.number(),
        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof MealValidation
     */
    getMeal(
        body: {
            id: string
        },
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }
}

export default new MealValidation();
