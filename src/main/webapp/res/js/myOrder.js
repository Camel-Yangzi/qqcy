	var isshow=0;//0小窗口没有显示，1小窗口已显
	
	function creatediv(o_id,price,startDate)
	{   
		isshow=1;
	    var msgw,msgh,bordercolor;
	    msgw=550;//提示窗口的宽度
	    msgh=400;//提示窗口的高度
	    var sWidth,sHeight;
	    if( top.location == self.location )
	        doc = document;
	    var docElement = doc.documentElement;
	    sWidth=docElement.clientWidth;
	    sHeight = docElement.clientHeight;
	    if( docElement.scrollHeight > sHeight )
	        sHeight = docElement.scrollHeight;
	    
	    //背景遮蔽层
	    var bgObj=document.createElement("div");
	    bgObj.setAttribute('id','bgDiv');
	    bgObj.style.position= "absolute";
	    bgObj.style.top= "0";
	    bgObj.style.left= "0";
	    bgObj.style.background= "#777";
	    bgObj.style.filter=" progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75 ";
	    bgObj.style.opacity="0.6";
	    bgObj.style.width=sWidth + "px";
	    bgObj.style.height=sHeight + "px";
	    bgObj.style.zIndex = "10000";
	    document.body.appendChild(bgObj);
	       
	    //提示框
	    var msgObj=document.createElement("div");
	    msgObj.setAttribute("id","msgDiv");
	    msgObj.setAttribute("align","center");
	    msgObj.style.position = "fixed";
	    msgObj.style.left = "50%";
	    msgObj.style.background="#fff";
	    msgObj.style.marginLeft = "-250px" ;
	    msgObj.style.top = "20%";
	    msgObj.style.width = msgw + "px";
	    msgObj.style.height =msgh + "px";
	    msgObj.style.zIndex = "10001";
	    if(typeof(price) == "undefined"){
	    	console.log(123);
	    	msgObj.innerHTML = OkInnerHtml(o_id);
	    }else{
	    	msgObj.innerHTML = PayInnerHtml(o_id,price,startDate);
	    }
	    
	    document.body.appendChild(msgObj);
	    console.log("打开："+isshow);
	}


	function delWinD()
	{
	   document.body.removeChild(bgDiv); 
	   document.body.removeChild(msgDiv);
	   isshow=0;
	   console.log("关闭："+isshow);
	}
	
	function PayInnerHtml(o_id,price,startDate){
		var str = "<div class='row'>" +
					"<div class='col-md-2'><button type='button' class='btn btn-danger' style='width:40px;height:25px;padding:0px;' onclick='delWinD();return false;'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></div>" +
					"<div class='col-md-8  page-header' style='margin-top:10px;'><h3> 确认订单  <small>     Attention！</small></h3></div>" +
					"<div class='col-md-2'></div>" +
					"<div class='row'>" +
						"<div class='col-md-8' ><h2>金额："+price+"</h2></div>" +
					"</div>"+
					"<div class='row'>" +
						"<div class='col-md-8' style='margin-left:58px'><h2>"+culRestTime(startDate)+"</h2></div>" +
					"</div>"+
					"<div class='row' style='margin-top:45px'>" +
						"<div class='col-md-3'></div>" +	
						"<div class='col-md-3'><button class='btn btn-success' onclick='finishOrder("+o_id+")'>确认订单</button></div>" +
						"<div class='col-md-3'><button class='btn btn-warning' onclick='cancelOrder("+o_id+")'>取消订单</button></div>" +
						"<div class='col-md-3'></div>" +
					"</div>"+
				"</div>";
		
		return str;
	}
	
	function OkInnerHtml(o_id){
		var str = "<div class='row'>" +
					"<div class='col-md-2'><button type='button' class='btn btn-danger' style='width:40px;height:25px;padding:0px;' onclick='delWinD();return false;'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button></div>" +
					"<div class='col-md-8  page-header' style='margin-top:10px;'><h3> 确认收货  <small>     Attention！</small></h3></div>" +
					"<div class='col-md-2'></div>" +
					"<div class='row'>" +
						"<div class='col-md-8' ><h2>货物已发送</h2></div>" +
					"</div>"+
					"<div class='row'>" +
						"<div class='col-md-8' style='margin-left:58px'><h2>请及时接收并确认收货</h2></div>" +
					"</div>"+
					"<div class='row' style='margin-top:45px'>" +
						"<div class='col-md-4'></div>" +	
						"<div class='col-md-4'><button class='btn btn-success' onclick='finishOrder("+o_id+")'>确认收货</button></div>" +
						"<div class='col-md-4'></div>" +
					"</div>"+
					"</div>";
			
		return str;
	}


	/**
	 * 创建订单并提交订单
	 */
	function finishOrder(o_id) {
	    var turnForm = document.createElement("form");   
	    //一定要加入到body中！！   
	    document.body.appendChild(turnForm);
	    turnForm.method = 'post';
	 	turnForm.action = "order/finish.do";
		//创建隐藏表单
		var newElement = document.createElement("input");
		    newElement.setAttribute("name","o_id");
		    newElement.setAttribute("type","hidden");
		    newElement.setAttribute("value",o_id);
		    turnForm.appendChild(newElement);
		 
		    turnForm.submit();
	}
	
	function cancelOrder(o_id){
		 window.location.href="order/cancelOrder.do?o_id="+o_id; 
	}
	
	
	function culRestTime(startDate){
		var nowDate=new Date();    //结束时间
		var restTime=86400000-(nowDate.getTime()-startDate);  //时间差的毫秒数
		
		console.log("开始时间："+startDate);
		console.log("当前时间："+nowDate.getTime());
		console.log("剩余时间："+restTime);
		
		var hours = Math.floor(restTime/(3600*1000));
		
		var minutes = Math.floor((restTime%(3600*1000))/(60*1000));
		
		return "剩余时间："+hours+"小时   "+minutes+" 分钟";
	}
	
	
	
	
	
	
	
	
	
	
	
	