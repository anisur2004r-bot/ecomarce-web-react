
import UseData from '../../../Hooks/UseData';

const HomeCategory = () => {
    const {category} = UseData()

    return (
        <div>
            <div className='flex items-center justify-between container mx-auto py-10 '>
                {
                    category.map(category =>
                        <div className='flex flex-col items-center justify-center gap-2 shadow-xl rounded-md border border-gray-200 px-14 py-4 bg-gray-100'>
                            <img src={category.image} alt="" />
                            <div>
                                <h3 className='text-xl font-semibold text-gray-700'>{category.name}</h3>
                                <p className='ts text-center'>Item {category.items}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomeCategory;