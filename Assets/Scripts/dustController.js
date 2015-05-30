var aniSprite;

function Start () {
	aniSprite = GetComponent("aniSprite");
}

function Update () {
	aniSprite.aniSprite(4, 4, 0, 0, 16, 16, 0);
}