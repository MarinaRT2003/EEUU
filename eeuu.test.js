const {validateTarget} = require('./eeuu');

test ('validateTarget', () => {
    expect(validateTarget(53, 135))(true);
});

test ('validateTarget', () => {
    expect(validateTarget(53, 136))(false);
});