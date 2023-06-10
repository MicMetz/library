import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'



const postsDirectory = join( process.cwd(), 'posts', 'articles' )


export function getPostSlugs() {
  return fs.readdirSync( postsDirectory )
}


export function getPostBySlug( slug, fields = [] ) {
  const realSlug          = slug.replace( /\.mdx$/, '' )
  const fullPath          = join( postsDirectory, `${realSlug}.mdx` )
  const fileContents      = fs.readFileSync( fullPath, 'utf8' )
  const { data, content } = matter( fileContents )

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach( ( field ) => {
    if ( field === 'slug' ) {
      items[ field ] = realSlug
    }
    if ( field === 'content' ) {
      items[ field ] = content
    }

    if ( data[ field ] ) {
      items[ field ] = data[ field ]
    }
  } )

  return items
}


export function getAllPosts( fields = [] ) {
  const slugs = getPostSlugs()
  const posts = slugs
  .map( ( slug ) => getPostBySlug( slug, fields ) )
  // sort posts by date in descending order
  .sort( ( post1, post2 ) => ( post1.date > post2.date ? '-1' : '1' ) )
  return posts
}
