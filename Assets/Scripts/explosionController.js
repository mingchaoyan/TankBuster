private var aniSprite;
private var isPlaying:boolean = true;
var explisionSound:AudioClip;
function Start () {
	aniSprite = GetComponent("aniSprite");
	var audioPosition = GameObject.Find("Camera").transform.position;
	AudioSource.PlayClipAtPoint(explisionSound, audioPosition);
}

function Update () {
	if(isPlaying) {
		isPlaying = aniSprite.aniSprite(4, 6, 0, 0, 10, 10, 2);
	} else {
		Destroy(gameObject);
	}
}