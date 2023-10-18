/* eslint-disable react/prop-types */


const Brand = ({brand}) => {
    return (
        <div className="flex flex-col h-46  ">
            <p>{brand.name}</p>
            <img className="w-20" src={brand.logo} alt="" />
            <button className="btn">explore</button>
        </div>
    );
};

export default Brand;