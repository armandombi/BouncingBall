import Ball from '../ball.js';

test('test collision check', () => {
    const ball = new Ball(100,100,10,20,0.3,5,0.8,0.8);
    let balls = [];
    balls.push(ball);
    balls.push(new Ball(50,50,10,20,0.3,5,0.8,0.8));
    expect(balls.shift().checkCollision(balls)).toBe(ball);
});