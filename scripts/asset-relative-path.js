/**
 * Allow writing image paths with post slug prefix in Markdown,
 * e.g. ![alt](20260426/xxx.jpg) instead of ![alt](xxx.jpg)
 *
 * This filter strips the slug prefix before rendering so that
 * hexo-renderer-marked's postAsset can resolve the correct path.
 */
hexo.extend.filter.register('before_post_render', function (data) {
  const slug = data.slug;
  if (!slug) return data;
  const regex = new RegExp(`!\\[([^\\]]*)\\]\\((?:\\.[\\\\/])?${slug}[\\\\/]([^)]+)\\)`, 'g');
  data.content = data.content.replace(regex, '![$1]($2)');
  return data;
});
