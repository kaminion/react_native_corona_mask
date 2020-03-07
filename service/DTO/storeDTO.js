// 클래스처럼 new해서 사용바람
function storeDTO()
{
    // 판매기관정보
    let code = null; // 판매기관코드
    let name = null; // 판매기관명
    let type = null; // 판매처유형 (01: 약국, 02: 우체국, 03: 농협)
    let addr = null; // 주소
    let tel = null; // 연락처
    
    // 입고정보
    let stock_d = null; // 입고일
    let stock_t = null;  // 입고시간
    let stock_cnt = null; // 입고량

    // 판매수량
    let sold_cnt = null;
    // 잔고 수량
    let remain_cnt = null;

    // 완판여부
    let sold_out = null;

    // 위도
    let lat = null;
    // 경도
    let lng = null;
    
    let create_time = null;

    // Getter
    // 판매처 정보 
    this.getCode = ()=>{
        return code;
    }
    this.getName = ()=>{
        return name;
    }
    this.getType = ()=>{
        return type;
    }
    this.getAddr = ()=>{
        return addr;
    }
    this.getTel = ()=>{
        return tel;
    }

    // 입고정보
    this.getStock_d = ()=>{
        return stock_d;
    }
    this.getStock_t = ()=>{
        return stock_t;
    }
    this.getStockCnt = ()=>{
        return stock_cnt;
    }
    this.getSoldCnt = ()=>{
        return sold_cnt;
    }
    this.getRemainCnt = ()=>{
        return remain_cnt;
    }
    this.getSoldOut = ()=>{
        return sold_out;
    }
    // 위/경도
    this.getLat = () => {
        return lat;
    }
    this.getLen = () => {
        return lng;
    }
    this.getCreateTime = () => {
        return create_time;
    }

    // Setter
    // 판매처정보
    this.setCode = (code)=>{
        this.code = code;
    }
    this.setName = (name)=>{
        this.name = name;
    }
    this.setType = (type)=>{
        this.type = type;
    }
    this.setAddr = (addr)=>{
        this.addr = addr;
    }
    this.setTel = (tel)=>{
        this.tel = tel;
    }

    // 입고정보
    this.setStock_d = (stock_d)=>{
        this.stock_d = stock_d;
    }
    this.setStock_t = (stock_t)=>{
        this.stock_t = stock_t;
    }
    this.setStockCnt = (stock_cnt)=>{
        this.stock_cnt = stock_cnt;
    }
    this.setSoldCnt = (sold_cnt)=>{
        this.sold_cnt = sold_cnt;
    }
    this.setRemainCnt = (remain_cnt)=>{
        this.remain_cnt = remain_cnt;
    }
    this.setSoldOut = (sold_out)=>{
        this.sold_out = sold_out;
    }

    // 위/경도
    this.setLat = (lat) => {
        this.lat = lat;
    }
    this.setLen = (lng) => {
        this.lng = lng;
    }
    this.setCreateTime = (create_time) => {
        this.create_time = create_time;
    }


    
}

export default storeDTO;