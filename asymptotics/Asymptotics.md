# Asymptotic

- [Motivation](#motivation)
- [Memory](#memory)
- [Big O](#big-o-notation)
- [Space complexity](#space-complexity)
- [Time complexity](#time-complexity)
    - [Drop the constants](#drop-the-constants)
    - [Drop the constants](#drop-the-non-dominant-terms)
    - [Log N runtimes](#log-n-runtimes)
    - [Recursive runtimes](#recursive-runtimes)
    - [Some common big O times](#some-common-big-o-times)
    - [Data structures times](#data-structures-times)
- [Exercises](#exercises)

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

## Space complexity
TBD

## Time complexity

For the interviews usually we should use O (big O) only.
But actually we can describe our runtime for the function in 3 different ways.
Consider **Quick sort** algorithm:
- **Best case**. If elements are equal then quick sort on average traverse an array only once => O(n)
- **Worse case**. If we get unlucky and the pivot is repeatedly the biggest element in the array we will traverse it O(N^2) times
- **Expected case**. In average case we can expect a runtime of O(N logN)

#### Drop the constants
TBD
#### Drop the non-dominant terms
TBD
#### Amortized time
TBD
#### Log N runtimes
TBD
#### Recursive runtimes
TBD

#### Some common big O times
![1650357901lkH1xKTytK](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/031f9916-4c56-4024-a34a-bc6024cbd40e)


#### Data structures big O times
![1650358110m7fPqMdxs5 copy](https://github.com/AlexGavrilov939/AlgoExplorer/assets/5443983/b780ddb6-694e-49c4-a10c-c036d45e470e)

## Exercises
