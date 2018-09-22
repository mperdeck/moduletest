﻿using System;
using System.Collections.Generic;
using System.Text;


using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc.Razor.TagHelpers;

namespace Production.taghelpers
{
    [RestrictChildren("dw-list-filter")]
    public class DwListTagHelper: TagHelper
    {
        public string ListName { get; set; }
        public int ListId { get; set; }

        private readonly ITagHelperComponentManager _tagHelperComponentManager;

        public DwListTagHelper(ITagHelperComponentManager tagHelperComponentManager)
        {
            _tagHelperComponentManager = tagHelperComponentManager;

            _tagHelperComponentManager.Components.Add(
                new DwListTagHelperComponent());
        }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {

            var dwListConfiguration = new DwListConfiguration()
            {
                ListName = ListName,
                ListId = ListId
            };

            context.Items.Add(
                typeof(List<DwListFilterConfiguration>), 
                dwListConfiguration.DwListFilterConfigurations);
            await output.GetChildContentAsync();

            // ------------------

            var dwListConfigurationSerialised = JsonConvert.SerializeObject(dwListConfiguration, Formatting.Indented);
            string variableName = "dwList" + context.UniqueId;
            string content = $"{variableName} = {dwListConfigurationSerialised}";

            output.TagName = "script";
            output.Content.SetHtmlContent(content);
        }
    }
}
