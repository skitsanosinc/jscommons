/**
 * Created by skitsanos on 6/4/14.
 */
Number.prototype.isInteger = function ()
{
	return Number(this) === Math.floor(this);
};

Number.max = function (a, b)
{
	return a < b ? b : a;
};

Number.min = function (a, b)
{
	return a > b ? b : a;
};