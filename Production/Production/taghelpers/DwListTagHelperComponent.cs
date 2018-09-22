using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace Production.taghelpers
{
    public class DwListTagHelperComponent : TagHelperComponent
    {
        private readonly string _linkTag =
            @"<link rel=""stylesheet"" href=""/css/address.css"" />";

        private readonly string _scriptTag =
            @"<script src=""/scripts/address.js"" />";

        public override int Order => 1;

        public override Task ProcessAsync(TagHelperContext context,
                                          TagHelperOutput output)
        {
            if (string.Equals(context.TagName, "head",
                              StringComparison.OrdinalIgnoreCase))
            {
                output.PostContent.AppendHtml(_linkTag);
            }

            if (string.Equals(context.TagName, "body",
                             StringComparison.OrdinalIgnoreCase))
            {
                output.PostContent.AppendHtml(_scriptTag);
            }

            return Task.CompletedTask;
        }
    }
}