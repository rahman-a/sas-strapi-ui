import React, { FunctionComponent } from 'react'
import styles from './Details-Section.module.scss'
import ReactPlayer from 'react-player'
import parse from 'html-react-parser'
import { Video } from '@customTypes/Details-Section'

interface VideoComponentProps {
  video: Video
}

const VideoComponent: FunctionComponent<VideoComponentProps> = ({ video }) => {
  return (
    <div className={styles.details__video}>
      <ReactPlayer url={video.url} width='100%' height='35rem' controls light />
      {(video.title || video.duration) && (
        <div className={styles.details__video_meta}>
          {video.title && <p>{video.title}</p>}
          {video.duration && <p>Duration | {video.duration}</p>}
        </div>
      )}
      {video.description && (
        <div className={styles.details__video_description}>
          <p>{parse(video.description)}</p>
        </div>
      )}
    </div>
  )
}

export default VideoComponent
