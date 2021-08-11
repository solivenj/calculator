# calculator

Simple Calculator made with HTML, CSS, and JS.

[Live Demo](https://jcsoliven.com/calculator)

## Description

This is a mini-project that can do basic operations. I modeled the look of the calculator after iOS stock calculator application.

Operations include:
  - Addition
  - Subtraction
  - Multiplication
  - Division

## Features

- Keyboard Support

<center>
  
| Buttons | Inputs |
|:-------:|:------:|
|    +    |    +   |
|    -    |    -   |
|    /    |    ÷   |
|    *    |    x   |
|    _    |   +/-  |
  
</center>

- Negative Numbers
- Decimals

## Common Misinputs

During testing, I noticed that if I had clicked on a button, and then pressed the "Enter" key after, each press of the "Enter" key would result in the click event listener to fire on that button, resulting in an input. This can cause additional inputs being added to the operands or for additional presses of the last operation pressed, resulting in the button staying active even though the correct answer is displayed. This happens because the "Enter" key causes the operation to be evaulated (and the answer to be displayed) but also causes the operation to be presssed again. If anyone knows how this can be prevented, please submit an issue, pull request, or reach me at <john.c.soliven@gmail.com>!

## What's Next

I had fun making this project, but I can definitely clean up my code some more.

I want the live demo to be responsive and essentially look as though there is an emulated iPhone running the calculator application on desktop-size viewports, but also look as if the calculator app is being run on the browser and fit the edges of the calculator to the mobile window.
