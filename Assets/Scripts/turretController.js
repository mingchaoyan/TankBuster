var amtToSpeed:float = 1;
var amtRotate:float = 0;
var isMoving:boolean = true;
var projectile : Rigidbody;
var myProjectile : Rigidbody;
function Start () {
	amtRotate = 0.1*amtToSpeed;
}

function Update () {
	if(transform.localEulerAngles.z >310)
	{
		if (isMoving == true) {
			transform.localEulerAngles.z -= amtRotate;
			var fwd = transform.TransformDirection(Vector3.left);
			print(fwd);
			if(Physics.Raycast(transform.position,fwd,100)){
				print("it shoot!!!");
				myProjectile = Instantiate(projectile, transform.position+fwd, transform.rotation);
				myProjectile.velocity = fwd * 30;
				isMoving = false;
				Wait();
			}
		}
	} 
	else{
		transform.localEulerAngles.z = 340;
	}
}

function Wait(){
	yield WaitForSeconds(1);
	isMoving = true;
}