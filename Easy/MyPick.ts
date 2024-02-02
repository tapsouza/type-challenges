/*

  Implement the built-in `Pick<T, K>` generic without using it.

  Constructs a type by picking the set of properties `K` from `T`

*/

/* _____________ Your Code Here _____________ */

type MyPick<T extends object, K extends keyof T> = {
  [Key in K]: T[Key]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

type test =  MyPick<Todo, 'title' | 'completed'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
