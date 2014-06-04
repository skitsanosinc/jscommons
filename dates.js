/**
 * Created by skitsanos on 6/4/14.
 */
Date.prototype.add = function (/**String*/unit, /**Number*/value)
{

	unit = unit.replace(/s$/).toLowerCase();

	switch (unit)
	{
		case "year":
			this.setYear(this.getYear() + value);
			break;
		case "month":
			this.setMonth(this.getMonth() + value);
			break;
		case "week":
			this.setTime(this.getTime() + value * 604800000);
			break;
		case "day":
			this.setTime(this.getTime() + value * 86400000);
			break;
		case "hour":
			this.setTime(this.getTime() + value * 3600000);
			break;
		case "minute":
			this.setTime(this.getTime() + value * 60000);
			break;
		case "second":
			this.setTime(this.getTime() + value * 1000);
			break;
		case "nanosecond":
		// Fall Through
		default:
			this.setTime(this.getTime() + value);
			break;
	}

	return this;
};

/**
 * Checks if the current time is on daylight saving time or not
 * @return  true when the current time is daylight saving time and false when it is standard time
 */
Date.prototype.dst = function ()
{
	return this.getTimezoneOffset() < this.stdTimezoneOffset();
};

Date.prototype.addGmtOffset = function (offset, ds)
{
	var d = this;
	var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

	if (typeof (offset) == 'string')
	{
		//00:00
		var shiftz = 0;
		if (ds != undefined && ds == true)
		{
			shiftz = 1;
		}
		var _h = 3600000 * (Number(offset.split(':')[0]) + shiftz);
		var _m = 60000 * offset.split(':')[1];

		return new Date(utc + _h + _m);
	}
	else
	{
		var shift = 0;
		if (ds != undefined && ds == true)
		{
			shift = 1;
		}
		return new Date(utc + (3600000 * (offset + shift)));
	}
};

Date.prototype.addGmtOffsetByMinutes = function (offset, ds)
{
	if (ds != undefined && ds == true)
	{
		offset += 60;
	}
	var d = this;
	var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	return new Date(utc + (60000 * offset));
};

Date.prototype.subtract = function (/**String*/unit, /**Number*/value)
{

	unit = unit.replace(/s$/).toLowerCase();

	switch (unit)
	{
		case "year":
			this.setYear(this.getYear() - value);
			break;
		case "month":
			this.setMonth(this.getMonth() - value);
			break;
		case "week":
			this.setTime(this.getTime() - value * 604800000);
			break;
		case "day":
			this.setTime(this.getTime() - value * 86400000);
			break;
		case "hour":
			this.setTime(this.getTime() - value * 3600000);
			break;
		case "minute":
			this.setTime(this.getTime() - value * 60000);
			break;
		case "second":
			this.setTime(this.getTime() - value * 1000);
			break;
		default:
			this.setTime(this.getTime() - value);
			break;
	}
	return this;
};

Date.prototype.truncate = function (unit, /**String*/to)
{

	unit = unit.replace(/s$/).toLowerCase();

	switch (unit)
	{
		case "year":
			this.setMonth(0, 1);
			this.setHours(0, 0, 0, 0);
			break;
		case "month":
			this.setDate(1);
			this.setHours(0, 0, 0, 0);
			break;
		case "week":
			this.subtract("day", this.getDay());
			break;
		case "day":
			this.setMinutes(0, 0, 0, 0);
			break;
		case "hour":
			this.setMinutes(0, 0, 0);
			break;
		case "minute":
			this.setSeconds(0, 0);
			break;
		case "second":
			this.setMilliseconds(0);
			break;
		default:
			break;
	}

	//return this;
};

Date.prototype.getMondaySunday = function ()
{
	return [new Date(this).subtract('day', this.getDay() - 1), new Date(this).add('day', 7 - this.getDay())];
};