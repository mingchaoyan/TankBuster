

var aniSprite;

function Start () {
	aniSprite = GetComponent("aniSprite");
}

function Update () {
	aniSprite.aniSprite(4, 4, 0, 0, 4, 12, 0);
}