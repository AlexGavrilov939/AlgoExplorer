# Asymptotic

- [Motivation](#motivation)
- [Memory](#memory)
- [Big O](#big-o-notation)
- [Time complexity](#time-complexity-computational-complexity)
    - [Drop the constants](#drop-the-constants)
    - [Drop the non-dominant terms](#drop-the-non-dominant-terms)
    - [Amortized time](#amortized-time)
    - [Log N runtimes](#log-n-runtimes)
    - [Recursive runtimes](#recursive-runtimes)
- [Space complexity](#space-complexity-spatial-complexity)
- [Common Big O times](#common-big-o-times)
- [Data structures Big O times](#data-structures-big-o-times)
- [Trade Offs](#trade-offs)
- [Exercises](#exercises)

Big O helps us understand how fast algorithms run.
It's like a filter that only keeps what's important about how long a function will take with `n` items.
So, if a function has a big difference in run time with more data, like from a quick 300 milliseconds to a slow 30 seconds, that's what matters.

Imagine an equation `3x² + x + 1`. If `x` is 5, the first part is the biggest (75), and the rest (5 and 1) are small.
When `x` is huge, like 5 million, the first part is super big (75 trillion!) and the others barely count.
So in `Big O`, we just focus on the big part, which for this would be `O(n²)`.
This means for `n` items, the time it takes goes up by `n^2`. This is how we simplify algorithms to see how they scale up.

## Motivation

Solving problems often presents multiple approaches, and evaluating their efficiency is crucial. The question "Can you do better?" in algorithm interviews refers to improving Time Complexity (TC) and Space Complexity (SC).

**Time Complexity (TC):** - measures how fast a function runs.

**Space Complexity (SC):** - quantifies memory/space usage during execution.

In essence, asymptotic analysis helps compare and choose algorithms based on their time and space efficiencies.

## Memory

Understanding the fundamentals of memory is crucial, serving as the foundation of knowledge. 
It involves grasping how data is stored under the hood, providing insights into choosing 
the right data structure for various situations.
While the subject of memory is vast, this article touches upon key high-level concepts.
This knowledge proves particularly relevant in the context of coding interviews.

**Understanding Memory Allocation**

In the world of programming, all variables need a place to reside. Envision this as a bounded canvas, divided into slots, representing the finite number of slots available—simulating real memory.

A crucial aspect is that any program stores variables in free memory slots or series of slots. If more than one block is required, they are stored consecutively. Each memory slot holds 8 bits, essentially 1 byte. For instance, 32-bit or 64-bit integers are stored in a back-to-back fashion.

Accessing a memory slot is a super-fast operation, denoted as O(1). In summary, consider memory as a bounded canvas of slots within a computer, capable of storing data. However, it's essential to note that running out of memory is a possibility.

#### How the list is stored in memory
![IMG_0020](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/ac348eb2-7b84-4f90-a7ae-ee537bc68e9e)


#### How the string is stored in memory
![IMG_0021](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/a4230c5f-3368-425a-9f5f-321632928970)


#### How the pointer is stored in memory
![IMG_0022](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/d93cf7f4-5a68-47b9-b6cb-a7a5d792c562)

## Big O Notation

### Big O, Big Omega, Big Theta (FYI section)
Academics use big 0, big &#920; (theta), and big &#937; (omega) to describe runtimes.

- **O (big O)** - describes an upper bound on the time.
- **&#920; (big omega)** - describes a lower bound on the time.
- **&#920; (big theta)** - means both O and &#920; - gives a tight bound on runtime.

## Time complexity (Computational complexity)

For the interviews usually we should use O (big O) only.
But actually we can describe our runtime for the function in 3 different ways.
Consider **Quick sort** algorithm:
- **Best case**. If elements are equal then quick sort on average traverse an array only once => `O(n)`
- **Worse case**. If we get unlucky and the pivot is repeatedly the biggest element in the array we will traverse it `O(N^2)` times
- **Expected case**. In average case we can expect a runtime of `O(N logN)`

#### Drop the constants
An `O(N)` algorithm can run faster than an `O(1)` algorithm for certain inputs because Big O describes how runtime increases with input size.
That's why we ignore constants in Big O notation.
An algorithm that might look like `O(2N)` is actually `O(N)`.
Some might think that labeling an algorithm with two separate for loops as `O(2N)` is more accurate,
but it’s not; we’re really just looking at the trend of runtime growth, not precision in constants.

#### Drop the non-dominant terms
When dealing with terms like `O(N^2 + N)`, we drop the less significant terms.
Since `O(N^2 + N^2)` simplifies to `O(N^2)`, the additional `N`, which grows more slowly,
is not as important and we ignore it.

So, `O(N^2 + N)` becomes `O(N^2)`, `O(N + log N)` simplifies to `O(N)`, and `O(5*2^N + 1000N^100)` simplifies to `O(2^N)`.
The key is to focus on the term with the greatest impact on growth.

#### Amortized time
An **ArrayList** is like a flexible array that grows as you add more items.
It resizes itself by creating a bigger array and moving items over when it gets full.

Here's the cool part about its speed: Usually, adding an item is super quick, just `O(1)` time.
But occasionally, when it's full and needs to resize, it takes longer, like `O(N)` time,
because it has to shift all items to a new, bigger space.

This slow step doesn't happen often.
So, if you average out the quick and slow insertions, it still feels like each insertion is fast, at `O(1)` time.
This average is what we call "**amortized time**." It's like the rare slow steps are spread out over the many fast ones, making the overall process pretty speedy!

#### Log N runtimes
`O(log N)` runtimes often come from processes where you keep splitting things in half.
Take binary search as an example. You're searching for a number in a sorted list
by repeatedly dividing the list into halves.

Imagine you're looking for **9** in a list. First, you compare it to the middle number.
If **9** is smaller, you look in the left half; if bigger, in the right half.
Each step cuts your search area in half until you find **9** or have just one number left.

The key is how many times you can divide your list in half before you're down to one. 
For a list with **16** items, it goes like this: **16, 8, 4, 2, 1**.
Each slash is a _division by two_.

Flipping this process, if you start with **1** and keep doubling,
how many times until you reach your original number? That's what the log in `O(log N)` is all
about. If `2^k` equals your number (like **2^4 = 16**), then `k` is log base **2** of that number (**log2(16) = 4**).

This is why binary search or finding an item in a balanced binary tree is `O(log N)`.
Each comparison halves the number of possibilities, quickly narrowing down your search.

#### Recursive runtimes
```js
const f = (n: number) => {
  if (n <= 1) {
    return 1;
  }
  
  return f(n - 1) + f(n - 1);
}
```
This code's runtime is `O(2^N)`, not the `O(N)` some might guess.
It's a recursive function where each call generates two more calls until it reaches the base case (**n <= 1**).
To understand the runtime, visualize a call tree for `f(4)`:

- The first level has 1 call (`f(4)`).
- The second level has 2 calls (two `f(3)`s).
- The third level has 4 calls (`f(2)`s).
- This doubling continues until the last level.

Each level has twice as many calls as the previous, leading to **2^0, 2^1, 2^2... up to 2^N-1** at the **Nth** level.
So, the total number of calls is the sum of these, which is `2^N - 1`, making the runtime `O(2^N)`.

For space complexity, it's `O(N)` because at any point, the maximum depth of the call stack is `N`,
representing the number of calls waiting to complete.

## Space complexity (Spatial complexity)
Space complexity is just like time complexity, but instead of measuring how long an algorithm takes,
it measures how much memory it uses. Think of it like this:

- If your algorithm needs a list with n items, that's `O(n)` space because you're using space for each item.
- Need a grid or table (like a chessboard) that's `n` by `n`? That's `O(n^2)` space, as the space grows with both the rows and columns.

Also, don't forget about the space used when you have functions calling themselves (recursion).
Each time a function calls itself, it takes up a bit of memory.
So, if a function calls itself n times, that's `O(n)` space being used up.
This is because each call needs its own little memory spot to remember where it is and what it's doing.

## Common Big O times
![1650357901lkH1xKTytK](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/031f9916-4c56-4024-a34a-bc6024cbd40e)


## Data structures Big O times
![1650358110m7fPqMdxs5 copy](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/b780ddb6-694e-49c4-a10c-c036d45e470e)

## Trade Offs

**Why Big O?** It's not about calculating the Big O for every function in your code.
It's about the **mindset**.

For example, realizing that nesting loops might be costly is part of this mindset.

**Key Points:**

1. **No Absolute Rules**: Every situation is unique. Big O is a **tool**, not a strict rulebook.
2. **Variety of Good Choices**: Often, there are multiple good ways to approach a problem.
3. **Details Can Be Important**: Sometimes, the small details (like coefficients in equations) matter, even though Big O overlooks them.
4. **Broader Perspective**: Sometimes general efficiency isn't crucial, especially for functions that don't run frequently.
5. **Readability and Maintainability**: Code is primarily for humans. It should be clear and maintainable.
6. **Simplicity is Key**: Simple code is easier to understand and has fewer bugs.
7. **Human Time is Valuable**: The time spent optimizing code is often more valuable than the computing time saved.
8. **Avoid Premature Optimization**: Address performance issues when they actually arise.
9. **Leverage Built-in Functions**: They are usually more optimized and reliable than custom solutions.

Big O is about understanding potential efficiency issues, but it's just one aspect of writing effective code.
Always consider the broader context and aim for clarity and maintainability.

## Exercises

#### Problem 1
```js
function foo(arr: number[]) {
  let sum: number = 0;
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return sum + product;
}
```
> It will take TC: O(n). Twice iteration doesn't matter

#### Problem 2
```js
function printPairs(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`${i}-${j}`);
    }
  }
}
```
> It will take TC: O(n^2).

#### Problem 3
```js
function printUnorderedPairs(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`${i}-${j}`);
    }
  }
}
```
> It will take TC: O(n^2).

#### Problem 4
```js
function foo(N: number, M: number) {
  let a = 0, b = 0;
  for (i = 0; i < N; i++) {
    a = a + Math.random();
  }
  for (j = 0; j < M; j++) {
    b = b + Math.random();
  }

  return a + b;
}
```
> TC: O(N + M).
N and M - different variables => we have traverses of different lengths


#### Problem 5
```js
function foo() {
  let a = 0;
  for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
      a = a + i + j;
    }
  }
  
  return a;
}
```
> TC: O(N^2).

```
The above code runs total no of times
= N + (N – 1) + (N – 2) + … 1 + 0
= N * (N + 1) / 2
= 1/2 * N^2 + 1/2 * N
O(N^2) times.
```

#### Problem 6
```js
function foo() {
  let i = 0;
  let j = 0;
  let k = 0;
  for (i = Math.floor(n / 2); i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
      k = k + Math.floor(n / 2);
    }
  }
  return;
}
```
> TC: (N * LogN). i runs for n / 2 steps, j would run for O(LogN) steps => O(N / 2 * LogN) => O(N * LogN)

