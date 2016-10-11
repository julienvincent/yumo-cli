SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "ui/": "app/"
  },
  trace: true,
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.14"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "ui": {
      "main": "app.js"
    },
    "ui/components": {
      "main": "index.js"
    },
    "npm:modelizr@0.7.10": {
      "map": {
        "lodash": "npm:lodash@4.15.0",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "chance": "npm:chance@1.0.4",
        "normalizr": "npm:normalizr@2.2.1",
        "json-schema-faker": "npm:json-schema-faker@0.3.6",
        "faker": "npm:faker@3.1.0"
      }
    },
    "npm:normalizr@2.2.1": {
      "map": {
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:json-schema-faker@0.3.6": {
      "map": {
        "chance": "npm:chance@1.0.4",
        "faker": "npm:faker@3.1.0",
        "randexp": "npm:randexp@0.4.3",
        "deref": "npm:deref@0.6.4"
      }
    },
    "npm:deref@0.6.4": {
      "map": {
        "deep-extend": "npm:deep-extend@0.4.1"
      }
    },
    "npm:randexp@0.4.3": {
      "map": {
        "discontinuous-range": "npm:discontinuous-range@1.0.0",
        "ret": "npm:ret@0.1.12"
      }
    },
    "npm:react-router@2.8.0": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "invariant": "npm:invariant@2.2.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "history": "npm:history@2.1.2"
      }
    },
    "npm:react-redux@4.4.5": {
      "map": {
        "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
        "invariant": "npm:invariant@2.2.1",
        "loose-envify": "npm:loose-envify@1.2.0",
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:redux@3.6.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "symbol-observable": "npm:symbol-observable@1.0.2",
        "lodash-es": "npm:lodash-es@4.15.0",
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:history@2.1.2": {
      "map": {
        "warning": "npm:warning@2.1.0",
        "invariant": "npm:invariant@2.2.1",
        "deep-equal": "npm:deep-equal@1.0.1",
        "query-string": "npm:query-string@3.0.3"
      }
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:query-string@3.0.3": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "github:capaj/systemjs-hot-reloader@0.6.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "weakee": "npm:weakee@1.0.0",
        "socket.io-client": "github:socketio/socket.io-client@1.5.0"
      }
    }
  },
  map: {
    "ui": "app",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "moment": "npm:moment@2.15.0",
    "object-assign": "npm:object-assign@4.1.0",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
    "redux-logger": "npm:redux-logger@2.6.1",
    "redux-saga": "npm:redux-saga@0.11.1",
    "redux-thunk": "npm:redux-thunk@2.1.0",
    "react-redux": "npm:react-redux@4.4.5",
    "react-router": "npm:react-router@2.8.0",
    "react-router-redux": "npm:react-router-redux@4.0.5",
    "redux": "npm:redux@3.6.0",
    "redbox-react": "npm:redbox-react@1.3.0",
    "modelizr": "npm:modelizr@0.7.10"
  },
  meta: {
    "*.js": {
      "babelOptions": {
        "stage1": true,
        "plugins": [
          "react-hot-loader/babel"
        ]
      }
    },
    "*.pcss": {
      "loader": "server/parseCss.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "jspm-devtools": "npm:jspm-devtools@1.1.8",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "socket.io-client": "github:socketio/socket.io-client@1.5.0",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "jspm-loader-css": "github:MeoMix/jspm-loader-css@master",
    "postcss-import": "github:MeoMix/postcss-import@master",
    "postcss": "npm:postcss@5.2.0",
    "postcss-cssnext": "npm:postcss-cssnext@2.8.0",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "cluster": "github:jspm/nodelibs-cluster@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "react-hot-loader": "npm:react-hot-loader@3.0.0-beta.3",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "lodash": "npm:lodash@4.15.0",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.3.1",
    "react-dom": "npm:react-dom@15.3.1",
    "react-motion": "npm:react-motion@0.4.4",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "npm:react@15.3.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "fbjs": "npm:fbjs@0.8.4",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:fbjs@0.8.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "immutable": "npm:immutable@3.8.1",
        "core-js": "npm:core-js@1.2.7"
      }
    },
    "npm:react-motion@0.4.4": {
      "map": {
        "performance-now": "npm:performance-now@0.2.0",
        "raf": "npm:raf@3.3.0"
      }
    },
    "npm:raf@3.3.0": {
      "map": {
        "performance-now": "npm:performance-now@0.2.0"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
        "node-fetch": "npm:node-fetch@1.6.1"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.0"
      }
    },
    "npm:stream-http@2.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "asn1.js": "npm:asn1.js@4.8.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:redbox-react@1.3.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "error-stack-parser": "npm:error-stack-parser@1.3.6",
        "react-dom": "npm:react-dom@15.3.1"
      }
    },
    "npm:error-stack-parser@1.3.6": {
      "map": {
        "stackframe": "npm:stackframe@0.3.1"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:react-hot-loader@3.0.0-beta.3": {
      "map": {
        "babel-template": "npm:babel-template@6.15.0",
        "react-deep-force-update": "npm:react-deep-force-update@2.0.1",
        "global": "npm:global@4.3.0",
        "react-proxy": "npm:react-proxy@3.0.0-alpha.1",
        "redbox-react": "npm:redbox-react@1.3.0",
        "source-map": "npm:source-map@0.4.4"
      }
    },
    "npm:babel-template@6.15.0": {
      "map": {
        "babel-types": "npm:babel-types@6.15.0",
        "lodash": "npm:lodash@4.15.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-traverse": "npm:babel-traverse@6.15.0",
        "babylon": "npm:babylon@6.9.2"
      }
    },
    "npm:react-proxy@3.0.0-alpha.1": {
      "map": {
        "lodash": "npm:lodash@4.15.0"
      }
    },
    "npm:babel-types@6.15.0": {
      "map": {
        "lodash": "npm:lodash@4.15.0",
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "to-fast-properties": "npm:to-fast-properties@1.0.2",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:babel-runtime@6.11.6": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:global@4.3.0": {
      "map": {
        "process": "npm:process@0.5.2",
        "min-document": "npm:min-document@2.18.1",
        "node-min-document": "npm:min-document@2.18.1"
      }
    },
    "npm:babel-traverse@6.15.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "babel-types": "npm:babel-types@6.15.0",
        "lodash": "npm:lodash@4.15.0",
        "babylon": "npm:babylon@6.9.2",
        "babel-code-frame": "npm:babel-code-frame@6.11.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "debug": "npm:debug@2.2.0",
        "babel-messages": "npm:babel-messages@6.8.0"
      }
    },
    "npm:babel-code-frame@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@2.0.0",
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.11.6"
      }
    },
    "npm:min-document@2.18.1": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "github:MeoMix/jspm-loader-css@master": {
      "map": {
        "css-modules-loader-core": "npm:css-modules-loader-core@1.0.1",
        "cssnano": "npm:cssnano@3.7.4",
        "node-cssnano": "npm:cssnano@3.7.4"
      }
    },
    "npm:css-modules-loader-core@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.1.2",
        "postcss-modules-values": "npm:postcss-modules-values@1.2.2",
        "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.1.1",
        "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "postcss-modules-scope": "npm:postcss-modules-scope@1.0.2"
      }
    },
    "npm:cssnano@3.7.4": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "autoprefixer": "npm:autoprefixer@6.4.1",
        "postcss-calc": "npm:postcss-calc@5.3.1",
        "postcss-colormin": "npm:postcss-colormin@2.2.0",
        "defined": "npm:defined@1.0.0",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
        "postcss-convert-values": "npm:postcss-convert-values@2.4.0",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.3",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
        "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
        "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.0",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.7",
        "postcss-svgo": "npm:postcss-svgo@2.1.4",
        "postcss-minify-params": "npm:postcss-minify-params@1.0.5",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.2.2",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.0.10",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7",
        "postcss-zindex": "npm:postcss-zindex@2.1.1",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.5",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
        "object-assign": "npm:object-assign@4.1.0",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.1",
        "has": "npm:has@1.0.1"
      }
    },
    "npm:postcss-modules-values@1.2.2": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2"
      }
    },
    "npm:postcss-modules-local-by-default@1.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.6.0"
      }
    },
    "npm:postcss-modules-extract-imports@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:autoprefixer@6.4.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "num2fraction": "npm:num2fraction@1.2.2",
        "browserslist": "npm:browserslist@1.3.6",
        "caniuse-db": "npm:caniuse-db@1.0.30000529",
        "normalize-range": "npm:normalize-range@0.1.2"
      }
    },
    "npm:postcss-calc@5.3.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "reduce-css-calc": "npm:reduce-css-calc@1.3.0",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-colormin@2.2.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "colormin": "npm:colormin@1.1.2"
      }
    },
    "npm:postcss-discard-duplicates@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-convert-values@2.4.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-gradients@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-empty@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-normalize-charset@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-ordered-values@2.2.2": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-reduce-initial@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-merge-idents@2.1.7": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "has": "npm:has@1.0.1"
      }
    },
    "npm:postcss-svgo@2.1.4": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-svg": "npm:is-svg@2.0.1",
        "svgo": "npm:svgo@0.6.6"
      }
    },
    "npm:postcss-minify-params@1.0.5": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-merge-rules@2.0.10": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "vendors": "npm:vendors@1.0.1"
      }
    },
    "npm:postcss-reduce-idents@2.3.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-normalize-url@3.0.7": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-absolute-url": "npm:is-absolute-url@2.0.0",
        "normalize-url": "npm:normalize-url@1.6.1"
      }
    },
    "npm:postcss-zindex@2.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-reduce-transforms@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-minify-selectors@2.0.5": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.2.1"
      }
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-discard-unused@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "uniqs": "npm:uniqs@2.0.0",
        "flatten": "npm:flatten@1.0.2"
      }
    },
    "npm:postcss-merge-longhand@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss@5.2.0": {
      "map": {
        "supports-color": "npm:supports-color@3.1.2",
        "source-map": "npm:source-map@0.5.6",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:postcss@5.1.2": {
      "map": {
        "supports-color": "npm:supports-color@3.1.2",
        "source-map": "npm:source-map@0.5.6",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:postcss-filter-plugins@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "uniqid": "npm:uniqid@3.1.0"
      }
    },
    "npm:postcss-modules-scope@1.0.2": {
      "map": {
        "css-selector-tokenizer": "npm:css-selector-tokenizer@0.6.0",
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:browserslist@1.3.6": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000529"
      }
    },
    "npm:postcss-selector-parser@2.2.1": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "uniq": "npm:uniq@1.0.1",
        "indexes-of": "npm:indexes-of@1.0.1"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:css-selector-tokenizer@0.6.0": {
      "map": {
        "fastparse": "npm:fastparse@1.1.1",
        "cssesc": "npm:cssesc@0.1.0",
        "regexpu-core": "npm:regexpu-core@1.0.0"
      }
    },
    "npm:reduce-css-calc@1.3.0": {
      "map": {
        "reduce-function-call": "npm:reduce-function-call@1.0.1",
        "math-expression-evaluator": "npm:math-expression-evaluator@1.2.14",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:is-svg@2.0.1": {
      "map": {
        "html-comment-regex": "npm:html-comment-regex@1.1.1"
      }
    },
    "npm:svgo@0.6.6": {
      "map": {
        "whet.extend": "npm:whet.extend@0.9.9",
        "coa": "npm:coa@1.0.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "colors": "npm:colors@1.1.2",
        "sax": "npm:sax@1.2.1",
        "js-yaml": "npm:js-yaml@3.6.1",
        "csso": "npm:csso@2.0.0"
      }
    },
    "npm:colormin@1.1.2": {
      "map": {
        "has": "npm:has@1.0.1",
        "color": "npm:color@0.11.3",
        "css-color-names": "npm:css-color-names@0.0.4"
      }
    },
    "npm:reduce-function-call@1.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:uniqid@3.1.0": {
      "map": {
        "macaddress": "npm:macaddress@0.2.8"
      }
    },
    "npm:csso@2.0.0": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "clap": "npm:clap@1.1.1"
      }
    },
    "npm:normalize-url@1.6.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "query-string": "npm:query-string@4.2.3",
        "sort-keys": "npm:sort-keys@1.1.2",
        "prepend-http": "npm:prepend-http@1.0.4"
      }
    },
    "npm:regexpu-core@1.0.0": {
      "map": {
        "regenerate": "npm:regenerate@1.3.1",
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:js-yaml@3.6.1": {
      "map": {
        "argparse": "npm:argparse@1.0.7",
        "esprima": "npm:esprima@2.7.3"
      }
    },
    "npm:math-expression-evaluator@1.2.14": {
      "map": {
        "lodash.indexof": "npm:lodash.indexof@4.0.5"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:query-string@4.2.3": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:color@0.11.3": {
      "map": {
        "clone": "npm:clone@1.0.2",
        "color-string": "npm:color-string@0.3.0",
        "color-convert": "npm:color-convert@1.5.0"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:argparse@1.0.7": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:clap@1.1.1": {
      "map": {
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:sort-keys@1.1.2": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:postcss-cssnext@2.8.0": {
      "map": {
        "pixrem": "npm:pixrem@3.0.2",
        "autoprefixer": "npm:autoprefixer@6.4.1",
        "pleeease-filters": "npm:pleeease-filters@3.0.0",
        "postcss-color-hwb": "npm:postcss-color-hwb@2.0.0",
        "chalk": "npm:chalk@1.1.3",
        "postcss": "npm:postcss@5.2.0",
        "postcss-font-variant": "npm:postcss-font-variant@2.0.1",
        "postcss-selector-not": "npm:postcss-selector-not@2.0.0",
        "postcss-replace-overflow-wrap": "npm:postcss-replace-overflow-wrap@1.0.0",
        "postcss-selector-matches": "npm:postcss-selector-matches@2.0.4",
        "postcss-color-gray": "npm:postcss-color-gray@3.0.0",
        "postcss-pseudo-class-any-link": "npm:postcss-pseudo-class-any-link@1.0.0",
        "postcss-custom-selectors": "npm:postcss-custom-selectors@3.0.0",
        "postcss-media-minmax": "npm:postcss-media-minmax@2.1.2",
        "postcss-calc": "npm:postcss-calc@5.3.1",
        "postcss-attribute-case-insensitive": "npm:postcss-attribute-case-insensitive@1.0.1",
        "postcss-apply": "npm:postcss-apply@0.3.0",
        "postcss-color-hex-alpha": "npm:postcss-color-hex-alpha@2.0.0",
        "postcss-custom-properties": "npm:postcss-custom-properties@5.0.1",
        "postcss-color-function": "npm:postcss-color-function@2.0.1",
        "postcss-initial": "npm:postcss-initial@1.5.2",
        "postcss-color-rgba-fallback": "npm:postcss-color-rgba-fallback@2.2.0",
        "caniuse-api": "npm:caniuse-api@1.5.2",
        "postcss-pseudoelements": "npm:postcss-pseudoelements@3.0.0",
        "postcss-nesting": "npm:postcss-nesting@2.3.1",
        "postcss-color-rebeccapurple": "npm:postcss-color-rebeccapurple@2.0.0",
        "postcss-custom-media": "npm:postcss-custom-media@5.0.1"
      }
    },
    "npm:pixrem@3.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "browserslist": "npm:browserslist@1.3.6",
        "reduce-css-calc": "npm:reduce-css-calc@1.3.0"
      }
    },
    "npm:pleeease-filters@3.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "onecolor": "npm:onecolor@2.4.2"
      }
    },
    "npm:postcss-color-hwb@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1",
        "color": "npm:color@0.10.1",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-selector-not@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "balanced-match": "npm:balanced-match@0.2.1"
      }
    },
    "npm:postcss-font-variant@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-replace-overflow-wrap@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-selector-matches@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:postcss-color-gray@3.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "reduce-function-call": "npm:reduce-function-call@1.0.1",
        "color": "npm:color@0.7.3",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-pseudo-class-any-link@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-selector-parser": "npm:postcss-selector-parser@1.3.3"
      }
    },
    "npm:postcss-custom-selectors@3.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-selector-matches": "npm:postcss-selector-matches@2.0.4",
        "balanced-match": "npm:balanced-match@0.2.1"
      }
    },
    "npm:postcss-media-minmax@2.1.2": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-attribute-case-insensitive@1.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.2.1"
      }
    },
    "npm:postcss-apply@0.3.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:postcss-color-hex-alpha@2.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "color": "npm:color@0.10.1",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-custom-properties@5.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:postcss-color-function@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
        "css-color-function": "npm:css-color-function@1.3.0"
      }
    },
    "npm:postcss-initial@1.5.2": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "lodash.template": "npm:lodash.template@4.4.0"
      }
    },
    "npm:postcss-color-rgba-fallback@2.2.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "rgb-hex": "npm:rgb-hex@1.0.0"
      }
    },
    "npm:postcss-pseudoelements@3.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:caniuse-api@1.5.2": {
      "map": {
        "browserslist": "npm:browserslist@1.3.6",
        "shelljs": "npm:shelljs@0.7.4",
        "lodash.uniq": "npm:lodash.uniq@4.5.0",
        "lodash.memoize": "npm:lodash.memoize@4.1.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000529"
      }
    },
    "npm:postcss-nesting@2.3.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-color-rebeccapurple@2.0.0": {
      "map": {
        "color": "npm:color@0.9.0",
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:postcss-custom-media@5.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.0"
      }
    },
    "npm:color@0.7.3": {
      "map": {
        "color-string": "npm:color-string@0.2.4",
        "color-convert": "npm:color-convert@0.5.3"
      }
    },
    "npm:color@0.10.1": {
      "map": {
        "color-string": "npm:color-string@0.3.0",
        "color-convert": "npm:color-convert@0.5.3"
      }
    },
    "npm:color@0.9.0": {
      "map": {
        "color-string": "npm:color-string@0.3.0",
        "color-convert": "npm:color-convert@0.5.3"
      }
    },
    "npm:css-color-function@1.3.0": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0",
        "color": "npm:color@0.11.3",
        "debug": "npm:debug@0.7.4",
        "rgb": "npm:rgb@0.1.0"
      }
    },
    "npm:lodash.template@4.4.0": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
        "lodash.templatesettings": "npm:lodash.templatesettings@4.1.0"
      }
    },
    "npm:shelljs@0.7.4": {
      "map": {
        "rechoir": "npm:rechoir@0.6.2",
        "interpret": "npm:interpret@1.0.1",
        "glob": "npm:glob@7.0.6"
      }
    },
    "npm:lodash.templatesettings@4.1.0": {
      "map": {
        "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0"
      }
    },
    "npm:color-string@0.2.4": {
      "map": {
        "color-name": "npm:color-name@1.0.1"
      }
    },
    "npm:glob@7.0.6": {
      "map": {
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "inflight": "npm:inflight@1.0.5",
        "once": "npm:once@1.4.0",
        "minimatch": "npm:minimatch@3.0.3",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:postcss-selector-parser@1.3.3": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "indexes-of": "npm:indexes-of@1.0.1",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.2",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "github:MeoMix/postcss-import@master": {
      "map": {
        "read-cache": "npm:read-cache@1.0.0",
        "postcss": "npm:postcss@5.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "resolve": "npm:resolve@1.1.7",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:read-cache@1.0.0": {
      "map": {
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:node-fetch@1.6.1": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:socket.io@1.5.0": {
      "map": {
        "socket.io-client": "npm:socket.io-client@1.5.0",
        "debug": "npm:debug@2.2.0",
        "socket.io-parser": "npm:socket.io-parser@2.2.6",
        "socket.io-adapter": "npm:socket.io-adapter@0.4.0",
        "engine.io": "npm:engine.io@1.7.0",
        "has-binary": "npm:has-binary@0.1.7"
      }
    },
    "npm:socket.io-client@1.5.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "socket.io-parser": "npm:socket.io-parser@2.2.6",
        "component-emitter": "npm:component-emitter@1.2.0",
        "object-component": "npm:object-component@0.0.3",
        "indexof": "npm:indexof@0.0.1",
        "backo2": "npm:backo2@1.0.2",
        "to-array": "npm:to-array@0.1.4",
        "engine.io-client": "npm:engine.io-client@1.7.0",
        "has-binary": "npm:has-binary@0.1.7",
        "component-bind": "npm:component-bind@1.0.0",
        "parseuri": "npm:parseuri@0.0.4"
      }
    },
    "npm:socket.io-parser@2.2.6": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "component-emitter": "npm:component-emitter@1.1.2",
        "json3": "npm:json3@3.3.2",
        "benchmark": "npm:benchmark@1.0.0",
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:socket.io-adapter@0.4.0": {
      "map": {
        "socket.io-parser": "npm:socket.io-parser@2.2.2",
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:engine.io@1.7.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "ws": "npm:ws@1.0.1",
        "engine.io-parser": "npm:engine.io-parser@1.2.4",
        "accepts": "npm:accepts@1.3.1",
        "base64id": "npm:base64id@0.1.0"
      }
    },
    "npm:socket.io-parser@2.2.2": {
      "map": {
        "debug": "npm:debug@0.7.4",
        "component-emitter": "npm:component-emitter@1.1.2",
        "json3": "npm:json3@3.2.6",
        "benchmark": "npm:benchmark@1.0.0",
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:engine.io-client@1.7.0": {
      "map": {
        "component-emitter": "npm:component-emitter@1.1.2",
        "debug": "npm:debug@2.2.0",
        "indexof": "npm:indexof@0.0.1",
        "ws": "npm:ws@1.1.1",
        "node-ws": "npm:ws@1.1.1",
        "engine.io-parser": "npm:engine.io-parser@1.3.0",
        "parseuri": "npm:parseuri@0.0.4",
        "component-inherit": "npm:component-inherit@0.0.3",
        "parsejson": "npm:parsejson@0.0.1",
        "yeast": "npm:yeast@0.1.2",
        "parseqs": "npm:parseqs@0.0.2",
        "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
        "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
        "has-cors": "npm:has-cors@1.1.0"
      }
    },
    "npm:has-binary@0.1.7": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:engine.io-parser@1.3.0": {
      "map": {
        "has-binary": "npm:has-binary@0.1.6",
        "after": "npm:after@0.8.1",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
        "blob": "npm:blob@0.0.4",
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
        "wtf-8": "npm:wtf-8@1.0.0"
      }
    },
    "npm:engine.io-parser@1.2.4": {
      "map": {
        "has-binary": "npm:has-binary@0.1.6",
        "after": "npm:after@0.8.1",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
        "blob": "npm:blob@0.0.4",
        "utf8": "npm:utf8@2.1.0",
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2"
      }
    },
    "npm:has-binary@0.1.6": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:ws@1.1.1": {
      "map": {
        "ultron": "npm:ultron@1.0.2",
        "options": "npm:options@0.0.6",
        "utf-8-validate": "npm:utf-8-validate@1.2.1",
        "bufferutil": "npm:bufferutil@1.2.1"
      }
    },
    "npm:ws@1.0.1": {
      "map": {
        "ultron": "npm:ultron@1.0.2",
        "options": "npm:options@0.0.6",
        "utf-8-validate": "npm:utf-8-validate@1.2.1",
        "bufferutil": "npm:bufferutil@1.2.1"
      }
    },
    "npm:accepts@1.3.1": {
      "map": {
        "mime-types": "npm:mime-types@2.1.12",
        "negotiator": "npm:negotiator@0.6.0"
      }
    },
    "npm:parseuri@0.0.4": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parsejson@0.0.1": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseqs@0.0.2": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:utf-8-validate@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "npm:bufferutil@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "npm:better-assert@1.0.2": {
      "map": {
        "callsite": "npm:callsite@1.0.0"
      }
    },
    "npm:mime-types@2.1.12": {
      "map": {
        "mime-db": "npm:mime-db@1.24.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:asn1.js@4.8.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:spdy@3.4.3": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "http-deceiver": "npm:http-deceiver@1.2.7",
        "select-hose": "npm:select-hose@2.0.0",
        "spdy-transport": "npm:spdy-transport@2.0.15",
        "handle-thing": "npm:handle-thing@1.2.5"
      }
    },
    "npm:spdy-transport@2.0.15": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "obuf": "npm:obuf@1.1.1",
        "wbuf": "npm:wbuf@1.7.2",
        "readable-stream": "npm:readable-stream@2.1.5",
        "hpack.js": "npm:hpack.js@2.1.6"
      }
    },
    "npm:hpack.js@2.1.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "obuf": "npm:obuf@1.1.1",
        "readable-stream": "npm:readable-stream@2.1.5",
        "wbuf": "npm:wbuf@1.7.2"
      }
    },
    "npm:wbuf@1.7.2": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:jspm-devtools@1.1.8": {
      "map": {
        "systemjs-hmr": "npm:systemjs-hmr@0.0.4",
        "spdy-keys": "npm:spdy-keys@0.0.0",
        "socket.io": "npm:socket.io@1.5.0",
        "spdy": "npm:spdy@3.4.3",
        "socket.io-client": "github:socketio/socket.io-client@1.5.0"
      }
    }
  }
});
