private var aniSprite;
private var isPlaying:boolean = true;
var explisionSound:AudioClip;
var aniRowSize:int;
var aniColSize:int;
var aniRowStart:int;
var aniColStart:int;
var aniTotalFrames:int;
var aniFramesPerSecond:int;
var aniTotalTime:int;
function Start () {
	aniSprite = GetComponent("aniSprite");
	var audioPosition = GameObject.Find("Camera").transform.position;
	AudioSource.PlayClipAtPoint(explisionSound, audioPosition);
}

function Update () {
	if(isPlaying) {
		isPlaying = aniSprite.aniSprite(aniColSize, aniRowSize, aniColStart, aniRowStart,
			 aniTotalFrames, aniFramesPerSecond, aniTotalTime);
	} else {
		Destroy(gameObject);
	}
}