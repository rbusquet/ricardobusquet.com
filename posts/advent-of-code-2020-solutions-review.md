---
title: Advent of Code 2020 - Solutions review
date: "2020-12-06"
categories:
  - advent-of-code
  - python
---

Since 2018, every December, I ~~try to~~ work my way through [Advent of Code][aoc-about], a set of 25 puzzles revealed each day this month, until Christmas day. This has been around since 2015 (I also tried working on the earlier years, check all of my solutions in my [advent of code repo][aoc-repo]).

A short description from their about page:

> Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as a speed contest, interview prep, company training, university coursework, practice problems, or to challenge each other.

The puzzles vary in difficulty, getting harder through the month. This year, I'll be writing about my solutions and a little about each puzzle's rationale and thought process. I'm not planning to get the best solution for each problem, but I try going about one or two steps on optimizations to showcase language features or get better run times. I'll also assume all my inputs will lead to a valid result, so no significant error checks will be done.

I'll mainly use python for the solutions. It's the language I'm most proficient in, and this year it's been proving to have a lot of excellent tools to get cleaner results.

We're on Day 6 at the time of writing, so I'll go over each day in this post, then update through the week. Follow along with me!

### Day 1: Report Repair ([link][day-1])

TO START: I absolutely love the stories every year. Every year, the main character is an elf, tasked with _saving Christmas_. This year though, we're going on a vacation. Christmas is safe! Some good news this year, at last :)

In the first part of day 1, we're tasked with processing an expense report--a list of numbers, and we have to find the two entries that add up to 2020 and multiply these numbers together. The input was super short, so I could go with the "brute force" approach. For each number, go over the list again and find the one that adds up to 2020. I knew a simple trick to traverse the list once: using a set as the data structure to hold the numbers, I can find an item in constant time. For each number, I just need to check if `2020 - number` is on the list!

```python
def part_one(report: List[int]):
    report_set = set(report)
    for number in report:
        if 2020 - number in report_set:
            return number * (2020 - number)
```

The second part presents a similar puzzle, but now we need to find 3 numbers that add up to 2020. At this point, I remembered of python's [`itertools.combinations`][combinations]. This returns the subsequences of a list with the given size. I can use it also for part 1, so I just wrote a generic solution:

```python
from functools import reduce
from itertools import combinations

def solve_with_combinations(report, n):
    for test in combinations(report, n):
        if sum(test) == 2020:
            return reduce(mul, test)

def part_one_combinations():
    solve_with_combinations(report, 2)

def part_one_combinations():
    solve_with_combinations(report, 3)
```

Python will generate the combinations in a complexity better than O(n^2) or O(n^3), but I found out I could get O(n^2) for part two. The solution involves sorting the list beforehand, then using a two-pointer technique: for each number in the list, I keep a pointer to the next number and the last of the list. If the sum is more than 2020, I decrease the end pointer to reduce the sum. If it's less than 2020, I increase the first pointer to get a larger sum. I repeat it for each item until I find all 3 numbers that match the requirements. I had to do a bit of research, so here's [the source][triplet-sum].

```python
def best_performance_part_two(report):
    n = len(report)
    for i in range(n):
        left = i + 1
        right = n - 1
        while left < right:
            result = report[i] + report[left] + report[right]
            if result == 2020:
                return report[i] * report[left] * report[right]
            if result < 2020:
                left += 1
            else:
                right -= 1

best_performance_part_two(sorted(report))
```

### Day 2: Password Philosophy ([link][day-1])

On day 2, we're tasked with processing a list of passwords and checking if they follow a set policy. Each line of the input gives the policy and the password to check. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. A valid input looks like this:

```
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
```

For this one, I went with a [regular expression][regexp] to parse each line and a [`collectins.Counter`][counter] to see if the letter has the correct count. Not much to improve there.

```python
import re
from collections import Counter

def part_one(passwords: List[str]):
    valid = 0

    expression = re.compile(r"(\d+)-(\d+) (.): (.*)")
    for password in passwords:
        if match := expression.match(password):
            min_, max_, letter, password = match.groups()
            count = Counter(password)[letter]
            if count >= int(min_) and count <= int(max_):
                valid += 1
    return valid
```

In part 2, the only difference is a reinterpretation of the policy. Each policy actually describes two positions in the password, and exactly one of these positions must contain the given letter. So I just get the letters, add a set, and test if the set has size two (meaning the letters are different), and the given letter is in the set. There might definitely be better ways to check this, but here it goes:

```python
def part_two(passwords: List[str]):
    valid = 0

    expression = re.compile(r"(\d+)-(\d+) (.): (.*)")
    for password in passwords:
        if match := expression.match(password):
            pos_1, pos_2, letter, password = match.groups()
            letters = {password[int(pos_1) - 1], password[int(pos_2) - 1]}
            if len(letters) == 2 and letter in letters:
                valid += 1
    return valid
```

[aoc-about]: https://adventofcode.com/about
[aoc-repo]: https://github.com/rbusquet/advent-of-code
[day-1]: https://adventofcode.com/2020/day/1
[day-2]: https://adventofcode.com/2020/day/2
[combinations]: https://docs.python.org/3.8/library/itertools.html?highlight=combinations#itertools.combinations
[triplet-sum]: https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
[regexp]: https://en.wikipedia.org/wiki/Regular_expression
[counter]: https://docs.python.org/3/library/collections.html#collections.Counter
