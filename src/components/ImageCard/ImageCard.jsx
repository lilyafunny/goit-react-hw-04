import s from "./ImageCard.module.css"

const ImageCard = ({ item }) => {

    return (

        < div className={s.contanier}>
            <img src={item.urls.small} className={s.img} />
        </div>

    )


}

export default ImageCard