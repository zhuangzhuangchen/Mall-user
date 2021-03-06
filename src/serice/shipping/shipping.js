var _util =require('util/index.js');

var _shipping={
	shipping:function(data,success,error){
		_util.request({
			method:'post',
			url:'/shipping',
			data:data,
			success:success,
			error:error
		})
	},
	getShippingList:function(success,error){
		_util.request({
			url:'/shipping/list',
			success:success,
			error:error
		})
	},
	deleteAddress:function(data,success,error){
		_util.request({
			method:'put',
			url:'/shipping/deleteAddress',
			data:data,
			success:success,
			error:error
		})
	},
	getAddress:function(data,success,error){
		_util.request({
			method:'get',
			url:'/shipping/getAddress',
			data:data,
			success:success,
			error:error
		})
	},
	editAddress:function(data,success,error){
		_util.request({
			method:'put',
			url:'/shipping/editAddress',
			data:data,
			success:success,
			error:error
		})
	}
}

module.exports=_shipping;