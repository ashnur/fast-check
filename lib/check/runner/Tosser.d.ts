import * as prand from 'pure-rand';
import { Shrinkable } from '../arbitrary/definition/Shrinkable';
import { IProperty } from '../property/IProperty';
/** @hidden */
export declare function toss<Ts>(generator: IProperty<Ts>, seed: number, random: (seed: number) => prand.RandomGenerator, examples: Ts[]): IterableIterator<() => Shrinkable<Ts>>;
