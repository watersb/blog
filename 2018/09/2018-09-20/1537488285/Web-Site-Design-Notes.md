# Web Site Design Notes
Next up, we want a structured way to add the side-notes in a form factor that supports dense linking.

A Hero Image is a good idea to focus the lede of a story, but most of my stories reference many many things in a short amount of body text. I want to be able to support those links without overwhelming the flow of the text.

I have considered a number of topologies to represent the links: Timelines, Geographies, Concept Maps.

Time and space are relatively easy enough. Concept Map is something that I have thought about for 20 years, I finally (by osmosis) stumbled upon singular-value decomposition as one way of projecting the n-dimensional concept vector onto a 1-D linear map.

Another important idea that I want to support with the authoring tool: Transclusions and Transitive Links.

Transclusions are simply the inclusion of a subset of a document into another. Hash-include or server-side includes, basically. Depending upon the underlying data structure, Transclusions may need to support their own namespace. Most of my work on transclusion is from strict-XML structured documents, but I no longer sure that such machine-normalized text is necessary for Concept Maps.

Given the structure of the generated HTML, it is easy to link to (for example) paragraphs within a document via [XPath](https://developer.mozilla.org/en-US/docs/Web/XPath) or CSS Selectors. While the frenzy of “XML Everywhere” has subsided, using XPath as a manner of URI seems reasonable. With [Purple](http://eekim.com/2007/02/the-blue-oxen-way/) or [Scripting.com](http://scripting.com), you see that each semantic chunk is assigned a unique URI, represented by the faint purple note at the end of each chunk.

Transitive Links are an essential data structure for many of my projects: Hypertext, Pivot Tables, Jots. Also a fundamental concept in SQL Database Normalization, Entity-Relationship Diagrams.

The fundamental concept of Transitive Links: Model the Links, not the locations.

Consider a file system. Every computer file system that we encounter today is a simple hierarchy of files and folders (or “directories”). A file contains data, has a number of attributes, such as modified date, size, type.

