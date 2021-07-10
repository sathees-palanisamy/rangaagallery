import { combineReducers } from 'redux';
import { ganReducer } from './data/ganesha';
import { balajiReducer } from './data/balaji';
import { lakReducer } from './data/lakshmi';
import { embReducer } from './data/embossed';
import { giftsReducer} from './data/gifts';
import { ammanReducer} from './data/amman';
import { annaReducer } from './data/anna';
import { krishnaReducer } from './data/krishna';
import { mukkReducer } from './data/mukk';
import { plainReducer } from './data/plain';
import { saiReducer } from './data/sai';
import { saraswathiReducer } from './data/saraswathi';
import { sivanReducer } from './data/sivan';
import { murugarReducer } from './data/murugar';
import {wallReducer} from './data/wall'
import { flatBoardRate } from './rate/flatBoard';
import { mukkBoardRate } from './rate/mukkBoard';       
import { plainBoardRate } from './rate/plainBoard';
import { semiEmbossedRate } from './rate/semiEmbossed';
import { PichwaiWall } from './rate/PichwaiWall';
import { MuralWall } from './rate/MuralWall';
import { squareMukk } from './rate/squareMukk';


// To initialize the store 
const initialState = {
    uiPage: '',
    imageLink: '',
    imageHeading: 'Heading',
    imagePrice: '',
    uiShop: '',
    subShop: '',
    order: [],
    searchText: [],
    errno: '',
    loginInd: false,
    searchOrder1: [],
    searchError: '0',
    customerName: '',
    emailAddress: '',
    message: '',
    mobileNo: '',
    appointment: false,
    house: '',
    addline1: '',
    addline2: '',
    postcode: '',
    city: '',
    state: '',
    OrderID: '',
    categories: '',
    basketState: false,
    FetchError: '',
    searchInputOrderId: '',
    searchInputMobileNO: '',
    orderListUiState: false,
    imageTag: '',
    startingSize: '',
    endingSize: '',
    disPer: '',
    srtaCat: ''
    
};

// To change the state based on th action reducers 
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_TO_HOME':
            return {
                ...state,
                uiPage: ''
            }
        case 'SWITCH_TO_SEARCH':
                return {
                    ...state,
                    uiPage: 'search',
                    searchText: [...action.searchText],
                    uiShop: '',
                    subShop: ''
                }
        case 'SWITCH_TO_SHOP':
            return {
                ...state,
                uiPage: 'shop',
                uiShop: 'shop',
            }
        case 'SWITCH_TO_SHOP_FROM_SEARCH':
                return {
                    ...state,
                    
                }
        case 'SWITCH_TO_EMBOSSED':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: ''
                }
        case 'SWITCH_TO_GIFT':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: 'gift'
                }
        case 'SWITCH_TO_OTHERS':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: 'others'
                }
        case 'ADD_TO_BASKET':
          
                    return {
                        ...state,
                        order: [...state.order,action.newOrder],
                        basketState: false,
                    }
        case 'UPDATE_BASKET':
         
                        return {
                            ...state,
                            order: [...action.newOrders],
                        }
        case 'DATA_MAPPING':
            return {
                ...state,
                uiShop: 'detail',
                imageLink: action.imageLink,
                imageHeading: action.imageHeading,
                imagePrice: action.imagePrice,
                imageTag: action.imageTag,
                startingSize: action.startingSize,
                endingSize: action.endingSize,
                disPer: action.disPer,
                srtaCat: action.srtaCat
            }
        case 'API_RESPONSE_MAPPING':
              return {
                  ...state,
                  OrderID : action.insertedOrder.maxorderId,
              }
          case 'API_RESPONSE_ERROR':
              return {
                  ...state,
                  FetchError: 'Internal Server Error',
                  basketState: false
              }
          case 'SEARCH_ORDER_SUCCESS':
                return {
                    ...state,
                    searchOrder1:  action.searchOrder,
                    searchError : '1',
                    searchInputOrderId: action.OrderSearch,
                    searchInputMobileNO: action.mobileNoSearch
                }

        case 'BASKET_DETAILS':            
                  return {
                      ...state,
                      customerName: action.name,
                      emailAddress: action.Mail,
                      message: action.Comments,
                      mobileNo: action.Mobileno,
                      appointment: action.collection,
                      house: action.Doorno,
                      addline1: action.Addressline1,
                      addline2: action.Addressline2,
                      postcode: action.Pincode,
                      city: action.City,
                      state: action.State,
                      OrderID: action.orderid,
                      basketState: true
                  }
          case 'SEARCH_ORDER_ERROR':
                return {
                    ...state,
                    searchError: '2',
                    searchInputOrderId: action.OrderSearch,
                    searchInputMobileNO: action.mobileNoSearch
                }

          case 'SEARCH_ORDER_EMPTY':
            return {
                ...state,
                searchError: '3',
                searchInputOrderId: action.OrderSearch,
                searchInputMobileNO: action.mobileNoSearch
            }
            case 'ORDER_LOGIN_STATUS':
              return {
                  ...state,
                  orderListUiState: action.loginStatusV
              }
        default:
            return state;
    }
}

const dataReducer = () => {
    return [  ...ganReducer(),
              ...balajiReducer(),
              ...lakReducer(),
              ...embReducer(),
              ...giftsReducer(),
              ...ammanReducer(),
              ...annaReducer(),
              ...krishnaReducer(),
              ...mukkReducer(),
              ...plainReducer(),
              ...saiReducer(),
              ...saraswathiReducer(),
              ...sivanReducer(),
              ...murugarReducer(),
              ...wallReducer(),
]

};


export default combineReducers({
    pageTag: pageReducer,
    dataExt: dataReducer,
    ganExt: ganReducer,
    balajiExt: balajiReducer,
    lakExt: lakReducer,
    embExt: embReducer,
    giftsExt: giftsReducer,
    ammanExt: ammanReducer,
    annaExt: annaReducer,
    krishExt: krishnaReducer,
    mukkExt: mukkReducer,
    plainExt: plainReducer,
    saiExt: saiReducer,
    saraswathiExt: saraswathiReducer,
    sivanExt: sivanReducer,
    murExt: murugarReducer,
    wallExt: wallReducer,
    flatBoardRateExt: flatBoardRate,
    mukkBoardRateExt: mukkBoardRate,
    plainBoardRateExt: plainBoardRate,
    semiEmbossedRateExt: semiEmbossedRate,
    PichwaiWallRateExt: PichwaiWall,
    MuralWallRateExt: MuralWall,
    squareMukkRateExt: squareMukk
});