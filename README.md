# Draw Ovals(s) and Circle(s)

This JavaScript snippet can be used to draw  ovals and circles using a canvas element. The ovals can be arbitrarily rotated with respect to the canvas. By controling the center of each graph, the curves can be partly or fully shown.

The code contains the following geometric and algebraic functions:
1.  `dotproduct(a,b)`: to compute the dot product of two vectors, `a` and `b`.
2.  `translate(sw,x,dx)`: to translate a vector $\pm$`x` in the direction `dx`. Here we use `sw = 1` to do the translation `x+dx` and `sw = -1` to do the translation `-x+dx`.
3.  `transpose(a)`: to do the transpose of a matrix `a`.
4.  `function rotate(x,u)`: to rotate a vector `x` through an angle `u` in radians.
5.  `function multiply(a,b)`: to calculate the product `ab` of the two matrices `a` and `b` which shold have compatible dimensions.
6.  `function drawOval(_Pvals)`: to draw an oval. `_Pvals` is an array containing the oval paramteres explained below.
7.  `function drawCircle(_Pvals)`: to draw a circle with parameters contained in the array `_Pvals` as explained below.

To draw an oval, use the call
```
drawOval([x0, y0, rx, ry, ang]);
```
where
- `x0, y0` are the xy-coordinated of the center of the oval.
- `rx,rx` are the 'radii' of the unrotated oval in the `x` ans `y` directions, respectively.
- `ang` is the angle of rotation of the oval counter clockwise.

To draw a circle, use the call
```
drawCircle([x0, y0, r]);
```
where
- `x0, y0` are the xy-coordinated of the center of the circle.
- `r` is the radius of the circle.

We should mention that JavaScript has a builtin function, `ellipse()` that can also be used to draw an ellipse. However, since we are using the builtin  function `bezierCurveTo()`, `drawOval()`, we have more control over the produced ovals through the Bezier control points. One can think of these ovals as 'illusions' of an ellipses. The file oval.html gives a quick example of that. 