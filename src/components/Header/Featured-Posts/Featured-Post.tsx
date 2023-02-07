import React, { FunctionComponent } from 'react'
import styles from './Featured-Posts.module.scss'
import { FeaturedCard } from '@customTypes/Menu'
import Image from 'next/legacy/image'

type PostItem = { post: FeaturedCard }

const FeaturedPost: FunctionComponent<PostItem> = ({ post }) => {
  return (
    <div className={styles.posts__featured}>
      <a
        href={post.href}
        target={post.target ? post.target : '_self'}
        className={styles.posts__link}
      >
        <Image src={post.image} alt={post.text} width={90} height={51} />
        <p>{post.text}</p>
      </a>
    </div>
  )
}

export default FeaturedPost
