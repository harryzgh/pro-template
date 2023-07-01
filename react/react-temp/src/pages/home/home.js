import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../store/slices/counterSlice'
import PageA from '../pageA/pageA'


export default function Home () {
    const count = useSelector(state => state.counter.num)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <p>{count}</p>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>change count</button>
                <div>
                    <PageA />
                </div>
            </div>
        </div>
    )
}

console.log('test+++++99')
// 交易类型： instType 永续 SWAP， 交割： FUTURES， 币币： SPOT
// 订单类型： ordType
// 合约类型： ccyType  usdt（usdt本位）/ usd（币本位）
// 开始时间 _start
// 截止时间 _end
// 最大请求数量 limit
// 买卖开平类型 _posOrSide
fetch(
    'https://www.okx.com/priapi/v5/trade/orders-pending?t=1687454648704&instType=SWAP&ordType=limit,market,mmp&ccyType=USD&_start=1686931200000&_end=1687535999000&limit=50&_feReq=true&instFamily=LTC-USD', 
    {
        method: "GET",
        headers:{ 
            "Authorization":"eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJleDExMDE2ODY4MTQyOTY1OTQzNTlGREFCMkI3NDNGQTU4MVRaaXUiLCJ1aWQiOiJ6aXVUYTdyQk05TmhxMmJ5Z2tzT0xBPT0iLCJzdGEiOjAsIm1pZCI6InppdVRhN3JCTTlOaHEyYnlna3NPTEE9PSIsImlhdCI6MTY4NzQ1NTkyMCwiZXhwIjoxNjg4MDYwNzIwLCJiaWQiOjAsImRvbSI6Ind3dy5va3guY29tIiwiZWlkIjoxLCJpc3MiOiJva2NvaW4iLCJzdWIiOiIwQzA4OTE3QTMxQjUwODU0OTU1OTUzMUI2MTlBNkJCMyJ9.ezSyM-YgTKC2bOBrNHytTBuusGQf5nLZv4UGOSi6UPEsRxFL-yC5A27Mm2oatozQqEKe9HsmRuAXrHjnnzrCog",
            "Cookie": 'devId=a41d1fa1-490a-491e-ac64-a5227beb6d59; intercom-id-ny9cf50h=cc05ee73-97a3-447c-8b3d-fc946e52bb08; intercom-device-id-ny9cf50h=2c550049-63c6-48d2-88b9-0b424fd27265; G_ENABLED_IDPS=google; u_pid=D6D6lm9rEC5jB70; locale=zh_CN; preferLocale=zh_CN; ftID=521054007572618.110facd8aaf6a65929fcd7746a0e10b684e82.1010L8o0.168A5735D4A568E7; first_ref=https%3A%2F%2Fwww.okx.com%2Fcn%2Faccount%2Flogin%3Fforward%3D%252Fcn%252Ftrade-futures; _gid=GA1.2.2017182649.1686814279; tmx_session_id=tw6oomrnu3b1686814282378; isLogin=1; x-lid=c13025a458ea78c785d14829538f43b6be46fdb09f1c04a87d7f263e022cec0c9a402754; __zlcmid=1GRluInmdyNW9MP; okg.currentMedia=xl; __cf_bm=tnabhPkJg97eeiI.qV6SIzJEPU37SbOKhnWHS13J.MA-1687455738-0-AeTbPVfs0fTaNDhFuIl1x2JGtzj+3UVGDWc7fQ7wrGxo46OL9paGUYR4csnTGhOIDZDUeGS9jL/faROWBVwGlAQ=; token=eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJleDExMDE2ODY4MTQyOTY1OTQzNTlGREFCMkI3NDNGQTU4MVRaaXUiLCJ1aWQiOiJ6aXVUYTdyQk05TmhxMmJ5Z2tzT0xBPT0iLCJzdGEiOjAsIm1pZCI6InppdVRhN3JCTTlOaHEyYnlna3NPTEE9PSIsImlhdCI6MTY4NzQ1NTkyMCwiZXhwIjoxNjg4MDYwNzIwLCJiaWQiOjAsImRvbSI6Ind3dy5va3guY29tIiwiZWlkIjoxLCJpc3MiOiJva2NvaW4iLCJzdWIiOiIwQzA4OTE3QTMxQjUwODU0OTU1OTUzMUI2MTlBNkJCMyJ9.ezSyM-YgTKC2bOBrNHytTBuusGQf5nLZv4UGOSi6UPEsRxFL-yC5A27Mm2oatozQqEKe9HsmRuAXrHjnnzrCog; _ga=GA1.1.1202330712.1681482339; intercom-session-ny9cf50h=TEVtMEN4SEo3aVpxYmV0R1ZrSy9MWmpMaDFtam9TSkhaTHk2QkpiL2JDZ0x0NlpOWk9pa25Ga1pORHU5akYrcS0tbGJ2Z2lmdElzNGcxNTAwd1RSNHJmdz09--0b70363a1d8bd3cc812966e90054267de8e0846f; amp_56bf9d=aN5QTqSySTI4qnCkNZHvxB.bG82aE1zMmszR2Q3SFFWd3N5MFFSdz09..1h3hsbmvj.1h3i3stv4.a4v.n.a5m; _ga_G0EKWWQGTZ=GS1.1.1687448576.312.1.1687456480.60.0.0; _monitor_extras={"deviceId":"PoYqWwaMIG_e_a9nQErgwL","eventId":111978,"sequenceNumber":111978}; ok-ses-id=2QpVvPDFy3CWrzabKRI2Pwnhq9mXBqgdYqPGwgvhaOYc3scbnli3kXC8SIdCjQZc5JkyJd3oKyEoz2qM2qD8kDP5ZAgnChc9AK8zHDiV0/ZUTuX0ZTar+04omuW0Z1ZO',
            'Access-Control-Allow-Origin': '*',
            "Accept": "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "App-Type": "web",
            "Cache-Control":"no-cache",
            "Devid": "a41d1fa1-490a-491e-ac64-a5227beb6d59",
            "Ftid":"521054007572618.110facd8aaf6a65929fcd7746a0e10b684e82.1010L8o0.168A5735D4A568E7",
            "Pragma": "no-cache",
            "Referer": "https://www.okx.com/cn/balance/report-center/unified/order-open",
            "Sec-Ch-Ua": '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "macOS",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "Timeout": "10000",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            "X-Cdn": "https://static.okx.com",
            "X-Locale": "zh_CN",
            "X-Utc": "8",
        },
        body: undefined,
        referrer: "about:client",
        referrerPolicy: "no-referrer-when-downgrade",
        mode: "cors", 
        credentials: "same-origin",
        cache: "default",
        redirect: "follow",
        integrity: "",
        keepalive: false,
        signal: undefined
    }
).then(response => response.json()).then(json => console.log(json)).catch(err => console.log('Request Failed', err));

// 开仓：买入开多: buy

// https://www.okx.com/priapi/v5/trade/orders-pending?t=1687459170049&instType=SWAP&ordType=limit,market,mmp&ccyType=USD&_posOrSide=buy,long&_start=1686931200000&_end=1687535999000&limit=20&_feReq=true&instFamily=DOT-USD
// https://www.okx.com/priapi/v5/trade/orders-pending?t=1687459190800&instType=SWAP&ordType=limit,market,mmp&ccyType=USD&_posOrSide=sell,long&_start=1686931200000&_end=1687535999000&limit=20&_feReq=true&instFamily=DOT-USD
// https://www.okx.com/priapi/v5/trade/orders-pending?t=1687459206607&instType=SWAP&ordType=limit,market,mmp&ccyType=USD&_posOrSide=buy,short&_start=1686931200000&_end=1687535999000&limit=20&_feReq=true&instFamily=DOT-USD
// https://www.okx.com/priapi/v5/trade/orders-pending?t=1687459220986&instType=SWAP&ordType=limit,market,mmp&ccyType=USD&_posOrSide=sell,long&_start=1686931200000&_end=1687535999000&limit=20&_feReq=true&instFamily=DOT-USD



