module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss"
  ],
  "plugins": [
    "stylelint-declaration-strict-value"
  ],
  "rules": {
    "declaration-no-important": true,
    "scale-unlimited/declaration-strict-value": [
      [
        "color",           // <--- Ensure 'color' is in this list
        "background-color",
        "border-color",
        "margin",
        "padding",
        "font-size",
        "line-height",
        "font-weight"
      ],
      {
        "ignoreValues": ["inherit", "transparent", "currentColor", "initial", "unset"],
        // This regex is crucial for allowing var() functions.
        // It covers Salesforce Design System tokens, but a more generic regex for any var() function
        // can also be used if you have a mix of token types.
        "ignoreFunction": "/^var\\(--?[a-zA-Z0-9-]+\\)$/", // More generic var() matching
        // A more flexible regex for `var()` that also handles the fallback:
        // "ignoreFunction": "/^var\\([^,)]+(,[^)]+)?\\)$/",

        "message": "Use design tokens or styling hooks instead of hardcoded values for ${property}."
      }
    ],
    "color-named": "never",
    "color-no-hex": true,
    "custom-property-pattern": null,

    // This allows you to define custom properties with direct values without strict checking


    "scale-unlimited/declaration-strict-value/ignoreCustomProperties": true
  }
};
  /*{
    extends: 'stylelint-config-standard-scss',
    rules: {
      // Add or override rules as needed
      'indentation': 2, // Enforce 2-space indentation
      'declaration-block-trailing-semicolon' : 'always', // Require trailing semicolons
      'no-descending-specificity': null, // Relax rule about descending specificity (use with caution)
      'selector-list-comma-newline-after': 'always-multi-line',
      'property-no-vendor-prefix': true, // Disallow vendor prefixes
      // Add more rules based on your team's style guide
      'color-no-invalid-hex' : true,
      'custom-property-no-missing-var-function' : true
    },
  };

 {
    "extends": [
      "stylelint-config-standard"
    ],
    "plugins": [],
    "rules": {
      "value-no-vendor-prefix": true,
      "property-no-vendor-prefix": true,
      "color-no-hex": true,
      "unit-no-unknown": [true, { "ignoreUnits": ["px"] }],
      "shorthand-property-no-redundant-values": true,
      "declaration-block-no-shorthand-property-overrides": true
    }
  }
*/
