var speed:float = 2.0;

function Update()
{
	transform.Translate(Vector3.left*speed*Time.deltaTime);
	if (transform.localPosition.x < -18.4 )
	{
		transform.localPosition.x = 18.4;
	}
}