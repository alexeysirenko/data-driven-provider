/**
 * Created by sirenko on 29.05.17.
 */

let DatasetProvider = require('./providers/dataset-provider');
let DatasetProviderCSV = require('./providers/dataset-provider-csv');
let DatasetProviderYAML = require('./providers/dataset-provider-yaml');

// Factory
let datasetProviderFactory = function(config) {
    let cache = new WeakMap();
    let datasetProvider;
    switch (config.provider.toLowerCase()) {
        case 'csv':
            datasetProvider = new DatasetProviderCSV(cache);
            break;
        case 'yaml':
            datasetProvider = new DatasetProviderYAML(cache);
            break;
        default:
            throw new Error('Unknown dataset provider name ' + config.provider);
    }
    if (!(datasetProvider instanceof DatasetProvider)) {
        throw new Error(datasetProvider.constructor.name + ' must implement `DatasetProvider` interface!');
    }
    return datasetProvider;
};

module.exports = datasetProviderFactory;