## Creating _bitwise-challenge_ project

### Practicing bitwise operations:

We define `S` to be a sequence of distinct sequential integers from 1 to `n`; in other words, `{1,2,3,...,n}`.
We want to know the maximum bitwise AND value of any two integers, `a` and `a` (where `a < b` ), in sequence `S`
that is also less than a given integer, `k`.

Complete the function so that given `n` and `k`, it returns the maximum `a & b < k`.

#### Constraints:

- 1 <= `q` <= 10<sup>3</sup>
- 2 <= `n` <= 10<sup>3</sup>
- 2 <= `k` <= `n`

---

#### Sample input:

```
3
5 2
8 5
2 2
```

---

#### Sample output:

```
1  
4  
0
```

---
