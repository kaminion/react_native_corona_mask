import axios from 'axios';
import storeDTO from './DTO/storeDTO';

export default async function findSeller(lat1, lat2, lng1, lng2)
{
    var url = `http://api.adrinerdp.co/getSpots?lon1=${lng1}&lon2=${lng2}&lat1=${lat1}&lat=${lat2}`;
    
    const getData = await axios.get(url);
    
    const initValue = 0;
    let resultData = [];
    getData.map((value, currentIndex) => {
        
        var storeObj = new storeDTO();

        storeObj.setCode(getData[currentIndex]['code']);
        storeObj.setName(getData[currentIndex]['name']);
        storeObj.setType(getData[currentIndex]['type']);
        storeObj.setAddr(getData[currentIndex]['add']);
        storeObj.setTel(getData[currentIndex]['tel']);
        
        storeObj.setStock_d(getData[currentIndex]['stock_d']);
        storeObj.setStock_t(getData[currentIndex]['stock_t']);
        storeObj.setStock_cnt(getData[currentIndex]['stock_count']);
        storeObj.setSoldCnt(getData[currentIndex]['sold_cnt']);
        storeObj.setRemainCnt(getData[currentIndex]['remain_cnt']);
        storeObj.setSoldOut(getData[currentIndex]['sold_out']);

        storeObj.setLat(getData[currentIndex]['lat']);
        storeObj.setLng(getData[currentIndex]['lng']);
        storeObj.setCreateTime(getData[currentIndex]['creat-time']);

        resultData.push(storeObj);
    }, initValue)

    return resultData;
}