import * as Joi from 'joi';
import { Types } from 'mongoose';
import MealModel, { IMealModel } from './model';
import MealValidation from './validation';
import { IMealService } from './interface';

/**
 * @export
 * @implements {IMealModelService}
 */
const MealService: IMealService = {
    /**
     * @returns {Promise < IMealModel[] >}
     * @memberof MealService
     */
    async findAll(): Promise < IMealModel[] > {
        try {
            return await MealModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @returns {Promise < IMealModel >}
     * @memberof MealService
     */
    async findOne(id: string): Promise < IMealModel > {
        try {
            const validate: Joi.ValidationResult = MealValidation.getMeal({ id });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await MealModel.findOne({ _id: new Types.ObjectId(id) });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IMealModel} meal
     * @returns {Promise < IMealModel >}
     * @memberof MealService
     */
    async insert(body: IMealModel): Promise < IMealModel > {
        try {
            const validate: Joi.ValidationResult = MealValidation.createMeal(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const meal: IMealModel = await MealModel.create(body);

            return meal;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IMealModel} meal
     * @returns {Promise < IMealModel >}
     * @memberof MealService
     */
    async update(id: string, body: IMealModel): Promise < IMealModel > {
        try {
            const validate: Joi.ValidationResult = MealValidation.getMeal({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const meal: IMealModel = await MealModel.findOneAndReplace({ _id: new Types.ObjectId(id) }, body);

            return meal;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IMealModel >}
     * @memberof UserService
     */
    async remove(id: string): Promise < IMealModel > {
        try {
            const validate: Joi.ValidationResult = MealValidation.getMeal({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const meal: IMealModel = await MealModel.findOneAndRemove({
                _id: new Types.ObjectId(id),
            });

            return meal;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default MealService;
