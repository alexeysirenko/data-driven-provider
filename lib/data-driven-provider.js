
let DatasetProvider = require('./providers/dataset-provider');
let DatasetProviderCSV = require('./providers/dataset-provider-csv');
let DatasetProviderYAML = require('./providers/dataset-provider-yaml');
let datasetProviderFactory = require('provider-factory');

let dataDrivenProvider = {
    DatasetProvider: DatasetProvider,
    DatasetProviderCSV: DatasetProviderCSV,
    DatasetProviderYAML: DatasetProviderYAML,
    datasetProviderFactory: datasetProviderFactory
};
module.exports = dataDrivenProvider;
