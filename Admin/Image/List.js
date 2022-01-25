import { List, ItemAction } from '@List'
import UploadImage from './Upload'

const Images = () => {
    return <List
        title="Product images"
        entityType="ProductImage"
        card={card}
        itemActions={itemActions}
        hasDelete={true}
        create={UploadImage}
    />
}

export default Images