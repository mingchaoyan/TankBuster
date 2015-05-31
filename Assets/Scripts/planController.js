var speed:int= 2;
var bomb : Rigidbody;
var myBomb:Rigidbody;
function Update () {
	if(Input.GetAxis("Horizontal") > 0)
		transform.Translate(Vector3.right*Time.deltaTime*speed);
	if(Input.GetAxis("Horizontal") < 0)
		transform.Translate(2*Vector3.left*Time.deltaTime*speed);
	
	transform.Translate(Input.GetAxis("Vertical")*Vector3.up*Time.deltaTime*speed);
	
	if(Input.GetKeyDown("space")){
		print("space down");
		var fwd = transform.TransformDirection(Vector3.down);
		myBomb = Instantiate(bomb, transform.position+fwd, transform.rotation);
	}

}