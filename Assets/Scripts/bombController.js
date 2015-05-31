var aniSprite;
var explosion:GameObject;
var bombSound:AudioClip;
private var myExplosion;

function Start () {
	var audioPosition = GameObject.Find("Camera").transform.position;
	AudioSource.PlayClipAtPoint(bombSound, audioPosition);
}

function OnCollisionEnter(collision:Collision) {
	if(collision.gameObject.tag == "tank")
	{
		myExplosion = Instantiate(explosion, Vector3(
			transform.position.x, transform.position.y,
			-1), Quaternion.identity);
		Destroy(gameObject);
        Destroy(collision.gameObject);
	}
	if(collision.gameObject.tag == "projectile"){
		Destroy(collision.gameObject);
	}
	if(collision.gameObject.tag == "ground") {
		myExplosion = Instantiate(explosion, Vector3(
			transform.position.x, transform.position.y,
			-1), Quaternion.identity);	print("ground");
		Destroy(gameObject);
	}
}
