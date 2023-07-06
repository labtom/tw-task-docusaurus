---
id: create-document
sidebar_position: 2
---

# Create a Document

Documents on this page are simply **groups of pages** connected through:

- a **sidebar**
- **previous/next navigation**

And generated from the folders and markdown files in the `/docs` folder.

:::tip
Just add a test markdown file to the `/docs` folder to see how it works.
:::

## Create Your First Doc

Create a Markdown file at `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

Docusaurus automatically **creates a sidebar** from the `docs` folder.

Add metadata to customize the sidebar label and position:

```md
---
id: hi
sidebar_label: 'Hi!'
sidebar_position: 3
description: 'Hi! I'm a markdown page'
keywords:
  - my first md page here
---

# Hello

This is my **first Docusaurus document**!
```

Check [this document](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) if you'd like to see how you can define sidebar label and other metadata for your markdown files.

:::tip
Markdown front matter follows standard formatting for [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started).
:::