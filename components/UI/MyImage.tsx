import Image from "next/image";
const myLoader = ({src, width, quality}) => {
    return `https://res.cloudinary.com/pfalzer-dev/image/upload/w_${width},q_${
        quality || 75
        }/${src}`;
};
const MyImage = (props) => {
    return <Image loader={myLoader} {...props} />;
};
export default MyImage;
