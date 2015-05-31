var aniSprite;

function Start () {
	aniSprite = GetComponent("aniSprite");
}

function Update () {
	aniSprite.aniSprite(3, 1, 0, 0, 3, 6, 0);
}