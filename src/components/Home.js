import React from 'react'
import HomeLinks from './HomeLinks'

export default function Home() {
  return (
    <div>
      <h1>Stardew Valley Quick Reference</h1>
      <p>
        Welcome to the Stardew Valley Quick Reference! This is intended to be an easy-to-navigate quick lookup tool for Stardew Valley. Click any of the links below to get started, or use the navigation in the header.
      </p>
      <HomeLinks />
      <h2>Why I made this</h2>
      <p>
        While I love <a href="https://stardewvalleywiki.com" target="_blank" rel="noreferrer noopener">the official wiki</a> and highly encourage everyone to use it, I find it sometimes annoying to navigate on a mobile device. I usually use my phone to look things up in the wiki while I play, so I notice it frequently. If I was most recently on a villager's page, and then come back to look up when you can catch a largemouth bass, I have to either know the URL or use the search function. I've been itching to do a side project for a little while, so I decided to make an alternative reference, with pages more lightweight and focused on what I usually need to look up while playing, and a focus on easier navigation from any random page to any other random page (especially on mobile).
      </p>
    </div>
  )
}
