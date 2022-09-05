import { IMealModel } from './model';

/**
 * @export
 * @interface IMealService
 */

export interface IMealService {

    /**
     * @returns {Promise<IMealModel[]>}
     * @memberof IMealService
     */
    findAll(): Promise<IMealModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IMealModel[]>}
     * @memberof IMealService
     */
    findOne(code: string): Promise<IMealModel>;

    /**
     * @param {IMealModel} mealModel
     * @returns {Promise<IUserModel>}
     * @memberof IMealService
     */
    insert(mealModel: IMealModel): Promise<IMealModel>;

    /**
     * @param {string} id
     * @returns {Promise<IMealModel>}
     * @memberof IMealService
     */
    remove(id: string): Promise<IMealModel>;

    /**
     * @param {string} code
     * @param {IMealModel} meal
     * @returns {Promise<IUserModel>}
     * @memberof IMealService
     */
    update(code: string, meal: IMealModel): Promise<IMealModel>;
}
