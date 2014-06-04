/**
 * Created by skitsanos on 6/4/14.
 */

function iif(i, j, k)
{
	if (i)
	{
		return j;
	}
	else
	{
		return k;
	}
}

function namespace(ns)
{
	var nsParts = ns.split(".");
	var root = window;

	for (var i = 0; i < nsParts.length; i++)
	{
		if (typeof root[nsParts[i]] == "undefined")
		{
			root[nsParts[i]] = {};
		}

		root = root[nsParts[i]];
	}
}
