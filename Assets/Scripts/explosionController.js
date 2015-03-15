private var aniSprite;
private var isPlaying:boolean = true;
var explision:AudioClip;
function Start () {
	aniSprite = GetComponent("aniSprite");
	var audioPosition = GameObject.Find("Camera").transform.position;
	AudioSource.PlayClipAtPoint(explision, audioPosition);
}

function Update () {
	if(isPlaying) {
		isPlaying = aniSprite.aniSprite(4, 6, 0, 0, 10, 10, 2);
	}
}