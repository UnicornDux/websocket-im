webpackJsonp([25],{"NE/E":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{openid:0,nickName:"",headImgUrl:"",addressCode:"",authority:"",ps:""},dataRule:{nickName:[{required:!0,message:"不能为空",trigger:"blur"}],headImgUrl:[{required:!0,message:"不能为空",trigger:"blur"}],addressCode:[{required:!0,message:"不能为空",trigger:"blur"}],authority:[{required:!0,message:"不能为空",trigger:"blur"}],ps:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.openid=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.openid&&a.$http({url:a.$http.adornUrl("/generator/user/info/"+a.dataForm.openid),method:"get",params:a.$http.adornParams()}).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.nickName=t.user.nickName,a.dataForm.headImgUrl=t.user.headImgUrl,a.dataForm.addressCode=t.user.addressCode,a.dataForm.authority=t.user.authority,a.dataForm.ps=t.user.ps)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/generator/user/"+(e.dataForm.openid?"update":"save")),method:"post",data:e.$http.adornData({openid:e.dataForm.openid||void 0,nickName:e.dataForm.nickName,headImgUrl:e.dataForm.headImgUrl,addressCode:e.dataForm.addressCode,authority:e.dataForm.authority,ps:e.dataForm.ps})}).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.openid?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"openid",prop:"nickName"}},[t("el-input",{attrs:{placeholder:"openid"},model:{value:e.dataForm.openid,callback:function(a){e.$set(e.dataForm,"openid",a)},expression:"dataForm.openid"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"名称",prop:"nickName"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.nickName,callback:function(a){e.$set(e.dataForm,"nickName",a)},expression:"dataForm.nickName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"头像地址",prop:"headImgUrl"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.headImgUrl,callback:function(a){e.$set(e.dataForm,"headImgUrl",a)},expression:"dataForm.headImgUrl"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"地域代码",prop:"addressCode"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.addressCode,callback:function(a){e.$set(e.dataForm,"addressCode",a)},expression:"dataForm.addressCode"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"权限",prop:"authority"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.authority,callback:function(a){e.$set(e.dataForm,"authority",a)},expression:"dataForm.authority"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注",prop:"ps"}},[t("el-input",{attrs:{placeholder:""},model:{value:e.dataForm.ps,callback:function(a){e.$set(e.dataForm,"ps",a)},expression:"dataForm.ps"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},d=t("VU/8")(r,o,!1,null,null,null);a.default=d.exports}});