webpackJsonp([16,26],{"2QBm":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:t("rbxA").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/generator/fireforecastdata/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(a){var t=a.data;t&&0===t.code?(e.dataList=t.page.list,e.totalPage=t.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},addOrUpdateHandle:function(e){var a=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){a.$refs.addOrUpdate.init(e)})},deleteHandle:function(e){var a=this,t=e?[e]:this.dataListSelections.map(function(e){return e.fireTime});this.$confirm("确定对[id="+t.join(",")+"]进行["+(e?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http({url:a.$http.adornUrl("/generator/fireforecastdata/delete"),method:"post",data:a.$http.adornData(t,!1)}).then(function(e){var t=e.data;t&&0===t.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.getDataList()}}):a.$message.error(t.msg)})})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mod-config"},[t("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.getDataList()}}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:e.dataForm.key,callback:function(a){e.$set(e.dataForm,"key",a)},expression:"dataForm.key"}})],1),e._v(" "),t("el-form-item",[t("el-button",{on:{click:function(a){e.getDataList()}}},[e._v("查询")]),e._v(" "),e.isAuth("generator:fireforecastdata:save")?t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.addOrUpdateHandle()}}},[e._v("新增")]):e._e(),e._v(" "),e.isAuth("generator:fireforecastdata:delete")?t("el-button",{attrs:{type:"danger",disabled:e.dataListSelections.length<=0},on:{click:function(a){e.deleteHandle()}}},[e._v("批量删除")]):e._e()],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[t("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),t("el-table-column",{attrs:{prop:"fireTime","header-align":"center",align:"center",label:"时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"lat","header-align":"center",align:"center",label:"纬度"}}),e._v(" "),t("el-table-column",{attrs:{prop:"lng","header-align":"center",align:"center",label:"经度"}}),e._v(" "),t("el-table-column",{attrs:{prop:"area","header-align":"center",align:"center",label:"地域"}}),e._v(" "),t("el-table-column",{attrs:{prop:"volcano","header-align":"center",align:"center",label:"volcano"}}),e._v(" "),t("el-table-column",{attrs:{prop:"fireLevel","header-align":"center",align:"center",label:"火情等级"}}),e._v(" "),t("el-table-column",{attrs:{prop:"reliabilty","header-align":"center",align:"center",label:"置信度"}}),e._v(" "),t("el-table-column",{attrs:{prop:"frp","header-align":"center",align:"center",label:"frp"}}),e._v(" "),t("el-table-column",{attrs:{prop:"qf","header-align":"center",align:"center",label:"qf"}}),e._v(" "),t("el-table-column",{attrs:{prop:"address","header-align":"center",align:"center",label:"address"}}),e._v(" "),t("el-table-column",{attrs:{prop:"addressCode","header-align":"center",align:"center",label:"地域代码code"}}),e._v(" "),t("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.addOrUpdateHandle(a.row.fireTime)}}},[e._v("修改")]),e._v(" "),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.deleteHandle(a.row.fireTime)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.addOrUpdateVisible?t("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},i=t("VU/8")(r,l,!1,null,null,null);a.default=i.exports},rbxA:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{fireTime:0,lat:"",lng:"",area:"",volcano:"",fireLevel:"",reliabilty:"",frp:"",qf:"",address:"",addressCode:""},dataRule:{lat:[{required:!0,message:"不能为空",trigger:"blur"}],lng:[{required:!0,message:"不能为空",trigger:"blur"}],area:[{required:!0,message:"不能为空",trigger:"blur"}],volcano:[{required:!0,message:"不能为空",trigger:"blur"}],fireLevel:[{required:!0,message:"不能为空",trigger:"blur"}],reliabilty:[{required:!0,message:"不能为空",trigger:"blur"}],frp:[{required:!0,message:"不能为空",trigger:"blur"}],qf:[{required:!0,message:"不能为空",trigger:"blur"}],address:[{required:!0,message:"不能为空",trigger:"blur"}],addressCode:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.fireTime=e||0,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.fireTime&&a.$http({url:a.$http.adornUrl("/generator/fireforecastdata/info/"+a.dataForm.fireTime),method:"get",params:a.$http.adornParams()}).then(function(e){var t=e.data;t&&0===t.code&&(a.dataForm.lat=t.fireForecastData.lat,a.dataForm.lng=t.fireForecastData.lng,a.dataForm.area=t.fireForecastData.area,a.dataForm.volcano=t.fireForecastData.volcano,a.dataForm.fireLevel=t.fireForecastData.fireLevel,a.dataForm.reliabilty=t.fireForecastData.reliabilty,a.dataForm.frp=t.fireForecastData.frp,a.dataForm.qf=t.fireForecastData.qf,a.dataForm.address=t.fireForecastData.address,a.dataForm.addressCode=t.fireForecastData.addressCode)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){a&&e.$http({url:e.$http.adornUrl("/generator/fireforecastdata/"+(e.dataForm.fireTime?"update":"save")),method:"post",data:e.$http.adornData({fireTime:e.dataForm.fireTime||void 0,lat:e.dataForm.lat,lng:e.dataForm.lng,area:e.dataForm.area,volcano:e.dataForm.volcano,fireLevel:e.dataForm.fireLevel,reliabilty:e.dataForm.reliabilty,frp:e.dataForm.frp,qf:e.dataForm.qf,address:e.dataForm.address,addressCode:e.dataForm.addressCode})}).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:e.dataForm.fireTime?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key,"Enter"))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"纬度",prop:"lat"}},[t("el-input",{attrs:{placeholder:"纬度"},model:{value:e.dataForm.lat,callback:function(a){e.$set(e.dataForm,"lat",a)},expression:"dataForm.lat"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"经度",prop:"lng"}},[t("el-input",{attrs:{placeholder:"经度"},model:{value:e.dataForm.lng,callback:function(a){e.$set(e.dataForm,"lng",a)},expression:"dataForm.lng"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"地域",prop:"area"}},[t("el-input",{attrs:{placeholder:"地域"},model:{value:e.dataForm.area,callback:function(a){e.$set(e.dataForm,"area",a)},expression:"dataForm.area"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"volcano",prop:"volcano"}},[t("el-input",{attrs:{placeholder:"volcano"},model:{value:e.dataForm.volcano,callback:function(a){e.$set(e.dataForm,"volcano",a)},expression:"dataForm.volcano"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"fireLevel",prop:"fireLevel"}},[t("el-input",{attrs:{placeholder:"fireLevel"},model:{value:e.dataForm.fireLevel,callback:function(a){e.$set(e.dataForm,"fireLevel",a)},expression:"dataForm.fireLevel"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"reliabilty",prop:"reliabilty"}},[t("el-input",{attrs:{placeholder:"reliabilty"},model:{value:e.dataForm.reliabilty,callback:function(a){e.$set(e.dataForm,"reliabilty",a)},expression:"dataForm.reliabilty"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"frp",prop:"frp"}},[t("el-input",{attrs:{placeholder:"frp"},model:{value:e.dataForm.frp,callback:function(a){e.$set(e.dataForm,"frp",a)},expression:"dataForm.frp"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"qf",prop:"qf"}},[t("el-input",{attrs:{placeholder:"qf"},model:{value:e.dataForm.qf,callback:function(a){e.$set(e.dataForm,"qf",a)},expression:"dataForm.qf"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"address",prop:"address"}},[t("el-input",{attrs:{placeholder:"address"},model:{value:e.dataForm.address,callback:function(a){e.$set(e.dataForm,"address",a)},expression:"dataForm.address"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"addressCode",prop:"addressCode"}},[t("el-input",{attrs:{placeholder:"addressCode"},model:{value:e.dataForm.addressCode,callback:function(a){e.$set(e.dataForm,"addressCode",a)},expression:"dataForm.addressCode"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},i=t("VU/8")(r,l,!1,null,null,null);a.default=i.exports}});