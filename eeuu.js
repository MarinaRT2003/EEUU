function validateTarget(lat, lon){
    if ((typeof lat === 'number') && (typeof lon === 'number') && (lat < 53 || lat> 17) && (lon < 135 || lon > 73)) {
        return true;
    } else  {
        return false;
    }
}

module.exports = {validateTarget};