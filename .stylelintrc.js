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
        "color",
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
        // This regex aims to be more permissive with the content inside var() after the first comma.
        "ignoreFunction": "/^var\\(--[a-zA-Z0-9-]+(?:,\\s*[^)]+)?\\)$/",
        "message": "Use design tokens or styling hooks instead of hardcoded values for ${property}.",
        "ignoreCustomProperties": true
      }
    ],
    "color-no-hex": null,
    "custom-property-pattern": null
  }

};
