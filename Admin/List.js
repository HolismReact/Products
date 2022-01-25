import { List, Text, Enum } from '@List'
import UpsertProduct from './Upsert'

const filters = <>
    <Text
        column='Title'
        placeholder='Title'
    />
    <Enum
        column='AttributeId'
        placeholder='Attribute'
        entityType='AttributeTypes'
    />
</>

const card = (item) => {
    return <div>
        <div>{item.title}</div>
    </div>
}

const Products = () => {
    return <List
        title='Products'
        entityType='Product'
        filters={filters}
        card={card}
        upsert={UpsertProduct}
        hasDelete={true}
        hasEdit={true}
    />
}

export default Products