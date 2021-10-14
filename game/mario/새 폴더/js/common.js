

	var num = null;
	var runImg = "./images/mario/mario_walk0"
	var jumpImg = "./images/mario/mario_jump"
	var stand = "./images/mario/mario_stand"




	// 20190706_ new script
	
	var winW = $(window).outerWidth(true);
	var chaNum = null;
	var createName = null;
	var userMove = null;
	var countNum = null;


	$('.create_btn').on('click', function(){
		var _this = $(this);
	
		if( $('.insert_name > input').val() == "" || $('.insert_name > input').val() == " " ){
			alert('이름을 입력하세요');
		
		}else{

			countNum = countNum + 1;
			chaNum = 'char' + countNum;

			createName = $('.insert_name > input').val();
			userMove = createName + "_motion";

			newCha( chaNum );
		}
	})



	// charactor create
	var newCha = function( $target ){

		// // random charactor
		// var ranNum = parseInt( Math.random() * 2 );
		// var CharNum = null;

		// if( ranNum == '0'){

		// }else if( ranNum == '1' ){

		// }


		var mario = "mario"

		// name add
		$('.stage_area').append("<div class='athlete " + chaNum + " mario'><div class='user_name'>" + createName + "</div></div>");
		$('.athlete.'+ chaNum).append("<img src='./images/mario/" + mario + "_stand.png' alt='" + mario + chaNum + "'>")

		// script add
		$('#charactor_group').append("<script> var " + $target + "= new cha; var " + $target + "_run; "+ $target +".standBy(); </script>");
	}





	// charactor attribute
	var cha = function(){

		//SELECTOR VAR
		var target = this;
		var _this = $( '.'+ chaNum  );
		var _thisW = Number(_this.css( 'width' ).replace("px", ""));
		var standByMove = null;
		var durTime = 1200

		// 움직임 loop 변수
		this.goRun = null;

		//OBJECT ATTRIBUTE
		this.userName = createName;


		// 생성 초기 대기 속성
		this.standBy = function(){
			standByMove = setInterval(function(){					
				var posLeft = Number( _this.css('left').replace("px","") );
				var waitUser = parseInt( 3 * Math.random() );				


				console.log( createName );

				// left move
				if( waitUser == '0' ){
					_this.addClass('reverse');

					if( Math.random() < 0.2 ){
						_this.animate({
							'left': Math.max(0, posLeft - 100 - Math.random()*150 ),								
						}, { duration: durTime, queue: false, easing: 'linear' });
						
						// 이미지 상태 변경
						clearTimeout( target.goRun );
						target.jumping();

					}else{
						_this.animate({
							'left': Math.max(0, posLeft - 100 - Math.random()*150 ),								
						}, { duration: durTime, queue: false, easing: 'linear' });

						// 이미지 상태 변경
						clearTimeout( target.goRun );
						target.running();
					}	
				
				// right move
				}else if( waitUser == '1' ){
					_this.removeClass('reverse');

					if( Math.random() < 0.2 ){
						_this.animate({
							'left': Math.min(winW - _thisW, posLeft + 100 + Math.random()*150 )								
						}, {duration: durTime, queue: false, easing:'linear'});

						// 이미지 상태 변경
						clearTimeout( target.goRun );
						target.jumping();

					}else{
						_this.animate({
							'left': Math.min(winW - _thisW, posLeft + 100 + Math.random()*150 )								
						}, {duration: durTime, queue: false, easing:'linear'});

						// 이미지 상태 변경
						clearTimeout( target.goRun );
						target.running();
					}

				// don't move
				}else if( waitUser == '2' ){
					_this.animate({
						'left': posLeft
					})

					// 이미지 상태 변경
					clearTimeout( target.goRun );
					_this.find('img').attr("src", stand + ".png");

				}
			},durTime);
		};


		// fun function
		this.running = function(){

			// var goRun
			var speed = 50;
			
			function runLoop(){
				num = num + 1;
				if( num > 4 ) num = 1;

				_this.find('img').attr("src", runImg + num + ".png");
				
				// console.log(  $( '.'+ chaNum  ) + ' loop')

				// clearTimeout( goRun );
				target.goRun = setTimeout( runLoop , speed);
			}

			clearTimeout( target.goRun );
			runLoop();
		
		};


		// jumping function
		this.jumping = function(){

			var posTop = Number( _this.css('top').replace("px","") );
			_this.find('img').attr("src", jumpImg + ".png");

			_this.animate({ 'top': 0 }, { duration:600, easing:'easeOutCubic', queue:true})
			_this.animate({ 'top': 100 }, { duration:600, easing:'easeInCubic', queue:true})
		};
	}


	
	


	var speed = 100;
			
	function runLoop(){
		num = num + 1;
		if( num > 4 ) num = 1;

		$('.images1 > img').attr("src", runImg + num + ".png");
		
		

		console.log('wht')
		goRun =  this.setTimeout( runLoop , speed);
	}

	
			
	function runLoop2(){
		num = num + 1;
		if( num > 4 ) num = 1;

		$('.images2 > img').attr("src", runImg + num + ".png");
		
			
		console.log('wht2')
		goRun2 = this.setTimeout( runLoop2 , speed);
	}