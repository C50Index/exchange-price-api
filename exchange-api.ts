class Exchange {
  name : string;
  rootUrl : string;

    constructor(name, rootUrl) {
        this.name = name;
        this.rootUrl = rootUrl;
    }

    symbols() : string[] {
      throw "Not implemented error";
      return null;
    }
}

class BitFinex {
  
}

const CryptoPriceAPI = function() {
  let self = this;
  self.symbols = function() : string[] {
    let symbols : string[] = [];
    symbols[0] = "BTC";
    return symbols;
  }
};