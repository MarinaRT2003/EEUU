const {validateTarget} = require('./validador');

test ('validateTarget', () => {
    expect(validateTarget(53, 135)).toBe(true);
});

test ('validateTarget', () => {
    expect(validateTarget(53, 136)).toBe(false);
});