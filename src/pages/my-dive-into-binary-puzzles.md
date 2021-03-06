---
title: My Dive into Binary Modulus Calculation Puzzles
date: "2017-11-20"
---

#####This blog summarizes my dive into a series of binary bitwise modulus calculation related Codewars puzzles.

I’ve just become a 3 kyu player on Codewars. Recently I came across a 4 kyu kata on Codewars which caught my eyes particularly and made me decide to commit my time and effort in order to dig deeper into the problem. And finally, it led me solved my first 1 kyu kata.
>

Here is the description of that 4 kyu problem:

>“ Your task is to create a regular expression capable of evaluating binary strings (strings with only 1s and 0s) and determining whether the given string represents a number divisible by 3.”

And it came with a hint:

>“There’s a way to develop an automata (FSM) that evaluates if strings representing numbers in a given base are divisible by a given number. You might want to check an example of an automata for doing this same particular task [here](http://math.stackexchange.com/questions/140283/why-does-this-fsm-accept-binary-numbers-divisible-by-three).”

As a non-CS graduate, this is my first time to get in touch with a finite state machine. (It looks the state diagram in Control Theory though). Here is the link of FSM on [Wikipedia](https://en.wikipedia.org/wiki/Finite-state_machine).

![Image not found. Sorry for that!](https://cdn-images-1.medium.com/max/800/1*--13nyOAkb5967ngamMypQ.png)


In this diagram, each of the three states A, B and C represents the modulus of the input binary number, which is 0, 1 and 2 respectively. When a 0 is added to the end of a binary number, it is multiplied by 2. And when a 1 is added to the end instead, it is multiplied by 2 and then added with 1. This principle directs the flow of the bitwise calculation from one state to the other.
>

To use a regular expression to evaluate a binary string, we simply need to include all of the possible paths in the above state diagram. My solution is shown as follows.
>

    var multipleOf3Regex = /^(0*(1(01*0)*1)*)*$/;

With the same idea of this method, we are able to solve a similar kata:

>“Define a regular expression which tests if a given string representing a binary number is divisible by 5.”

It is such a similar puzzle with the previous one. And yet there are two more states involved. It is going to be more painful going through all of the paths. But it is still achievable as long as I have enough patience. Followed the idea of the above FSM with three states, I drew out the FSM of 5 states from my understanding. (Please bear with my hand-drawing.)
>

![Image was not found. Sorry for that!](https://cdn-images-1.medium.com/max/800/1*gqeL_ITAoDoS_LhvCfuOeg.jpeg)
>

The following is my regex for binary numbers divisible by 5:

    '^(0*(1((10)*(001*00)*)*(0|(11))(01*0(01)*(1|00))*1)*)*$'

And eventually, here comes the 1 kyu kata:

>“Create a function that will return a regular expression string that is capable of evaluating binary strings (which consist of only 1s and 0s) and determining whether the given string represents a number divisible by n. Inputs 1 ≤ n ≤ 18 will be tested”

As I completed the previous two 4 kyu katas, I had a naive instinct that I should simply draw out all of the FSMs from 1 to 18, go through all of the possible paths and give out 18 regular expressions within a switch function.
>

As soon as I reached n = 6, I started to make countless amount of mistakes. It didn’t seem that I was on the right track.
>

![Image was not found. Sorry for that!](https://cdn-images-1.medium.com/max/600/1*ShzBYConxnz4IubJTjDSaw.jpeg)
>

There must be a way to simplify the diagram, to eliminate the states. Fortunately, there are a plenty of tutorials accessible on the internet.
>

The state elimination method inspired me that the diagram can be simplified state by state, which is perfect for a for-loop to automize the calculation. This is what a programmer should work on, instead of trying to hard-code the problem — There is no need to mention how long the regular expression would be when the input n grows to 18.
>

After the above countlessly painful attempts, I finally had my solution for this 1 kyu problem.
>

    function regexDivisibleBy(n) {
    let Nodes = [];
    for(let i = 0; i < n; i++) {
        Nodes.push(''+i);
    }
    let paths = {},
        output = '';
    for (let i = n - 1; i >= 0; i--) {
        let x = Nodes[i];
        if(i % 2 === 0 && i !== 0) {
        if(paths[Nodes[i / 2] + x]) {
            paths[Nodes[i / 2] + x] = `(${paths[Nodes[i / 2] + x]}|0)`;
        } else {
            paths[Nodes[i / 2] + x] = '0';
        }
        }
        else if (i % 2 !== 0) {
        if (paths[Nodes[(i - 1) / 2] + x]) {
            paths[Nodes[(i - 1) / 2] + x] = `(${paths[Nodes[(i - 1) / 2] + x] + x}|1)`;
        } else {
            paths[Nodes[(i - 1) / 2] + x] = '1';
        }
        }
        if ((2 * i) % n < i) {
        if (paths[x + Nodes[(2 * i) % n]]) {
            paths[x + Nodes[(2 * i) % n]] = `(${paths[x + Nodes[(2 * i) % n]]}|0)`;
        } else {
            paths[x + Nodes[(2 * i) % n]] = '0';
        }
        } else if ((2 * i) % n === i) {
        if (paths[x + x]) {
            paths[x + x] = `(${paths[x + x]}0*)*`;
        } else {
            paths[x + x] = '0*';
        }
        }
        if ((2 * i + 1) % n < i) {
        if (paths[x + Nodes[(2 * i + 1) % n]]) {
            paths[x + Nodes[(2 * i + 1) % n]] = `(${paths[x + Nodes[(2 * i + 1) % n]]}|1)`;
        } else {
            paths[x+Nodes[(2 * i + 1) % n]] = '1';
        }
        } else if ((2 * i + 1) % n === i) {
        if (paths[x + x]) {
            paths[x + x] = `(${paths[x + x]}1*)*`;
        } else {
            paths[x + x] = '1*';
        }
        }
        
        //eliminate states
        let start = [],
            end = [],
            loop = '';
        let pathkeys = Object.keys(paths);
        pathkeys.forEach(y => {
        if (y === x + x) {
            loop = paths[x + x];
        } else if (y[1] === x && y[0] !== x) {
            start.push(y[0]);
        } else if (y[0] === x && y[1] !== x) {
            end.push(y[1]);
        }
        });
        start.forEach(s => {
        end.forEach(e => {
            if (s !== e) {
            if (paths[s + e]) {
                paths[s + e] = `(${paths[s + e]}|(${paths[s + x]+loop+paths[x + e]}))`;
            } else {
                paths[s + e] = paths[s + x] + loop + paths[x + e];
            }
            } else {
            if (paths[s + s]) {
                paths[s + s] = `(${paths[s + s]}(${paths[s + x] + loop + paths[x + e]})*)`;
            } else {
                paths[s + s] = `(${paths[s + x] + loop + paths[x + e]})*`;
            }
            }
        });
        });
        if (i!== 0) {
        pathkeys.forEach(j => {
        if(j.indexOf(x) !== -1) {
            delete paths[j]
        }
        });
        }
    }
    return `^${paths['00']}$`;
    }
>

Although it passed all of the test on Codewars, it is not an elegant solution. When I went through the solutions of other players, I noticed that the obviously better data structure to implement in this problem is diagram with linked nodes. And this gave me such a lesson that I should always firstly specify what data structure is the most suitable one before I start get my hands dirty.
>

I am working on revising my solution now. I will continue my blog about this puzzle as soon as I finish that better solution.
>

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/4n0xNbfJLR8" frameborder="0" allowfullscreen></iframe> -->

