## Creating _regexpMr-challenge_ project

### Learning regular expressions:

Complete the function by returning a RegExp object, *re*,
that matches any string *s* satisfying both of the following conditions:

- String *s* starts with the prefix *Mr., Mrs., Ms., Dr., or Er.*
- The remainder of string *s* (i.e., the rest of the string after the prefix) consists of one or more upper
and/or lowercase English alphabetic letters (i.e., *[a-z] and [A-Z]*).

#### Constraints:

- The length of string *s* is `>= 3`

---

#### Sample input 0:

Mr.X

---

#### Sample output 0:

true

---

#### Sample input 1:

Mrs.Y

---

#### Sample output 1:

true

---

#### Sample input 2:

Dr#Joseph

---

#### Sample output 2:

false

---
