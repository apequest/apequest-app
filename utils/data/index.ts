import * as TokenData_ from "./data.json"
import * as _TokenData from "./data_local.json"

const isDev: boolean = process.env.NEXT_PUBLIC_DEV_ENV == "TRUE"
let TokenData: any;

if (isDev) {
    TokenData = _TokenData
} else {
    TokenData = TokenData_
}

export default TokenData
