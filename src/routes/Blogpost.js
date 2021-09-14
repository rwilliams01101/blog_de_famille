import { useEffect } from 'react'
import Carousel from '../components/carousel/Carousel'
import Image from '../components/image/Image'
import Text from '../components/text/Text'
import { Blogpost_Values } from '../utils/AppConstants'
import './Blogpost.css'


function Blogpost() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])    

    // I know this isn't good, but building an SPA on gitpages made me cheat a bit
    const value = localStorage.getItem('blogPostNumber');
    const blogEntries = [];

    for(let i=0; i<Blogpost_Values.length; i++) {
        if(Blogpost_Values[i].previewValue === value) {
            blogEntries.push(Blogpost_Values[i]);
        }
    }

    if(blogEntries.length === 0 ) {
        return (
            <>
                <div style={{padding: 1 + "em"}}>
                    <h1>We haven't finished this post yet (but we will soon).</h1>
                </div>
            </>
        )
    }

    return (
        <>
             {blogEntries.map((value, i) => (
                <div className="detail-wrapper" key={blogEntries[i].id}>
                    <Image src={blogEntries[i].src} classes={blogEntries[i].classes} altText={blogEntries[i].altText}></Image>
                    <Text classes="tight-caption" content={blogEntries[i].altText}></Text>
                    <Text classes="blog-entry" content={blogEntries[i].blogEntry}></Text>
                </div>
            ))}
            <Carousel />
        </>
    )
  }

export default Blogpost