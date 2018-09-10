class Line extends egret.Shape{

	public point_set=[]
	

	public constructor() {
		super();
	}

	push(point:egret.Point){
		this.point_set.push(point)
	}

	get length(){
		return this.point_set.length
	}

	link_last_two(){
		if (this.length>1){
			let point_start = this.point_set[this.point_set.length-2];
			let point_end = this.point_set[this.point_set.length-1];
			this.graphics.moveTo(point_start.x,point_start.y);
			this.graphics.lineTo(point_end.x,point_end.y);
		}
	}
}