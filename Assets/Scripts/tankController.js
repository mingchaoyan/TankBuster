#pragma strict
var maxSpeed:float = 3.0;
var minSpeed:float = 1.0;
var curSpeed:float =0;
function Start () {
	curSpeed = Random.Range(minSpeed, maxSpeed);
}

function Update () {
	transform.Translate(Vector3.left * curSpeed*Time.deltaTime);
	if(transform.localPosition.x < -10){
		transform.Translate(Vector3(20, 0, 0));
		Start();
	}

}