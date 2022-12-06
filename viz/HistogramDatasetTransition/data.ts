// Standard Normal variate using Box-Muller transform.
// https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
const gaussianRandom = (mean=0, stdev=1) => {
    let u = 1 - Math.random(); //Converting [0,1) to (0,1)
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
}

export const data = Array.from({ length: 1000 }, () =>
    gaussianRandom(60, 10)
);


export const data2 = Array.from({ length: 1000 }, () =>
    gaussianRandom(40, 10)
);
