module.exports = {
    "extends": "airbnb-base",
    "env" : {
      "node": true,
      "mocha": true
    },
    "rules": {
        "comma-dangle": 0,
        "max-len": 0,
        "brace-style" : [2, "stroustrup", {"allowSingleLine" : true}],
        "no-console": 0,
        "padded-blocks": 0,
        "no-use-before-define": 0,
        "strict": 0,
        "no-param-reassign": 0,
        "no-plusplus": [2, { "allowForLoopAfterthoughts": true }],
    }
};
