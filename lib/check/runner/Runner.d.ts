import { AsyncProperty } from '../property/AsyncProperty';
import { IProperty } from '../property/IProperty';
import { Property } from '../property/Property';
import { Parameters } from './configuration/Parameters';
import { RunDetails } from './reporter/RunDetails';
/**
 * Run the property, do not throw contrary to {@link assert}
 *
 * WARNING: Has to be awaited
 *
 * @param property Asynchronous property to be checked
 * @param params Optional parameters to customize the execution
 *
 * @returns Test status and other useful details
 */
declare function check<Ts>(property: AsyncProperty<Ts>, params?: Parameters<Ts>): Promise<RunDetails<Ts>>;
/**
 * Run the property, do not throw contrary to {@link assert}
 *
 * @param property Synchronous property to be checked
 * @param params Optional parameters to customize the execution
 *
 * @returns Test status and other useful details
 */
declare function check<Ts>(property: Property<Ts>, params?: Parameters<Ts>): RunDetails<Ts>;
declare function check<Ts>(property: IProperty<Ts>, params?: Parameters<Ts>): Promise<RunDetails<Ts>> | RunDetails<Ts>;
/**
 * Run the property, throw in case of failure
 *
 * It can be called directly from describe/it blocks of Mocha.
 * It does not return anything in case of success.
 *
 * WARNING: Has to be awaited
 *
 * @param property Asynchronous property to be checked
 * @param params Optional parameters to customize the execution
 */
declare function assert<Ts>(property: AsyncProperty<Ts>, params?: Parameters<Ts>): Promise<void>;
/**
 * Run the property, throw in case of failure
 *
 * It can be called directly from describe/it blocks of Mocha.
 * It does not return anything in case of success.
 *
 * @param property Synchronous property to be checked
 * @param params Optional parameters to customize the execution
 */
declare function assert<Ts>(property: Property<Ts>, params?: Parameters<Ts>): void;
declare function assert<Ts>(property: IProperty<Ts>, params?: Parameters<Ts>): Promise<void> | void;
export { check, assert };
