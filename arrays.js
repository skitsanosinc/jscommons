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

Array.prototype.sortNum = function()
{
	return this.sort(function(a, b)
	{
		return a - b;
	});
};

Array.prototype.sortDate = function(p, d)
{
	var dateRE = /^(\d{2})[\/\- ](\d{2})[\/\- ](\d{4})/;

	function sortByMonthAsc(a, b)
	{
		a = a.replace(dateRE, "$3$2$1");
		b = b.replace(dateRE, "$3$2$1");
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	}

	function sortByMonthDesc(a, b)
	{
		a = a.replace(dateRE, "$3$2$1");
		b = b.replace(dateRE, "$3$2$1");
		if (a > b) return -1;
		if (a < b) return 1;
		return 0;
	}

	function sortByDayAsc(a, b)
	{
		a = a.replace(dateRE, "$3$1$2");
		b = b.replace(dateRE, "$3$1$2");
		if (a > b) return 1;
		if (a < b) return -1;
		return 0;
	}

	function sortByDayDesc(a, b)
	{
		a = a.replace(dateRE, "$3$1$2");
		b = b.replace(dateRE, "$3$1$2");
		if (a > b) return -1;
		if (a < b) return 1;
		return 0;
	}

	switch (d)
	{
		case 'asc':
			if (p == 'd')
			{
				return this.sort(sortByDayAsc);
			}
			else
			{
				return this.sort(sortByMonthAsc);
			}
			break;

		case 'desc':
			if (p == 'd')
			{
				return this.sort(sortByDayDesc);
			}
			else
			{
				return this.sort(sortByMonthDesc);
			}
			break;
	}
};

Array.prototype.remove = function(from, to)
{
	this.splice(from, !to || 1 + to - from + (!(to < 0 ^ from >= 0) && (to < 0 || -1) * this.length));
	return this.length;
};

Array.prototype.exists = function(x)
{
	for (var i = 0; i < this.length; i++)
	{
		if (this[i] == x) return true;
	}
	return false;
};

Array.prototype.compareArrays = function(arr)
{
	if (this.length != arr.length) return false;
	for (var i = 0; i < arr.length; i++)
	{
		if (this[i].compareArrays)
		{ //likely nested array
			if (!this[i].compareArrays(arr[i]))
			{
				return false;
			}
			else
			{
				continue;
			}
		}
		if (this[i] != arr[i]) return false;
	}
	return true;
};

Array.prototype.random = function()
{
	return this[Math.floor((Math.random() * this.length))];
};

Array.prototype.filter = function(fun /*, thisp*/)
{
	var len = this.length;
	if (typeof fun != "function")
	{
		throw new TypeError();
	}

	var res = [];
	var thisp = arguments[1];
	for (var i = 0; i < len; i++)
	{
		if (i in this)
		{
			var val = this[i]; // in case fun mutates this
			if (fun.call(thisp, val, i, this))
			{
				res.push(val);
			}
		}
	}

	return res;
};

Array.prototype.find = function(str)
{
	var index = -1;
	for (var i = 0; i < this.length; i++)
	{
		if (this[i] == str)
		{
			index = i;
		}
	}
	return index;
};

Array.prototype.append = function(arr)
{
	var a = arr;
	if (!(arr instanceof Array))
	{
		a = [arr];
	}
	for (var i = 0; i < a.length; i++)
	{
		this.push(a[i]);
	}
};