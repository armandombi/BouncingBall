import Utility from '../util.js';

test('test a valid color is generated', () => {
    expect(Utility.getRandomColor()).toMatch(/^#[0-9A-F]{6}$/);
});

test('determine current position on canvas', () => {
    var event = { pageX: 10, pageY: 50 }
    var canvas = { offsetLeft: 5, offsetTop: 10 }
    expect(Utility.getCurrentPosition(event, canvas)).toMatchObject({ x: 5, y: 40 });
});

test('test getSetting with non existing item value', () => {
    expect(Utility.getSetting("",0.5)).toBe(0.5);
});
