using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fifa_WebAPI.Models;

namespace Fifa_WebAPI.BusinessLayer
{
	public class Player : Models.Player
	{

		public new string FullName
		{
			get
			{ return string.Concat(FirstName, " ", LastName);  }
		}        //derived, hence only getter 


    }
}
