webpackJsonp([35783957827783],{243:function(e,t,n){(function(o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=(a(s),["./static/photos/moon.jpg","./static/photos/ocean.jpg","./static/photos/jupiter.jpg","./static/photos/dawn.jpg","./static/photos/antarctica.jpg"]),u=i.length,p=function(e){function t(){c(this,t);var n=r(this,e.call(this));return n.state={src:"./static/photos/moon.jpg",idx:0},n.updateImg=n.updateImg.bind(n),n}return l(t,e),t.prototype.componentDidMount=function(){var e=this;setInterval(function(){e.updateImg()},5e3)},t.prototype.updateImg=function(){this.setState({src:i[this.state.idx],idx:this.state.idx===u-1?0:this.state.idx+1})},t.prototype.render=function(){return o.createElement("img",{src:this.state.src,style:{width:"45vw",height:"52vh",objectFit:"cover"}})},t}(s.Component);t.default=p,e.exports=t.default}).call(t,n(9))},246:function(e,t,n){(function(o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),i=(a(s),n(340)),u=a(i),p=n(243),f=a(p),m=function(e){function t(){return c(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return o.createElement("div",{className:u.default.main},o.createElement("div",{className:u.default.carouselFlex},o.createElement(f.default,null)),o.createElement("div",{className:u.default.text},o.createElement("h3",{className:u.default.name},"Yvette Zhang"),o.createElement("p",{className:u.default.sub},"Full Stack Engineer | New York, NY"),o.createElement("p",null,"Specialized in Javascript, React and React Native"),o.createElement("div",{className:u.default.flex},o.createElement("p",null,"Contact:"),o.createElement("p",null,o.createElement("a",{href:"mailto:yvettez2016@gmail.com",className:u.default.contact},"yvettez2016@gmail.com")))))},t}(s.Component);t.default=m,e.exports=t.default}).call(t,n(9))},340:function(e,t){e.exports={main:"src-components----main-module---main---3yBrp",carouselFlex:"src-components----main-module---carouselFlex---3PZKc",text:"src-components----main-module---text---39W0z",textScaleY:"src-components----main-module---textScaleY---18p0I",name:"src-components----main-module---name---1-5eY",sub:"src-components----main-module---sub---2F9Qd",flex:"src-components----main-module---flex---kJqtY",contact:"src-components----main-module---contact---3bL4s"}},252:function(e,t,n){(function(o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var c=n(1),r=(a(c),n(29)),l=(a(r),n(246)),s=a(l);t.default=function(){return o.createElement("div",null,o.createElement(s.default,null))},e.exports=t.default}).call(t,n(9))}});
//# sourceMappingURL=component---src-pages-index-js-bb2eaff55c8764601c9d.js.map