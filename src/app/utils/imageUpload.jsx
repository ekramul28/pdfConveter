import axios from 'axios';
const imageUpload = async (image) => {
    const fromData = new FormData();
    fromData.append('image', image)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=1bdaaa38f74328b09cbb9edd361599b8`, fromData)
    return data
};

export default imageUpload;