/*
 Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.
*/

/* _____________ Your Code Here _____________ */

type Pop<T extends unknown[]> = T extends [...infer Rest, infer Last] ? Rest : T
type Push<Root extends unknown[], Addition> = Addition extends unknown[] ? [...Root, ...Addition] : [...Root, Addition]
type Shift<T extends unknown[]> = T extends [infer First, ...infer Rest] ? Rest : T
type Unshift<Root extends unknown[], Addition> = Addition extends unknown[] ? [...Addition, ...Root] : [Addition, ...Root]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
  Expect<Equal<Push<[3, 2], [1]>, [3, 2, 1]>>,
  Expect<Equal<Push<[3, 2], 1>, [3, 2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c']>, ['b', 'c']>>,
  Expect<Equal<Unshift<['b', 'c'], ['a']>, ['a','b', 'c']>>,
]
