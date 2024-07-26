// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setDisplayGalleryImage} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails

  const thumbnailClassName = isActive
    ? 'thumbnail'
    : 'thumbnail inactive-thumbnail'

  const onClickThumbnail = () => {
    setDisplayGalleryImage(id)
  }

  return (
    <li className="thumbnail-item">
      <button className="button" type="button" onClick={onClickThumbnail}>
        <img
          className={thumbnailClassName}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
