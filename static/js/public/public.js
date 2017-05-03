//domainUrl
export function domainUrl(){
	return "http://test.qjdsgf.com";
}//end func

//获得http url参数
export function getQueryString(name) {
    if(name && name!=''){
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var parameter = window.location.hash.split("?")[1];
         if(parameter != "undefined" && parameter != undefined){
            var r = parameter.match(reg);
            if(r!=null)return  decodeURIComponent(r[2]); return null;
         }
         else return null
    }//end if
    else return null;
}//end func

//处理时间格式
export function dealDate(time){
    var d = new Date(parseInt(time.replace("/Date(", "").replace(")/", ""), 10));;
    return d.getFullYear()+'-'+(+d.getMonth()+1)+'-'+d.getDate();
}//end func

// AJAX请求的方法
export function iAjax(url,data,callback,type){
	var iType = type || false;

	$.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        async: true,
        data:data,
        success: successF,
        error: errorF
    });

    function successF(data){
    	if(iType){
    		callback(data);
    	}
    	else{
    		if(data.ErrorCode == 0){
	    		if (callback) callback(data);
	    	}
	    	else{
	    		icom.alert(data.Message);
	    	}
    	}
    }

    function errorF(data){
    	console.log(data);
    }
}//end func