/**
 * Created by skitsanos on 6/4/14.
 */
String.prototype.isNumeric = function ()
{
	return !isNaN(this);
};

String.prototype.times = function (n)
{
	var s = this, total = "";
	while (n > 0)
	{
		if (n % 2 == 1) total += s;
		if (n == 1) break;
		s += s;
		n = n >> 1;
	}
	return total;
};
String.prototype.reverse = function ()
{
	var s = "";
	var i = this.length;
	while (i > 0)
	{
		s += this.substring(i - 1, i);
		i--;
	}
	return s;
};
String.prototype.trim = function ()
{
	var result = this.match(/^ *(.*?) *$/);
	return (result ? result[1] : this);
};

String.prototype.ltrim = function ()
{
	return this.replace(/^\s+/g, "");
};

String.prototype.rtrim = function ()
{
	return this.replace(/\s+$/g, "");
};

String.prototype.repeat = function (times)
{
	var ret = '';
	for (var i = 0; i < times; i++)
	{
		ret += this;
	}
	return ret;
};

String.prototype.startsWith = function (str)
{
	return (this.indexOf(str) === 0);
};

String.prototype.endsWith = function (str)
{
	var reg = new RegExp(str + "$");
	return reg.test(this);
};
String.prototype.mid = function (start, len)
{
	if (start < 0 || len < 0) return "";
	var iEnd, iLen = String(this).length;
	if (start + len > iLen)
	{
		iEnd = iLen;
	}
	else
	{
		iEnd = start + len;
	}
	return String(this).substring(start, iEnd);
};

String.prototype.htmlEntities = function ()
{
	return this.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

String.prototype.stripTags = function ()
{
	return this.replace(/<([^>]+)>/g, '');
};

String.prototype.capitalize = function()
{
	return this.replace(/\w+/g, function(a)
	{
		return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
	});
};

String.prototype.replaceAll = function(f, r)
{
	return this.replace(new RegExp(f, 'g'), r);
};

/*
 Replaces multiple white spaces and tabs with single white space.
 usage: "Hello		World.	".squeeze();
 */
String.prototype.squeeze = function()
{
	return this.replace(/(\t|\s+)/gm, " ");
};