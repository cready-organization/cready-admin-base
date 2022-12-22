"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/user";
exports.ids = ["pages/api/auth/user"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./src/Helper/security.ts":
/*!********************************!*\
  !*** ./src/Helper/security.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comparePassword\": () => (/* binding */ comparePassword),\n/* harmony export */   \"encrypt\": () => (/* binding */ encrypt),\n/* harmony export */   \"generateAccessToken\": () => (/* binding */ generateAccessToken)\n/* harmony export */ });\n/* harmony import */ var _ultils_constant_security__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/ultils/constant/security */ \"(api)/./src/ultils/constant/security.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst encrypt = (value)=>{\n    const encryptPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(value, 16);\n    return encryptPassword;\n};\nconst comparePassword = (reqValue, realValue)=>{\n    const isMatch = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compareSync(reqValue, realValue);\n    return isMatch;\n};\nconst generateAccessToken = (user)=>{\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n        username: user.username,\n        role: user.role\n    }, _ultils_constant_security__WEBPACK_IMPORTED_MODULE_0__.JWT_SECRET_KEY);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvSGVscGVyL3NlY3VyaXR5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJEO0FBRTlCO0FBQ0M7QUFFdkIsTUFBTUcsVUFBVSxDQUFDQyxRQUFrQjtJQUN4QyxNQUFNQyxrQkFBa0JKLHdEQUFlLENBQUNHLE9BQU87SUFDL0MsT0FBT0M7QUFDVCxFQUFDO0FBRU0sTUFBTUUsa0JBQWtCLENBQUNDLFVBQWtCQyxZQUFzQjtJQUN0RSxNQUFNQyxVQUFVVCwyREFBa0IsQ0FBQ08sVUFBVUM7SUFDN0MsT0FBT0M7QUFDVCxFQUFDO0FBRU0sTUFBTUUsc0JBQXNCLENBQUNDLE9BQTJDO0lBQzdFLE9BQU9YLHdEQUFRLENBQUM7UUFBRWEsVUFBVUYsS0FBS0UsUUFBUTtRQUFFQyxNQUFNSCxLQUFLRyxJQUFJO0lBQUMsR0FBR2hCLHFFQUFjQTtBQUM5RSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYWR5Ly4vc3JjL0hlbHBlci9zZWN1cml0eS50cz9hMmIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpXVF9TRUNSRVRfS0VZIH0gZnJvbSAnQC91bHRpbHMvY29uc3RhbnQvc2VjdXJpdHknXHJcbmltcG9ydCB7IFJvbGUgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcblxyXG5leHBvcnQgY29uc3QgZW5jcnlwdCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgZW5jcnlwdFBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKHZhbHVlLCAxNilcclxuICByZXR1cm4gZW5jcnlwdFBhc3N3b3JkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb21wYXJlUGFzc3dvcmQgPSAocmVxVmFsdWU6IHN0cmluZywgcmVhbFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBpc01hdGNoID0gYmNyeXB0LmNvbXBhcmVTeW5jKHJlcVZhbHVlLCByZWFsVmFsdWUpXHJcbiAgcmV0dXJuIGlzTWF0Y2hcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQWNjZXNzVG9rZW4gPSAodXNlcjogeyB1c2VybmFtZTogc3RyaW5nOyByb2xlOiBSb2xlIH0pID0+IHtcclxuICByZXR1cm4gand0LnNpZ24oeyB1c2VybmFtZTogdXNlci51c2VybmFtZSwgcm9sZTogdXNlci5yb2xlIH0sIEpXVF9TRUNSRVRfS0VZKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJKV1RfU0VDUkVUX0tFWSIsImJjcnlwdCIsImp3dCIsImVuY3J5cHQiLCJ2YWx1ZSIsImVuY3J5cHRQYXNzd29yZCIsImhhc2hTeW5jIiwiY29tcGFyZVBhc3N3b3JkIiwicmVxVmFsdWUiLCJyZWFsVmFsdWUiLCJpc01hdGNoIiwiY29tcGFyZVN5bmMiLCJnZW5lcmF0ZUFjY2Vzc1Rva2VuIiwidXNlciIsInNpZ24iLCJ1c2VybmFtZSIsInJvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/Helper/security.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/user.ts":
/*!************************************!*\
  !*** ./src/pages/api/auth/user.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _Helper_security__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Helper/security */ \"(api)/./src/Helper/security.ts\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    const { body: { password  } , method  } = req;\n    const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_2___default())(req, res);\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\n    const user = await prisma.user.findFirst();\n    console.log(method);\n    switch(method){\n        case \"POST\":\n            try {\n                if (user) {\n                    const isAuthenticated = (0,_Helper_security__WEBPACK_IMPORTED_MODULE_0__.comparePassword)(password, user.password);\n                    const accessToken = (0,_Helper_security__WEBPACK_IMPORTED_MODULE_0__.generateAccessToken)({\n                        username: user.username,\n                        role: user.role\n                    });\n                    if (isAuthenticated) {\n                        cookies.set(\"accessToken\", accessToken);\n                        return res.redirect(\"/dashboard\");\n                    } else {\n                        return res.status(400).json({\n                            msg: \"fail\"\n                        });\n                    }\n                } else {\n                    return res.status(400).json({\n                        msg: \"fail\"\n                    });\n                }\n            } catch (error) {\n                console.log(error);\n                return res.status(500).json({\n                    msg: \"fail\"\n                });\n            }\n            break;\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"PUT\"\n            ]);\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvdXNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0U7QUFDM0I7QUFDaEI7QUFHZCxlQUFlSSxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3BCO0lBQ0EsTUFBTSxFQUNKQyxNQUFNLEVBQUVDLFNBQVEsRUFBRSxHQUNsQkMsT0FBTSxFQUNQLEdBQUdKO0lBQ0osTUFBTUssVUFBVSxJQUFJUCxnREFBT0EsQ0FBQ0UsS0FBS0M7SUFDakMsTUFBTUssU0FBUyxJQUFJVCx3REFBWUE7SUFDL0IsTUFBTVUsT0FBTyxNQUFNRCxPQUFPQyxJQUFJLENBQUNDLFNBQVM7SUFDeENDLFFBQVFDLEdBQUcsQ0FBQ047SUFDWixPQUFRQTtRQUNOLEtBQUs7WUFDSCxJQUFJO2dCQUNGLElBQUlHLE1BQU07b0JBQ1IsTUFBTUksa0JBQWtCaEIsaUVBQWVBLENBQUNRLFVBQVVJLEtBQUtKLFFBQVE7b0JBQy9ELE1BQU1TLGNBQWNoQixxRUFBbUJBLENBQUM7d0JBQ3RDaUIsVUFBVU4sS0FBS00sUUFBUTt3QkFDdkJDLE1BQU1QLEtBQUtPLElBQUk7b0JBQ2pCO29CQUNBLElBQUlILGlCQUFpQjt3QkFDbkJOLFFBQVFVLEdBQUcsQ0FBQyxlQUFlSDt3QkFDM0IsT0FBT1gsSUFBSWUsUUFBUSxDQUFDO29CQUN0QixPQUFPO3dCQUNMLE9BQU9mLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDOzRCQUFFQyxLQUFLO3dCQUFPO29CQUM1QyxDQUFDO2dCQUNILE9BQU87b0JBQ0wsT0FBT2xCLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxLQUFLO29CQUFPO2dCQUM1QyxDQUFDO1lBQ0gsRUFBRSxPQUFPQyxPQUFPO2dCQUNkWCxRQUFRQyxHQUFHLENBQUNVO2dCQUNaLE9BQU9uQixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsS0FBSztnQkFBTztZQUM1QztZQUVBLEtBQUs7UUFFUDtZQUNFbEIsSUFBSW9CLFNBQVMsQ0FBQyxTQUFTO2dCQUFDO2dCQUFPO2FBQU07WUFDckNwQixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRWxCLE9BQU8sWUFBWSxDQUFDO0lBQ3REO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyZWFkeS8uL3NyYy9wYWdlcy9hcGkvYXV0aC91c2VyLnRzPzhjNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcGFyZVBhc3N3b3JkLCBnZW5lcmF0ZUFjY2Vzc1Rva2VuIH0gZnJvbSAnQC9IZWxwZXIvc2VjdXJpdHknXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdjb29raWVzJ1xyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXHJcbikge1xyXG4gIGNvbnN0IHtcclxuICAgIGJvZHk6IHsgcGFzc3dvcmQgfSxcclxuICAgIG1ldGhvZCxcclxuICB9ID0gcmVxXHJcbiAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHJlcSwgcmVzKVxyXG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3QoKVxyXG4gIGNvbnNvbGUubG9nKG1ldGhvZClcclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IGNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgdXNlci5wYXNzd29yZClcclxuICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gZ2VuZXJhdGVBY2Nlc3NUb2tlbih7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICBjb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCBhY2Nlc3NUb2tlbilcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL2Rhc2hib2FyZCcpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtc2c6ICdmYWlsJyB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtc2c6ICdmYWlsJyB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtc2c6ICdmYWlsJyB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVha1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnLCAnUFVUJ10pXHJcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29tcGFyZVBhc3N3b3JkIiwiZ2VuZXJhdGVBY2Nlc3NUb2tlbiIsIlByaXNtYUNsaWVudCIsIkNvb2tpZXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsInBhc3N3b3JkIiwibWV0aG9kIiwiY29va2llcyIsInByaXNtYSIsInVzZXIiLCJmaW5kRmlyc3QiLCJjb25zb2xlIiwibG9nIiwiaXNBdXRoZW50aWNhdGVkIiwiYWNjZXNzVG9rZW4iLCJ1c2VybmFtZSIsInJvbGUiLCJzZXQiLCJyZWRpcmVjdCIsInN0YXR1cyIsImpzb24iLCJtc2ciLCJlcnJvciIsInNldEhlYWRlciIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/user.ts\n");

/***/ }),

/***/ "(api)/./src/ultils/constant/security.ts":
/*!*****************************************!*\
  !*** ./src/ultils/constant/security.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JWT_SECRET_KEY\": () => (/* binding */ JWT_SECRET_KEY)\n/* harmony export */ });\nconst JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || \"config-di-check-cai-gi\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdWx0aWxzL2NvbnN0YW50L3NlY3VyaXR5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxpQkFDWEMsUUFBUUMsR0FBRyxDQUFDRixjQUFjLElBQUkseUJBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYWR5Ly4vc3JjL3VsdGlscy9jb25zdGFudC9zZWN1cml0eS50cz8xOWI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlY3JldCB9IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmV4cG9ydCBjb25zdCBKV1RfU0VDUkVUX0tFWTogU2VjcmV0ID1cclxuICBwcm9jZXNzLmVudi5KV1RfU0VDUkVUX0tFWSB8fCAnY29uZmlnLWRpLWNoZWNrLWNhaS1naSdcclxuIl0sIm5hbWVzIjpbIkpXVF9TRUNSRVRfS0VZIiwicHJvY2VzcyIsImVudiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/ultils/constant/security.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/user.ts"));
module.exports = __webpack_exports__;

})();