class Trapez {
  constructor(a, c, h) {
    this.a = a;
    this.c = c;
    this.h = h;

    this.x = (this.a - this.c) / 2.0;
    this.y = this.x;
    this.m = (this.a + this.c) / 2.0;

    this.alpha = Math.atan(this.h / this.x); // α
    this.beta = Math.atan(this.h / this.y); // β
    this.gamma = Math.PI - this.beta; // γ
    this.delta = Math.PI - this.alpha; // δ

    this.b = this.h / Math.sin(this.beta);
    this.d = this.h / Math.sin(this.alpha);

    this.A = this.m * this.h;
  }
}

/** cotangent */
function cot(x) {
  return 1 / Math.tan(x);
}

let trapez = new Trapez(5, 2, 3);
console.log(trapez);

// percentage
const p = 0.5; 
const A_t = trapez.A * p;

const a = -cot(trapez.alpha);
const b = 2 * trapez.x + trapez.c;
const c = -A_t;

const h_t_1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)
const h_t_2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a)

console.log(h_t_1, h_t_2);

if (h_t_1 < trapez.h && h_t_1 >= 0) {
  console.log(`${p * 100}% of A [${trapez.A}] is ${A_t} with h = ${h_t_1}`);
}
if (h_t_2 < trapez.h && h_t_2 >= 0) {
  console.log(`${p * 100}% of A [${trapez.A}] is ${A_t} with h = ${h_t_2}`);
}
