using System;
using System.Collections.Generic;
using System.Text;

namespace Production.taghelpers
{
    public class DwListConfiguration
    {
        public string ListName { get; set; }
        public int ListId { get; set; }

        public List<DwListFilterConfiguration> DwListFilterConfigurations { get; set; } = 
            new List<DwListFilterConfiguration>();
    }
}
