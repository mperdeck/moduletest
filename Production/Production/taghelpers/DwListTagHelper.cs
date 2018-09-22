using System;
using System.Collections.Generic;
using System.Text;


using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Production.taghelpers
{
    public class DwListTagHelper: TagHelper
    {
        public string ListName { get; set; }
        public int ListId { get; set; }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {

            var dwListConfiguration = new DwListConfiguration()
            {
                ListName = ListName,
                ListId = ListId
            };

            var dwListConfigurationSerialised = JsonConvert.SerializeObject(dwListConfiguration);
            string variableName = "dwList" + context.UniqueId;
            string content = $"{variableName} = {dwListConfigurationSerialised}";

            output.TagName = "script";
            output.Content.SetHtmlContent(content);
        }
    }
}
