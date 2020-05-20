# Condtional and Logical operators

## Overview
 
Conditional and logical operators are used in decision-making statements, which determine the path of execution based on the condition specified as a combination of multiple Boolean expressions. 

A critical requirement of every conditional is the condition. The condition is what determines the decision to be made in the program.

In JavaScript, this condition can be any valid expression. Usually, this condition expression, however complex it is, is evaluated to one of two values called booleans: either true or false.

A proper understanding of how the JavaScript engine converts these condition expressions to booleans is necessary for writing correct and predictable conditional logic.

Identifying truthy and falsy values fundamental concept that can enable us to understand the conversions - 
Every value in JavaScript can be classified as either truthy or falsy. The falsy values in JavaScript are as follows:

```
'' or "" or ``(an empty string)
0 or -0 (the number 0)
null
undefined
NaN
false
```
Every other value besides the ones in this list are truthy values. Whenever JavaScript expects a boolean value, truthy values are implicitly coerced to true while falsy values are implicitly coerced to false.

### Prerequisite
Learn about [Comparison operators in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

## Learning Outcome

- What are conditional operators?
- What are logical operators?
- How to use them together to decide the flow control of a program?


## Introduction

### Conditional Operators

Sometimes, we need to perform different actions based on different conditions. For this we use condtional operators. There are different types of conditionals operators in javascript. Click on each on of them to read in depth about it.

1. [If](https://www.geeksforgeeks.org/else-statement-javascript/#if)  conditional operator
2. [if - else](https://www.geeksforgeeks.org/else-statement-javascript/#if-else)  conditional operator 
3. [if - else if - else](https://www.geeksforgeeks.org/else-statement-javascript/#if-else-if)  conditional operator
4. [Ternary operator](https://www.javascripttutorial.net/javascript-ternary-operator/)

#### what must you do
- Read and [Solve excerices related to conditional operators](https://javascript.info/ifelse#boolean-conversion)

### Logical Operators

If you are learning to code or new to coding, you will be using logical operators, these are typically used with Boolean values. But you need to pay close attention to it, since && and || operators will return the value of the specified operand, so if the operand is using a non-Booleans value, the return will be a non-Boolean value.

Logical operators are used with any primitive value or object. Its result will be based in whether the value is truthy or falsy:

There are three logical operators in JavaScript: ! (NOT), && (AND), ||(OR) - represented with two vertical line symbols.
#### 1. ! - Logical NOT operator
Using the ! operator in front of a value will convert it to a Boolean and return an opposite value. It means that a truthy value will return false, and a falsy will return true.

    ```
    The following example shows how to use the logical NOT operator.
    !a
    ```

    The logical NOT operator works based on the following rules:

    If a is undefined, the result is true.
    If a is null, the result is true.
    If a is a number other than 0, the result is false.
    If a is NaN, the result is true.
    If a is null, the result is true.
    If a is an object, the result is false.
    If a is an empty string, the result is false. In case a is a non-empty string, the result is true.
    If a is a Boolean value, it negates the value of a i.e., true becomes false and vice versa.

    The following demonstrates the rules of the logical NOT operator:
    console.log(!undefined); // true
    console.log(!null); // true
    console.log(!30); //false
    console.log(!0); //true
    console.log(!NaN); //true
    console.log(!{}); // false
    console.log(!''); //true
    console.log(!'TRUE'); //false
    console.log(!false); //true
    console.log(!true); //false

#### 2. && (AND) Logical Operator

The logical operator is used with two or more values (operands), and only evaluates to true if all the operands are truthy. The value returned will be the last truthy value if they are all true, but it will return the first falsy value if at least one value is false.


```
false && false // false
false && true // false
true && false // false
true && true // true
```

Example 
```
const x = 7;
const y = 4;

(x < 10 && y > 1); // true 
(x < 10 && y < 1); // false
```

#### 3. || (OR) Logical Operator

The logical operator || (OR) also is used with two or more values, but it evaluates to true if any of the operands (values) are true, so only evaluates to false if both operands are falsy.

```
false && false // false
false && true // true
true && false // true
true && true // true
```

Example - 
```
const x = 7;
const y = 4;

(x == 5 || y == 5); // false 
(x == 7 || y == 0); // true
(x == 0 || y == 4); // true
(x == 7 || y == 4); // true
```

#### what must you do
- The && and || operators are called short-circuit operators. They will return the value of the second operand based on the value of the first operand. Read about [short circuiting in JS](https://dev.to/akhil_001/short-circuit-evaluation-in-javascript-3o5a)
- Read and solve problems in the [excerise](https://javascript.info/logical-operators)

## Additional Resources

- Dive deeper into [JS Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Mastering JavaScript’s && and || logical operators](https://blog.usejournal.com/mastering-javascripts-and-logical-operators-fd619b905c8f)


