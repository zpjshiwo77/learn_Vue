//domainUrl
export function domainUrl(){
	return "http://test.qjdsgf.com";
}//end func

// AJAX请求的方法
export function iAjax(url,data,callback,type){
	var iType = type || false;

	$.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        async: false,
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