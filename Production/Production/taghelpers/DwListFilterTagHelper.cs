using System;
using System.Collections.Generic;
using System.Text;


using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Production.taghelpers
{
    [RestrictChildren("dw-list-filter-option")]
    [HtmlTargetElement("dw-list-filter", ParentTag = "dw-list")]
    public class DwListFilterTagHelper : TagHelper
    {
        public string FilterName { get; set; }
        public string FilterOperation { get; set; }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {

            var dwListFilterConfiguration = new DwListFilterConfiguration()
            {
                FilterName = FilterName,
                FilterOperation = FilterOperation
            };

            context.Items.Add(
                typeof(List<DwListFilterOptionConfiguration>),
                dwListFilterConfiguration.DwListFilterOptionConfigurations);
            await output.GetChildContentAsync();

            // ------------------

            var dwListFilterConfigurations = 
                (List<DwListFilterConfiguration>)context.Items[typeof(List<DwListFilterConfiguration>)];

            dwListFilterConfigurations.Add(dwListFilterConfiguration);

            output.SuppressOutput();
        }
    }
}
