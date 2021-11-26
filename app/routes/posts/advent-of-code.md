---
meta:
  title: Advent of Code 2020 - Solutions review
  date: "2020-12-06"
  categories:
    - advent-of-code
    - python
  coverImage: advent-of-code-2020-solutions-review.jpg
  credits: Photo by <a href="https://unsplash.com/@markusspiske">Markus Spiske</a>
---

#### Solved challenges

- [Day 1: Report Repair](#day-1-report-repair)
- [Day 2: Password Philosophy](#day-2-password-philosophy)
- [Day 3: Toboggan Trajectory](#day-3-toboggan-trajectory)
- [Day 4: Passport Processing](#day-4-passport-processing)
- [Day 5: Binary Boarding](#day-5-binary-boarding)
- [Day 6: Custom Customs](#day-6-custom-customs)
- [Day 17: Conway Cubes](#day-17-conway-cubes)

Since 2018, every December, I ~~try to~~ work my way through [Advent of Code][aoc-about], a set of 25 puzzles revealed each day this month, until Christmas day. This has been around since 2015 (I also tried working on the earlier years, check all of my solutions in my [advent of code repo][aoc-repo]).

A short description from their about page:

> Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as a speed contest, interview prep, company training, university coursework, practice problems, or to challenge each other.

The puzzles vary in difficulty, getting harder through the month. This year, I'll be writing about my solutions and a little about each puzzle's rationale and thought process. I'm not planning to get the best solution for each problem, but I try going about one or two steps on optimizations to showcase language features or get better run times. I'll also assume all my inputs will lead to a valid result, so no significant error checks will be done.

I'll mainly use python for the solutions. It's the language I'm most proficient in, and this year it's been proving to have a lot of excellent tools to get cleaner results.

We're on Day 6 at the time of writing, so I'll go over each day in this post, then update through the week. Follow along with me!

## Day 1: Report Repair

<small>[Go to challenge][day-1]</small>

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

Python will generate the combinations in a complexity better than O(n<sup>2</sup>) or O(n<sup>3</sup>), but I found out I could get O(n<sup>2</sup>) for part two. The solution involves sorting the list beforehand, then using a two-pointer technique: for each number in the list, I keep a pointer to the next number and the last of the list. If the sum is more than 2020, I decrease the end pointer to reduce the sum. If it's less than 2020, I increase the first pointer to get a larger sum. I repeat it for each item until I find all 3 numbers that match the requirements. I had to do a bit of research, so here's [the source][triplet-sum].

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

## Day 2: Password Philosophy

<small>[Go to challenge][day-2]</small>

On day 2, we're tasked with processing a list of passwords and checking if they follow a set policy. Each line of the input gives the policy and the password to check. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. A valid input looks like this:

```plaintext
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
```

For this one, I went with a [regular expression][regexp] to parse each line and a [`collections.Counter`][counter] to see if the letter has the correct count. Not much to improve there.

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

## Day 3: Toboggan Trajectory

<small>[Go to challenge][day-3]</small>

In this one, the puzzle input is a section of a "map", where the `.` represent empty spaces and `#` represents a tree, representing the geography of an area you're going to be sliding with a [Toboggan][toboggan]. You want to find a slope in the map where you're finding the smaller amount of trees (steering is hard in this area!).

The map is only a section of the geography: the pattern repeats to the right "many times". This was a hint to me that there might be a way to figure out where in the map you are without "glueing" those sections together.

Part 1 just asks how many trees are there if you go down a slope _right 3, down 1_, which means you'll walk 3 squares to the right, then one down. The map have much more rows than columns, so it means you'll end up in this "extended area". How can we read this map and count the trees without duplicating the lines to figure out how these hidden areas look like? The solution is keeping track of your position and every time your coordinates land outside the size of the line, you figure out the new index by getting the modulo of your position and the size of the line.

I made part 1 generic to any slope thinking about the fact that I needed to do it for more cases, here's the solution I landed:

```python
from itertools import count

def count_trees(right, down):
    # [`itertools.count`][count] yields numbers separated by `step`.
    # Think range() but unbound. Really nice for this case!
    counter = count(step=right)
    total_trees = 0
    for i, line in enumerate(read_file()):
        # line is something like ".....#.##......#..##..........#"
        if i % down != 0:
            # If going down more than once at a time, go straight to
            # the lines that are multiple of `down`.
            continue
        line = line.strip()
        # next counter will return the steps I'm walking right.
        # If I land after the end of the line, the modulo
        # will return an index that will represent what's in the
        # square out of bounds.
        position = next(counter) % len(line)
        # this is a nice trick with python booleans. They are actually an
        # extension of integers, and False == 1 :)
        total_trees += line[position] == "#"
    return total_trees
```

For part 2, it was just asked to check the tree count for other slopes (including one where you'd be going down more two rows). I just passed these to the function above and multiplied the values.

```python
from functools import reduce
from operator import mul

vals = [
    count_trees(1, 1),
    count_trees(3, 1),
    count_trees(5, 1),
    count_trees(7, 1),
    count_trees(1, 2),
]
print(reduce(mul, vals))
```

## Day 4: Passport Processing

<small>[Go to challenge][day-4]</small>

This one felt like work. We're tasked with validating passports, and checking if they have the required fields. Fields are those of a common passport (date of birth, issue date, country, etc.). Country is not required because "North Pole Credentials aren't issued by a country".

I used [dataclasses][dataclasses] and read the input file, passing the a key-value map of the results to the auto-generated constructor. If any of the required arguments were missing, the constructor would raise an exception, which I catch and skip the passport as invalid.

```python
@dataclass
class Passport:
    byr: str  # Birth Year
    iyr: str  # Issue Year
    eyr: str  # Expiration Year
    hgt: str  # Height
    hcl: str  # Hair Color
    ecl: str  # Eye Color
    pid: str  # Passport ID
    cid: str = ""  # country. The assignment at the class definition will make this field not required

def part_1():
    passports = []
    p = {}
    for line in read_file():
        if not line.strip():
            try:
                passports.append(Passport(**p))
            except TypeError:
                continue
            finally:
                p = {}
            continue
        values = line.strip().split(" ")
        for value in values:
            k, v = value.split(":")
            p[k] = v
    # last line
    passports.append(Passport(**p))
    return passports

first_pass_valid = part_1()
print(len(first_pass_valid))
```

Part 2 extends the validation. So I just added a `validate` method to the passport dataclass and called for the valid passports on part 1.

```python
@dataclass
class Passport:
    # fields...

    def validate(self):
        assert 1920 <= int(self.byr) <= 2002
        assert 2010 <= int(self.iyr) <= 2020
        assert 2020 <= int(self.eyr) <= 2030
        h, unit = size_re.match(self.hgt).groups()
        if unit == "cm":
            assert 150 <= int(h) <= 193
        else:
            assert 59 <= int(h) <= 76
        assert hair_re.match(self.hcl)
        assert self.ecl in ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
        assert pid_re.match(self.pid)

# ... part 1

valid = 0
for passport in first_pass_valid:
    try:
        passport.validate()
        valid += 1
    except Exception:
        print(passport)
        continue

print(valid)
```

I almost skipped this one. This looks too much like my day-to-day work (validate forms for business logic and save is the bread and butter of web applications nowadays).

## Day 5: Binary Boarding

This was a fun one. I should've noticed by the name of today's puzzle there was an easier solution than almost writing verbatim the puzzle rules. Today we're looking through a list of boarding passes and "decoding" the seat IDs from the passes codes. From the day instructions, 'a seat might be specified like FBFBBFFRLR, where F means "front", B means "back", L means "left", and R means "right"'. This defines a `binary space partitioning`. I then proceeded to write the algorithm exactly like the puzzle described. Part 1 was asking to submit the highest seat ID. So here's the implementation:

```python
def partition(code: str, count: int, lower_ch: str, upper_ch: str) -> int:
    left = 0
    right = 2 ** count

    for i in range(count):  # for each char in the code
        ch = code[i]
        mid = (right + left) // 2  # split the current length in two groups
        if ch == lower_ch:
            # if the char represent the "lower half" of the current region, move
            # the right pointer to the middle
            right = mid
        elif ch == upper_ch:
            # else, move the left pointer to the middle
            left = mid
    # you'll either end with the same number or there will be a difference
    # of 1. Return the minimum.
    return min(left, right)

def part_1():
    max_id = 0
    for code in read_file():
        # First 7 letters represent the row
        row = partition(code[:7], 7, "F", "B")
        # last 3 represent the colums
        col = partition(code[-3:], 3, "L", "R")
        seat_id = row * 8 + col
        if seat_id > max_id:
            max_id = seat_id
    return max_id
```

When discussing with colleagues about day 5 solutions, one of them pointed out the rules were just the steps to transform a binary number into its base-10 representation, where "F"/"B" and "L"/"R" are "0" and "1". The `int` constructor in python can cast string representation of numbers in any base, which you can set as the second parameter. So `int("1001", 2)` will return `9`.

```python
def to_int(code, zero, one):
    code = code.replace(zero, "0").replace(one, "1")
    return int(code, base=2)

# ...
    for code in read_file():
        row = to_int(code[:7], "F", "B")
        col = to_int(code[-3:], "L", "R")
        seat_id = row * 8 + col
```

Neat.

For part 2, we want to find the only missing seat ID in the list (the story character lost their boarding pass!). I could not for the life of me figure out how to do that. The puzzle states the "back" and the "front" of the airplane are empty, so you need to find the empty spot in the "middle". I went with the first idea in my mind: let's visualize the airplane after all seats are filled, print out the column and row, and manually find the seat ID.

```python
def part_2_visualization():
    """
    Will print something like this with my input
    ...
    086 -> ['#', '#', '#', '#', '#', '#', '#', '#']
    087 -> ['#', '#', '#', '#', '#', '#', '#', '#']
    088 -> ['#', '.', '#', '#', '#', '#', '#', '#']
    089 -> ['#', '#', '#', '#', '#', '#', '#', '#']
    090 -> ['#', '#', '#', '#', '#', '#', '#', '#']
    ...
    meaning the free seat is in row 88, col 1.
    """
    aircraft = [["." for _ in range(8)] for _ in range(128)]
    for code in read_file():
        row = partition(code[:7], 7, "F", "B")
        col = partition(code[-3:], 3, "L", "R")
        aircraft[row][col] = "#"
    for i, x in enumerate(aircraft):
        print("{:0>3} -> {}".format(i, x))
```

Again, talking with colleagues made me understand a programatic solution. It's given that the plane is full. The ID formula is `row * 8 + col`. The airplane has 8 columns, so seats in the same row will all share the first "piece" of this equation, with the "col" making these ids map to all integers from 0 to 1024 (127 x 8 + 8). With all the ids calculated, I just need to find the difference between the ids I have and the set of all possible ids.

```python
def part_2_for_real_now():
    ids = set()
    for code in read_file():
        row = partition(code[:7], 7, "F", "B")
        col = partition(code[-3:], 3, "L", "R")

        ids.add(row * 8 + col)
    # all possible IDs are between the first and last
    # non-empty seat
    seat = set(range(min(ids), max(ids))) - ids
    return seat.pop()
```

## Day 6: Custom Customs

This day was an exercise on python's [`Counter`][counter] data structure. The input represents questions (marked a to z) people answered "yes" to in a customs declaration form, and for part 1, we're interested in finding how many questions any individual in a group of people answered "yes" to. Each line is an individual, and groups are separated by an empty line.

Ah! Also since this day, I stopped separating the puzzles by parts. I'll just write the solutions and separate into functions the repeat bits for better organization.

So I just pass each line to a `Counter` instance, and add them up for each group. `Counter` implements addition so `Counter('abc') + Counter('cde')` will be equivalent to the dictionary `{'c': 2, 'a': 1, 'b': 1, 'd': 1, 'e': 1}` (note the key `c` has value `2`, because it appears in both sides of the sum).

```python
groups = []
current_group = Counter()
group_size = 0
for line in read_file():
    if line:
        current_group += Counter(line)
        group_size += 1
    else:
        groups.append([current_group, group_size])
        current_group = Counter()
        group_size = 0

print("--- part 1 ---")
# the "length" of each group counter is the amont of unique answers for that group.
# I could use a `set` here: the actual count is not important for part 1
print(sum(map(lambda c: len(c[0]), groups)))
```

Using `Counter`s made part 2 super easy. We learn that we don't want to count how many questions _anyone_ answered "yes", but the ones where _everyone_ in the group answered yes.

So for each group captured in part 1, I call `most_common()` in the counter, which will return each letter sorted by their count in decrescent order. If the count is the same as the size of the group, this letter represents the question all individuals answered "yes" to.

```python
total_count = 0
for group, count in groups:
    for _, ans_count in group.most_common():
        if ans_count == count:
            total_count += 1
        else:
            break

print(total_count)
```

# Day 17: Conway Cubes

The title says it all: we're dealing with [Conway's Game of Life][game-of-life]. The input is a two-dimensional slice of a three-dimensional grid of "cubes" that can either active or inactive. Cubes change their state in cycles, considering the state of their neighbors. In three-dimensional space, each cube has a total of 26 neighbors (a 3x3x3 integer region in this space). The rules are the general of Conway's game of life:

- If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive.
- If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.

All the puzzle is asking is how many cubes will be active after 6 cycles.

I borrowed the "neighbors" processing from day 11 adjacent seat calculation and extrapolated for N dimensions. I thought we were either using this in a future puzzle, or there would be more dimensions in part 2.

```python
from itertools import product

def neighborhood(*position: int) -> Iterator[Tuple[int]]:
    """
    Returns all "integer" neighbors of a point in an N-dimensional space.

    >>> for n in neighborhood(0, 0):
    ...     print(n, end=" ")
    ... (-1, -1) (-1, 0) (-1, 1) (0, -1) (0, 0) (0, 1) (1, -1) (1, 0) (1, 1)
    >>> for n in neighborhood(1, 2, 3):
    ...    print(n, end=" ")
    ... (0, 1, 2) (0, 1, 3) (0, 1, 4) (0, 2, 2) (0, 2, 3) (0, 2, 4) (0, 3, 2) # ...
    """
    for diff in product([-1, 0, 1], repeat=len(position)):
        neighbor = tuple(pos + diff[i] for i, pos in enumerate(position))
        yield neighbor
```

I start by processing the input, saving if they are active (`#`) or inactive (`.`) in a dictionary keyed by the point in 3 dimensions

```python
initial = """
####.#..
.......#
#..#####
.....##.
##...###
#..#.#.#
.##...#.
#...##..
""".strip()

space = defaultdict(lambda: ".")
for x, line in enumerate(initial.splitlines()):
    for y, state in enumerate(line):
        cube = (x, y, 0)
        space[cube] = state
```

Because the space is infinite, cubes for other values of the third-dimension and outside the borders of the input need to be taken into account. Instead of finding the borders of the active nodes, I decided to go over each of the known cubes, and if they are added, I would increment a counter for each of these neighbors. I would end up with more points than the iteration before, and how many of these points have active neighbors.

```python
cube_to_active_count = defaultdict(int)

for cube in space:
    for n in neighborhood(*cube):
        if n == cube:  # don't count the cube itself
            continue
        cube_to_active_count[n] += space[cube] == "#"
```

As I said earlier, dictionary `cube_to_active_count` will end up with more points than the space before. For each of those points I can now decide if they are active or inactive given how many of the original space were active. Here's the direct translation of the rules defined above:

```python
for n, count in cube_to_active_count.items():
    if space[n] == "#":
        if count in [2, 3]:
            space[n] = "#"
        else:
            space[n] = "."
    elif space[n] == ".":
        if count == 3:
            space[n] = "#"
```

After running this 6 times (a simple `for _ in range(6)`), I just sum up the values of the space dictionary that are equal to the active state char `#`.

Part 2 of the puzzle just asked for running the same 6 cycles, but now in a four-dimensions space! No change was needed to the neighborhood calculation, so that was a win. I needed to change the input parsing to allow for another dimension:

```diff
 space = defaultdict(lambda: ".")
 for x, line in enumerate(initial.splitlines()):
     for y, state in enumerate(line):
-        cube = (x, y, 0)
+        cube = (x, y, 0, 0)
         space[cube] = state
```

Then I just copied the code verbatim from part 1 and got to the correct answer. It was taking a couple of seconds to run though, given that now we are growing the space in each cycle due to each cube now adding at most 80 cubes to the "known" space state.

I noticed that I was just counting active cubes in the first for loop to find the affected neighbors, adding a lot of references to new points but only saying these had 0 active cubes around them. So I edited the code to skip neighbor processing of inactive cubes (the majority of the iterations), and with a couple of adjustments, I had a solution running in 0.3 seconds. I then generalized it as well to run for multiple dimensions, with some nice tricks to parse the input. Here's the full code for the cycle:

```python
def full_cycle(initial: str, dimensions: int) -> int:
    space = defaultdict(lambda: ".")
    padding = (0,) * (dimensions - 2)
    for x, line in enumerate(initial.splitlines()):
        for y, state in enumerate(line):
            cube = (x, y) + padding
            space[cube] = state

    for _ in range(6):
        cube_to_active_count = defaultdict(int)

        for cube in space:
            if space[cube] == ".":
                continue
            for n in neighborhood(*cube):
                # neighborhood contains cube and all its neighbors.
                # `cube_to_active_count[n] += n != cube` ensures
                # active cubes without active neighbors are counted
                # and proper deactivated by underpopulation in the
                # next for-loop.
                cube_to_active_count[n] += n != cube and space[cube] == "#"
        for n, count in cube_to_active_count.items():
            if space[n] == "#":
                if count in [2, 3]:
                    space[n] = "#"
                else:
                    space[n] = "."
            elif space[n] == ".":
                if count == 3:
                    space[n] = "#"

    return sum(state == "#" for state in space.values())

print("--- part 1 ---")
print(full_cycle(initial, 3))
print("--- part 2 ---")
print(full_cycle(initial, 4))
```

There are a couple of tricks to decrease the line count around the check if a cube becomes active or inactive, but it wouldn't add much in terms of performance. I'm pretty happy with this solution!

[aoc-about]: https://adventofcode.com/about
[aoc-repo]: https://github.com/rbusquet/advent-of-code
[day-1]: https://adventofcode.com/2020/day/1
[day-2]: https://adventofcode.com/2020/day/2
[day-3]: https://adventofcode.com/2020/day/3
[day-4]: https://adventofcode.com/2020/day/4
[day-5]: https://adventofcode.com/2020/day/5
[combinations]: https://docs.python.org/3.8/library/itertools.html?#itertools.combinations
[count]: https://docs.python.org/3.8/library/itertools.html?#itertools.count
[triplet-sum]: https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/
[regexp]: https://en.wikipedia.org/wiki/Regular_expression
[counter]: https://docs.python.org/3/library/collections.html#collections.Counter
[toboggan]: https://en.wikipedia.org/wiki/Toboggan
[game-of-life]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
