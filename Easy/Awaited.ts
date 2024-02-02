/*
  If we have a type which is a wrapped type like Promise, how we can get the type which is inside the wrapped type?
  For example: if we have `Promise<ExampleType>` how to get ExampleType?
*/

/* _____________ Your Code Here _____________ */

 type MyAwaited<T extends Promise<any> | { then: (onfulfilled: (arg: number) => any) => any }> =
        T extends object & { then(onfulfilled: infer F, ...args: any[]): any } ? 
            F extends ((value: infer V, ...args: any[]) => any) ? 
                Awaited<V> : 
                never :
        T;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>
