var index:int = 0;
var speed:int = 20;
function Update () {
	index = Time.time*20%3;
	renderer.material.mainTextureScale = Vector2(1.0/3.0, 1);
	renderer.material.mainTextureOffset = Vector2(index*1.0/3.0, 1);
}