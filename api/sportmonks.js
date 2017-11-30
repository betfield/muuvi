class SportmonksApi {
    constructor(baseUrl, tokenId) {
        this.token = tokenId;
        this.baseUrl = baseUrl;
    }

    get(endpoint, params) {
        let url = this._composeUrl(endpoint, params);
        console.log("Fetching data from Sportmonks url: " + url);

        //Return promise with data from url
        return fetch(url)
            .then(this._handleErrors)
            .catch(err => console.log(err));
            
    }

    _handleErrors(response) {
        if (!response.ok) {
            throw Error("Failed to load Sportmonks data. Status code: " + response.statusCode + "; Status text: " + response.statusText);
        }
        return response;
    }

    _composeUrl(endpoint, params) {
        let page;
        let newEndpoint = this.baseUrl + endpoint;
        let wrapped = endpoint.match(/\{(.*?)\}/g);
        if (wrapped) {
            let unwrapped = (wrapped) => wrapped.replace('{', '').replace('}', '');
            for (let w in wrapped) {
                let k = unwrapped(wrapped[w]);
                newEndpoint = newEndpoint.replace(wrapped[w], params[k]);
                delete params[k];
            }
        }
        newEndpoint += "?api_token=" + this.token;
        if (params && Object.keys(params).length > 0) {
            let plist = [];
            let pkeys = Object.keys(params);
            for (let p in pkeys) {
                if (pkeys[p] != 'page' && params[pkeys[p]])
                    plist.push(pkeys[p]);
                else {
                    if (pkeys[p] == 'page')
                        page = params[pkeys[p]];
                }
            }
            if (page)
                newEndpoint += "&page=" + page;
            if (plist.length > 0)
                newEndpoint += "&include=" + plist.join(',');
        }
        return newEndpoint;
    }
}
export { SportmonksApi }