Array.prototype.exists = function (x)
{
	for (var i = 0; i < this.length; i++)
	{
		if (this[i] == x) return true;
	}
	return false;
};

Array.prototype.even = function (val)
{
	var result = [];
	for (var i = 0; i < this.length; i++)
	{
		if (0 == this[i] % 2)
			result.push(this[i]);
	}

	return result;
};

Array.prototype.odd = function ()
{
	var result = [];
	for (var i = 0; i < this.length; i++)
	{
		if (0 != this[i] % 2)
			result.push(this[i]);
	}

	return result;
};

Array.prototype.evenIndex = function ()
{
	var result = [];
	for (var i = 0; i < this.length; i++)
	{
		if (0 != i % 2)
			result.push(this[i]);
	}

	return result;
};

Array.prototype.oddIndex = function ()
{
	var result = [];
	for (var i = 0; i < this.length; i++)
	{
		if (0 == i % 2)
			result.push(this[i]);
	}

	return result;
};
