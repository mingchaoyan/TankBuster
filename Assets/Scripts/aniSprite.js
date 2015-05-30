private var myTime : float = 0;
private var isPlay = true;

function aniSprite (columnSize:int,rowSize:int,colFrameStart:int,
					rowFrameStart:int,totalFrames:int,framesPerSecond:int,totalTime:float){
    myTime += Time.deltaTime;
    if (totalTime!=0 && myTime>totalTime)
    {
            isPlay = false;
            myTime = 0;
            return isPlay;
    }

    var index : int = Time.time * framesPerSecond;        
    index = index % totalFrames;         

    var size = Vector2 (1.0 / columnSize, 1.0 / rowSize);

    var u : int = index % columnSize;            
    var v : int = index / columnSize;             
    var offset = Vector2 ((u + colFrameStart) * size.x, (1.0 - size.y) - (v + rowFrameStart) * size.y);     

    renderer.material.mainTextureOffset = offset;       
    renderer.material.mainTextureScale     = size;          
    return true;
}