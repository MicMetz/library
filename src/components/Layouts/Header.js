import { NextSeo } from "next-seo";



export default function Header( { title, description, keywords, ogImage } ) {
  return (
    <NextSeo
      title = {title}
      description = {description}
      openGraph = {{
        url        : "micmetz.github.io",
        title      : title,
        description: description,
        images     : [
          {
            url   : ogImage ? ogImage : "",
            width : 1200,
            height: 630,
            alt   : `${title}`,
            type  : "image/png",
          },
        ],
        site_name  : "micmetz.github.io",
      }}
      twitter = {{
        handle  : "@",
        cardType: "summary_large_image",
      }}
    />
  );
}
