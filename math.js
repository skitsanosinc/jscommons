/**
 * Created by skitsanos on 6/4/14.
 */
Math.mod = function (val, mod)
{
	if (val < 0)
	{
		while (val < 0) val += mod;
		return val;
	}
	else
	{
		return val % mod;
	}
};