2018-08-19 18:45:58
Metadata HOWTO in my Blog


I have been writing plain text blog entries for a while now, and I have seen my ideas about best practices wander all over the place. But some ideas stick, and seem to be worth building upon.

I never start with a title of a piece. I don't even know how far a piece will go, when I sit down to write it. In this sense, writing is the act of discovering the ideas. Documenting the ideas after they are born is all very well, but the essential act to which I invite you, Dear Reader, is the process of being born.

Okay, that sounds terribly pretentious, welcome to my world.

But this facet remains, time and time again, over the years that I have written down the bits: the only thing I have, when I start, is Now, the time that I write.

SO that is the first bit.


# Standard Metadata

My writing is plain text, for the most part, thus I write in MarkDown. I started this practice of bit-writing in 1999, before Markdown had become a standard thing. I cast about for many ideas, and the best format then was to simply write text files as defined in RFC2822, the Internet Email Format, which gave me metadata tags as the first paragraph of the document.

Almost-Free-Text, or Textile, or something, and now we have Markdown and its many extended flavors.

The first paragraph, that's the info about the document, the data about the data, the meta-data.

Each bit of metadata occurs on its own line in that first paragraph.

If a line starts with a `1` or a `2`, then we try to parse it as a date. The earliest date is the creation time, and any other date is an update time. If a post needs a title to start with a `1` or `2`, then the title line needs to start with a `#`.



# References

[epigraph]:
the thing about standards is that there are so many to choose from
