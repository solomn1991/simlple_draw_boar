class Pen extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.anchorOffsetX = this.width
		this.anchorOffsetY = this.height
		
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}