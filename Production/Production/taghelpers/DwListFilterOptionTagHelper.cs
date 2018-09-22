using System;
using System.Collections.Generic;
using System.Text;


using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Production.taghelpers
{
    [HtmlTargetElement("dw-list-filter-option", ParentTag = "dw-list-filter")]
    public class DwListFilterOptionTagHelper : TagHelper
    {
        public string FilterOptionName { get; set; }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {

            var dwListFilterOptionConfiguration = new DwListFilterOptionConfiguration()
            {
                FilterOptionName = FilterOptionName
            };

            var dwListFilterOptionConfigurations = 
                (List<DwListFilterOptionConfiguration>)context.Items[typeof(List<DwListFilterOptionConfiguration>)];

            dwListFilterOptionConfigurations.Add(dwListFilterOptionConfiguration);

            output.SuppressOutput();
        }
    }
}
