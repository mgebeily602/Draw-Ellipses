# Draw Ellipse(s) and Circle(s)

This JavaScript snippet can be used to draw  an ellipse and a circle using a canvas element. The ellipse can be arbitrarily rotated with respect to the canvas. By controling the center of each graph, the curves can be partly or fully shown.

The Javascript code contains the following defined functions:
1.  `dotproduct(a,b)`: to compute the dot product of two vectors, `a` and `b`.
2.  `translate(sw,x,dx)`: to translate a vector $\pm$`x` in the direction `dx`. Here we use `sw = 1` to do the translation `x+dx` and `sw = -1` to do the translation `-x+dx`.
3.  `transpose(a)`: to do the transpose of a matrix `a`.
4.  `function rotate(x,u)`: to rotate a vector `x` through an angle `u` in radians.
5.  `function multiply(a,b)`: to calculate the product `ab` of the two matrices `a` and `b` which shold have compatible dimensions.
6.  `function drawEllipse(_Pvals)`: to draw an ellipse. `_Pvals` is an array containing the ellipse paramteres explained below.
7.  `function drawCircle(_Pvals)`: to draw a circle with parameters contained in the array `_Pvals` as explained below.

To draw an ellipse, use the call
```
drawEllipse([x0, y0, rx, ry, ang]);
```
where
- `x0, y0` are the xy-coordinated of the center of the ellipse.
- `rx,rx` are the 'radii' of the unrotated ellipse in te `x` ans `y` directions, respectively.
- `ang` is the angle of rotation of the ellipse counter clockwise.

To draw a circle, use the call
```
drawCircle([x0, y0, r]);
```
where
- `x0, y0` are the xy-coordinated of the center of the circle.
- `r` is the radius of the circle.

We should mention that, since we are using the builtin  Javascript function `bezierCurveTo()`, `drawellipse` does not draw an actual ellipse, but rather the 'illusion' of an ellipse. 