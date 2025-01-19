const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {

    // Adding the custom filter
    eleventyConfig.addFilter("dateFull", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
    });


    eleventyConfig.addLayoutAlias('default', 'base.njk');


    // Copy the `public` directory to the root of the output folder
    eleventyConfig.addPassthroughCopy({ "_public": "." });
    // Watch the `public` directory for changes
    eleventyConfig.addWatchTarget("_public");


    eleventyConfig.addPassthroughCopy('./_src/admin');
    // eleventyConfig.addPassthroughCopy('./_src/badmin');

    eleventyConfig.addPassthroughCopy('./_src/404.html');
    eleventyConfig.addPassthroughCopy('./_src/terms_of_service.html');
    eleventyConfig.addPassthroughCopy('./_src/privacy_policy.html');


    eleventyConfig.addCollection("everything", function(collectionApi) {
        return collectionApi.getFilteredByTag("post");
    });

    eleventyConfig.addCollection("post", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("post"));
    });

    eleventyConfig.addCollection("strategy", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("strategy"));
    });
    eleventyConfig.addCollection("buying", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("buying"));
    });
    eleventyConfig.addCollection("renting", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("renting"));
    });
    eleventyConfig.addCollection("maintaining", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("maintaining"));
    });

    eleventyConfig.addCollection("feed", function (collectionApi) {
        return collectionApi.getAllSorted().slice(20, 25);
      });

    return {
        dir: {
            input: "_src",
            output: "_site"
        }
    };

}