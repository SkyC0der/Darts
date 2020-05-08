const score = (x, y) => {
  //  Equation of Circle is x^2 + y^2 = r^2
  if (isNaN(x) || isNaN(y)){return null};
  let radius = Math.sqrt(x*x + y*y );
 return (radius <= 1) ? 10 : (radius <= 5) ? 5 : (radius <= 10) ? 1 : 0; 
  }

module.exports = score;