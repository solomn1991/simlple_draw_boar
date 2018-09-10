class Board extends eui.Component implements  eui.UIComponent {

	private pen:Pen;
	private lines:any[]=[];
	private current_line:Line;


	public constructor() {
		super();

		

		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.drawBegin,this)
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.drawMove,this)
		this.addEventListener(egret.TouchEvent.TOUCH_END,this.drawEnd,this)
		this.addEventListener(egret.TouchEvent.FOCUS_OUT,this.drawCancel,this)
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();



		
		this.pen.visible = false;
	}

	drawBegin(evt:egret.TouchEvent){
		this.current_line = new Line();
		this.current_line.graphics.lineStyle(3,0xff00ff)
		let point:egret.Point = this.globalToLocal(evt.stageX,evt.stageY)
		this.pen.x = point.x;
		this.pen.y = point.y;
		this.current_line.push(point)
		this.pen.visible = true;
		this.addChild(this.current_line)
	}

	drawMove(evt:egret.TouchEvent){
		let point:egret.Point = this.globalToLocal(evt.stageX,evt.stageY)
		this.pen.x = point.x;
		this.pen.y = point.y;
		this.current_line.push(point)
		this.current_line.link_last_two()
	}

	drawEnd(evt:egret.TouchEvent){
		let point:egret.Point = this.globalToLocal(evt.stageX,evt.stageY)
		this.pen.x = point.x;
		this.pen.y = point.y;
		this.current_line.push(point)
		this.pen.visible = false;

		this.lines.push(this.current_line);
		this.current_line.link_last_two();
		console.log(this.current_line.point_set)
		this.lines.push(this.current_line)
		
	}
	drawCancel(){
		console.log(123)
	}

	
	
	
}