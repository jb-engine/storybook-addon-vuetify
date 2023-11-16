"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withVuetify = exports.VuetifyPlugin = void 0;
var _vue = _interopRequireDefault(require("vue"));
var _vuetify = _interopRequireDefault(require("vuetify"));
var _addons = require("@storybook/addons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var VuetifyPlugin = exports.VuetifyPlugin = {
  installed: false,
  install: function install() {
    if (this.installed) return;
    this.installed = true;
    require('vuetify/dist/vuetify.min.css');
    require('@mdi/font/css/materialdesignicons.min.css');
  }
};
var withVuetify = exports.withVuetify = (0, _addons.makeDecorator)({
  name: 'withVuetify',
  parameterName: 'vuetify',
  wrapper: function wrapper(Story, context) {
    VuetifyPlugin.install();
    // Vuetify
    _vue["default"].use(_vuetify["default"]);
    var WrappedComponent = Story(context);
    return _vue["default"].extend({
      components: {
        WrappedComponent: WrappedComponent
      },
      template: "\n        <v-app>\n          <v-container fluid>\n            <wrapped-component />\n          </v-container>\n        </v-app>\n      "
    });
  }
});