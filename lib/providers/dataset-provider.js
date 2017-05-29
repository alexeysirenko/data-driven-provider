/**
 * Created by sirenko on 29.05.17.
 */

// Interface
class DatasetProvider {
    getDataset(params) {
        return Promise.reject(new TypeError(this.constructor.name + ' must implement the `getDataset` method!'));
    }
}

module.exports = DatasetProvider;