"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames2=_interopRequireDefault(require("../helpers/classNames"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,_baseComponent.default)({relations:{"../row/index":{type:"parent"}},properties:{prefixCls:{type:String,value:"wux-col"},span:{value:0,type:Number},offset:{value:0,type:Number},pull:{value:0,type:Number},push:{value:0,type:Number}},data:{colStyle:""},computed:{classes:["prefixCls, span, offset, pull, push",function(e,t,r,a,n){var o;return{wrap:(0,_classNames2.default)(e,(_defineProperty(o={},"".concat(e,"--span-").concat(t),t),_defineProperty(o,"".concat(e,"--offset-").concat(r),r),_defineProperty(o,"".concat(e,"--pull-").concat(a),a),_defineProperty(o,"".concat(e,"--push-").concat(n),n),o))}}]},methods:{updateStyle:function(e){this.data.colStyle!==e&&this.setData({colStyle:e})}}});