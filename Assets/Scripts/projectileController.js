#pragma strict
var fireSound : AudioClip;
var explosion : GameObject;
function Start () {
	AudioSource.PlayClipAtPoint(fireSound, Vector3(0, 1, -5));
}

function OnCollisionEnter(collison: Collision) {
	if (collison.gameObject.tag == "plane"){
		Instantiate(explosion, Vector3(transform.position.x, transform.position.y, -1), 
			Quaternion.identity);
		Destroy(gameObject);
	}
}

function Update () {
	if(transform.position.x < -8 || transform.position.y > 9) 
		Destroy(gameObject);
}