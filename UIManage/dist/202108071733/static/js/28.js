webpackJsonp([28],{rbxA:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={data:function(){return{visible:!1,dataForm:{fireTime:0,lat:"",lng:"",area:"",volcano:"",fireLevel:"",reliabilty:"",frp:"",qf:"",address:"",addressCode:""},dataRule:{lat:[{required:!0,message:"不能为空",trigger:"blur"}],lng:[{required:!0,message:"不能为空",trigger:"blur"}],area:[{required:!0,message:"不能为空",trigger:"blur"}],volcano:[{required:!0,message:"不能为空",trigger:"blur"}],fireLevel:[{required:!0,message:"不能为空",trigger:"blur"}],reliabilty:[{required:!0,message:"不能为空",trigger:"blur"}],frp:[{required:!0,message:"不能为空",trigger:"blur"}],qf:[{required:!0,message:"不能为空",trigger:"blur"}],address:[{required:!0,message:"不能为空",trigger:"blur"}],addressCode:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.fireTime=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.fireTime&&a.$http({url:a.$http.adornUrl("/generator/fireforecastdata/info/"+a.dataForm.fireTime),method:"get",params:a.$http.adornParams()}).then(function(e){var r=e.data;r&&0===r.code&&(a.dataForm.lat=r.fireForecastData.lat,a.dataForm.lng=r.fireForecastData.lng,a.dataForm.area=r.fireForecastData.area,a.dataForm.volcano=r.fireForecastData.volcano,a.dataForm.fireLevel=r.fireForecastData.fireLevel,a.dataForm.reliabilty=r.fireForecastData.reliabilty,a.dataForm.frp=r.fireForecastData.frp,a.dataForm.qf=r.fireForecastData.qf,a.dataForm.address=r.fireForecastData.address,a.dataForm.addressCode=r.fireForecastData.addressCode)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/generator/fireforecastdata/"+(e.dataForm.fireTime?"update":"save")),method:"post",data:e.$http.adornData({fireTime:e.dataForm.fireTime||void 0,lat:e.dataForm.lat,lng:e.dataForm.lng,area:e.dataForm.area,volcano:e.dataForm.volcano,fireLevel:e.dataForm.fireLevel,reliabilty:e.dataForm.reliabilty,frp:e.dataForm.frp,qf:e.dataForm.qf,address:e.dataForm.address,addressCode:e.dataForm.addressCode})}).then(function(a){var r=a.data;r&&0===r.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(r.msg)})})}}},o={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("el-dialog",{attrs:{title:e.dataForm.fireTime?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.dataFormSubmit()}}},[r("el-form-item",{attrs:{label:"纬度",prop:"lat"}},[r("el-input",{attrs:{placeholder:"纬度"},model:{value:e.dataForm.lat,callback:function(a){e.$set(e.dataForm,"lat",a)},expression:"dataForm.lat"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"经度",prop:"lng"}},[r("el-input",{attrs:{placeholder:"经度"},model:{value:e.dataForm.lng,callback:function(a){e.$set(e.dataForm,"lng",a)},expression:"dataForm.lng"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"地域",prop:"area"}},[r("el-input",{attrs:{placeholder:"地域"},model:{value:e.dataForm.area,callback:function(a){e.$set(e.dataForm,"area",a)},expression:"dataForm.area"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"volcano",prop:"volcano"}},[r("el-input",{attrs:{placeholder:"volcano"},model:{value:e.dataForm.volcano,callback:function(a){e.$set(e.dataForm,"volcano",a)},expression:"dataForm.volcano"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"fireLevel",prop:"fireLevel"}},[r("el-input",{attrs:{placeholder:"fireLevel"},model:{value:e.dataForm.fireLevel,callback:function(a){e.$set(e.dataForm,"fireLevel",a)},expression:"dataForm.fireLevel"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"reliabilty",prop:"reliabilty"}},[r("el-input",{attrs:{placeholder:"reliabilty"},model:{value:e.dataForm.reliabilty,callback:function(a){e.$set(e.dataForm,"reliabilty",a)},expression:"dataForm.reliabilty"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"frp",prop:"frp"}},[r("el-input",{attrs:{placeholder:"frp"},model:{value:e.dataForm.frp,callback:function(a){e.$set(e.dataForm,"frp",a)},expression:"dataForm.frp"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"qf",prop:"qf"}},[r("el-input",{attrs:{placeholder:"qf"},model:{value:e.dataForm.qf,callback:function(a){e.$set(e.dataForm,"qf",a)},expression:"dataForm.qf"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"address",prop:"address"}},[r("el-input",{attrs:{placeholder:"address"},model:{value:e.dataForm.address,callback:function(a){e.$set(e.dataForm,"address",a)},expression:"dataForm.address"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"addressCode",prop:"addressCode"}},[r("el-input",{attrs:{placeholder:"addressCode"},model:{value:e.dataForm.addressCode,callback:function(a){e.$set(e.dataForm,"addressCode",a)},expression:"dataForm.addressCode"}})],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=r("VU/8")(t,o,!1,null,null,null);a.default=l.exports}});