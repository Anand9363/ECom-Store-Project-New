
import { useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import ProductCard from "../ProductCard/ProductCard";
import { v4 as uuidv4 } from 'uuid';
import useFetchProductData from "../../Hooks/useFetchProductdData";
import withDiscount from "../ProductDetails/withDiscount";

const ProductLayout = () => {

    const ProductWithDiscount= withDiscount(ProductCard)

    const {data,isloading}=useFetchProductData()
    if (isloading) {
        return (
            <div className="2xl:container mx-auto">
                <div className="w-[90%] mx-auto grid md:grid-cols-4">
                    <ShimmerSimpleGallery imageType="circular" imageHeight={300} caption />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="2xl:container mx-auto">
                <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        data.map((items) => {
                            return (
                                <>
                                    <ProductWithDiscount key={uuidv4()}
                                        id={items.id}
                                        name={items.title}
                                        src={items.images[0]}
                                        rating={items.rating}
                                        price={items.price}
                                        tags={items.tags}
                                        discount={items.discountPercentage}
                                    />
                                </>
                            )
                        })
                    }

                </div>

            </div>
        )
    }

}

export default ProductLayout;


