
module.exports=(app, sVO)=>{
	
	app.get('/insert',function(req,res){
		res.render('input_form');
	})	
		
		
	
	app.post('/insert',function(req,res){
		var vo= new sVO(req.body);
				
		// promise테스트
		var ps=vo.save();
		
	//	ps.then(function(err,data){
	//		res.redirect('/list')
	//	})
	})
	
	
	app.get('/list',function(req,res){
		var pfind=sVO.find((err,data)=>{
			res.render('list')
			});	
		})
		
		
	app.get('/listbody',(req,res)=>{
		sVO.find((err,data)=>{
		res.render('list_body',{list:data})
		})
	})
		
}
