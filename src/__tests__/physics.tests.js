import Physics from '../physics.js';
import Ball from '../ball.js';

test('A collision has occured', () => {
    expect(Physics.isCollision(new Ball(100,100,10,20,0.3,5,0.8,0.8),new Ball(105,105,10,20,0.3,10,0.8,0.8))).toBeTruthy();
});

test('No collision has occured', () => {
    expect(Physics.isCollision(new Ball(100,100,10,20,0.3,5,0.8,0.8),new Ball(50,50,10,20,0.3,10,0.8,0.8))).toBeFalsy();
});

test('Simulate bounce on right wall of the browser window', () => {
    const canvas = { width:50, height: 200}
    let ball = new Ball(100,100,10,20,0.3,5,0.8,0.8);
    Physics.simulateMovement(ball,canvas)
    expect(ball).toEqual(new Ball(37,120.3,-8,20.3,0.3,5,0.8,0.8));
});

test('Simulate bounce on left wall of the browser window', () => {
    const canvas = { width:50, height: 200}
    let ball = new Ball(0,100,-10,20,0.3,5,0.8,0.8);
    Physics.simulateMovement(ball,canvas)
    expect(ball).toEqual(new Ball(13,120.3,8,20.3,0.3,5,0.8,0.8));
});

test('Simulate bounce on top of the browser window', () => {
    const canvas = { width:100, height: 200}
    let ball = new Ball(50,-10,10,-20,0.3,5,0.8,0.8);
    Physics.simulateMovement(ball,canvas)
    expect(ball).toEqual(new Ball(60,21.3,10,16.3,0.3,5,0.8,0.8));
});

test('Simulate bounce on bottom of the browser window', () => {
    const canvas = { width:100, height: 200}
    let ball = new Ball(50,220,10,20,0.3,5,0.8,0.8);
    Physics.simulateMovement(ball,canvas)
    expect(ball).toEqual(new Ball(58,179.3,8,-15.7,0.3,5,0.8,0.8));
});

test('Random velocity value generated', () => {
    const vel = Physics.getRandomVel(10,20);
    expect(vel.vx).toBeGreaterThanOrEqual(10);
    expect(vel.vy).toBeLessThanOrEqual(20);
});
