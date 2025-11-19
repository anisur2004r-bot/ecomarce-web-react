import { useEffect, useState } from "react";


const UseData = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch("/category.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return{category,products}
};

export default UseData;