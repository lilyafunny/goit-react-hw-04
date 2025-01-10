import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({ photos, onImageClick }) => {

    return (

        <ul className={s.ul}>
            {photos.map(item => (
                <li className={s.li} key={item.id} onClick={() => onImageClick(item.urls.regular)}>
                    <div >
                        <ImageCard item={item} />
                    </div>
                </li>
            ))}
        </ul>

    )

}

export default ImageGallery



