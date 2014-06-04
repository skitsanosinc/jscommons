/**
 * Created by skitsanos on 6/4/14.
 */

var GUID = {
	new: function ()
	{
		function S4()
		{
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}

		return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	}};
