/**
 * Created by sirenko on 29.05.17.
 */

let DatasetProvider = require('dataset-provider');
let csvLoader = require('csv-load-sync'); // TODO: add to dependencies if needed

class DatasetProviderCSV extends DatasetProvider {

    constructor(cache) {
        super(cache);
        this.cache = cache
    }

    getDataset(params) {
        let mockData = this.cache.get(params);
        if (mockData == undefined) {
            mockData = csvLoader('test/custom/file.csv').reduce(function(acc, item, index) {
                acc['Test case ' + index] = item;
                return acc;
            }, {});
        }
        mockData = Object.freeze(mockData);
        this.cache.set(params, mockData);
        return Promise.resolve(mockData);
    }
}

module.exports = DatasetProviderCSV;