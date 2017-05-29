/**
 * Created by sirenko on 29.05.17.
 */

let DatasetProvider = require('dataset-provider');

class DatasetProviderYAML extends DatasetProvider {

    getDataset(params) {
        let mockData = {
            "test1": {
                email: "eggs"
            }
        };
        return Promise.resolve(mockData);
    }

}

module.exports = DatasetProviderYAML;