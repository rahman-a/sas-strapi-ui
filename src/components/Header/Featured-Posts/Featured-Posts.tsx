import React from 'react'
import styles from './Featured-Posts.module.scss'
import FeaturedPost from './Featured-Post'
import { Featured } from '@customTypes/Menu'

interface FeaturedPostsProps {
  featured: Featured | undefined
}

const FeaturedPosts = ({ featured }: FeaturedPostsProps) => {
  return (
    <div className={styles.posts}>
      <h2 className={styles.posts__title}>{featured?.title}</h2>
      {featured?.cards.map((card) => (
        <FeaturedPost key={card.id} post={card} />
      ))}
    </div>
  )
}

export default FeaturedPosts
