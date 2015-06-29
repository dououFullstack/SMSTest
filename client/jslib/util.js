util = {
    _copyAndAddItem: function (srcItem, addObj) {
        var result = {};
        for (var key in srcItem) {
            result[key] = srcItem[key];
        }
        for (var key in addObj) {
            result[key] = addObj[key];
        }
        return result;
    }
};
