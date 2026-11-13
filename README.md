# Patricia A. Apellaniz

Personal academic website built with Jekyll and GitHub Pages.

## Local Development

Install the Ruby dependencies:

```bash
bundle install
```

Serve locally:

```bash
bundle exec jekyll serve -l -H localhost
```

Build a clean static site:

```bash
bundle exec jekyll clean
bundle exec jekyll build
```

## Updating the portfolio

The four main pages use `_layouts/portfolio.html` and the shared theme in
`assets/css/portfolio.css`. Individual publication pages use the same theme.

- Add or edit papers in `_publications/`. Counts, year charts, topics, type filters
  and featured papers are generated from these files. Set `featured: true` to
  include a paper in Featured. PDF, DOI, GitHub, code and abstract links remain
  available in the publication list.
- Edit `_data/news.json` for the dated news list (newest first, up to five items).
- Edit `_data/journey.json` for the horizontal personal timeline and its images.
- Edit `_data/employment.json` for contract dates, roles, affiliations and links.
- Edit `_data/cv.json` for degrees, thesis links and research stays.
- Edit `_data/research_focus.json` for Current focus keywords and descriptions.
- Edit `_data/collaborations.yml` for projects, roles, albums, logos and links.
- Profile and social links still come from `_config.yml`; navigation comes from
  `_data/navigation.yml`.

The original page URLs and redirects are preserved. The `mockup/` directory is
excluded from Jekyll output; its files are design references, not production
sources. Updating the site does not update the downloadable CV PDF.
