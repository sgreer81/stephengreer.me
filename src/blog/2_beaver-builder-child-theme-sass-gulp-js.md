---
path: "/beaver-builder-child-theme-sass-gulp-js"
date: "2017-03-10"
title: "Beaver Builder Child Theme with Sass and Gulp.js"
featuredImage: "../images/default-article.jpg"
---

I love [Beaver Builder](https://www.wpbeaverbuilder.com/). I have tried a number of page builders and hated them all, until I met Beaver Builder. I use it on quite a few of projects now, but for clients and personally. For larger, more detailed sites I will still build a custom theme and use the Beaver Builder plugin to control page layouts. On smaller, lower budget sites, I have been using Beaver Builder’s theme and my own child theme.

The guys over at Beaver Builder are kind enough to throw in their own child theme which I recommend using with the main theme. However, I have taken their child theme and implemented my own Gulp.js workflow.

To get started, run the following in your `wp-content/themes` directory.

```
git clone https://github.com/stephengreer08/bb-theme-child theme-name
```

Then cd into the theme directory and get gulp fired up by running

```
npm install
```

Now you can run Gulp

```
gulp
gulp watch
```

Feedback and PRs welcome. Feel free to give it a go on your next project.

Check it out on Github – [https://github.com/stephengreer08/bb-theme-child](https://github.com/stephengreer08/bb-theme-child)
