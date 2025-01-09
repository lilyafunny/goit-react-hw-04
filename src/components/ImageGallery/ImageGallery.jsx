import ImageCard from "../ImageCard/ImageCard"

const ImageGallery = ({ photos }) => {

    return (

        <ul>
            {photos.map(item => (
                <li key={item.id}>
                    <a href={item.links.html}>
                        <ImageCard item={item} />
                    </a>
                </li>
            ))}
        </ul>

    )

}

export default ImageGallery