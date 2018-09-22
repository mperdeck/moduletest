using System;
using System.Collections.Generic;
using System.Text;

namespace Production.taghelpers
{
    public class DwListFilterConfiguration
    {
        public string FilterName { get; set; }
        public string FilterOperation { get; set; }

        public List<DwListFilterOptionConfiguration> DwListFilterOptionConfigurations { get; set; } =
            new List<DwListFilterOptionConfiguration>();
    }
}
