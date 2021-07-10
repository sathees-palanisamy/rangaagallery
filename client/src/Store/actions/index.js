
import axios from 'axios';

export const updateData = (imageLink, imageHeading, imagePrice,imageTag,startingSize,endingSize,disPer,srtaCat) => {

    return {
        type: 'DATA_MAPPING',
        imageLink: imageLink,
        imageHeading: imageHeading,
        imagePrice: imagePrice,
        imageTag: imageTag,
        startingSize: startingSize,
        endingSize: endingSize,
        disPer: disPer,
        srtaCat: srtaCat
    }

}

export const addBasket = (imageLink, imageHeading, imagePrice,frameSize,quantity,message) => {

    return {
        type: 'ADD_TO_BASKET',
        newOrder: {"imageLink" : imageLink,
        "imageHeading": imageHeading,
        "imagePrice": imagePrice,
        "frameSize": frameSize,
        "quantity": quantity,
        "message": message
    }
    }

}

export const updateBasket = (newOrders) => {

    return {
        type: 'UPDATE_BASKET',
        newOrders: [...newOrders],
    }

}

export const updateSearch = (searchText) => {

    return {
        type: 'SWITCH_TO_SEARCH',
        searchText: [...searchText],
    }

}

// To map the fetch response with details
export const fetchResponseSuccess = (res) => {
    return {
        type: 'API_RESPONSE_MAPPING',
        insertedOrder: res
    }
}

export const fetchResponseError = (res) => {
    return {
        type: 'API_RESPONSE_ERROR'
    }
}


// Action creator - To fetch the decision creator

export const fetchDecisions = (orderid, 
    name ,
    Mail ,
    Mobileno ,
    Doorno ,
    Addressline1 ,
    Addressline2 ,
    Pincode ,
    City ,
    State ,
    Comments ,
    status ,
    paid  ,
    totalamt  ,
    pendingamt  ,
    imageLink1  ,
    imageHeading1  ,
    imagePrice1  ,
    frameSize1  ,
    Quantity1  ,
    imageLink2  ,
    imageHeading2  ,
    imagePrice2  ,
    frameSize2  ,
    Quantity2  ,
    imageLink3  ,
    imageHeading3  ,
    imagePrice3  ,
    frameSize3  ,
    Quantity3  ,
    imageLink4  ,
    imageHeading4  ,
    imagePrice4  ,
    frameSize4  ,
    Quantity4  ,
    imageLink5  ,
    imageHeading5  ,
    imagePrice5  ,
    frameSize5  ,
    Quantity5  ,
    imageLink6  ,
    imageHeading6  ,
    imagePrice6  ,
    frameSize6  ,
    Quantity6  ,
    imageLink7  ,
    imageHeading7  ,
    imagePrice7  ,
    frameSize7  ,
    Quantity7  ,
    imageLink8  ,
    imageHeading8  ,
    imagePrice8  ,
    frameSize8  ,
    Quantity8  ,
    imageLink9  ,
    imageHeading9  ,
    imagePrice9  ,
    frameSize9  ,
    Quantity9,
    collection,
    custm1,
    custm2,
    custm3,
    custm4,
    custm5,
    custm6,
    custm7,
    custm8,
    custm9
    ) => async dispatch => {
    
    await axios({
        method: 'post',
        url: '/create',
        data: {
            orderid,
            name ,
            Mail ,
            Mobileno ,
            Doorno ,
            Addressline1 ,
            Addressline2 ,
            Pincode ,
            City ,
            State ,
            Comments ,
            status ,
            paid  ,
            totalamt  ,
            pendingamt  ,
            imageLink1  ,
            imageHeading1  ,
            imagePrice1  ,
            frameSize1  ,
            Quantity1  ,
            imageLink2  ,
            imageHeading2  ,
            imagePrice2  ,
            frameSize2  ,
            Quantity2  ,
            imageLink3  ,
            imageHeading3  ,
            imagePrice3  ,
            frameSize3  ,
            Quantity3  ,
            imageLink4  ,
            imageHeading4  ,
            imagePrice4  ,
            frameSize4  ,
            Quantity4  ,
            imageLink5  ,
            imageHeading5  ,
            imagePrice5  ,
            frameSize5  ,
            Quantity5  ,
            imageLink6  ,
            imageHeading6  ,
            imagePrice6  ,
            frameSize6  ,
            Quantity6  ,
            imageLink7  ,
            imageHeading7  ,
            imagePrice7  ,
            frameSize7  ,
            Quantity7  ,
            imageLink8  ,
            imageHeading8  ,
            imagePrice8  ,
            frameSize8  ,
            Quantity8  ,
            imageLink9  ,
            imageHeading9  ,
            imagePrice9  ,
            frameSize9  ,
            Quantity9,
            collection,
            custm1,
            custm2,
            custm3,
            custm4,
            custm5,
            custm6,
            custm7,
            custm8,
            custm9
        }
    })
        .then(function (response) {

            if (response.status === 200){ 
            dispatch(fetchResponseSuccess(response.data));
            } else {
                dispatch(fetchResponseError());
            }
        }).catch(function (error) {
            dispatch(fetchResponseError());
         
        });
}



// To map the fetch response with details
export const fetchOrderSuccess = (res,OrderSearch,mobileNoSearch) => {

    return {
        type: 'SEARCH_ORDER_SUCCESS',
        searchOrder: res,
        OrderSearch,
        mobileNoSearch
    }
}

export const fetchOrderError = (OrderSearch,mobileNoSearch) => {
    return {
        type: 'SEARCH_ORDER_ERROR',
        OrderSearch,
        mobileNoSearch
    }
}

export const fetchOrderempty = (OrderSearch,mobileNoSearch) => {
    return {
        type: 'SEARCH_ORDER_EMPTY',
        OrderSearch,
        mobileNoSearch
    }
}



// Action creator

export const checkOrders = (OrderSearch,mobileNoSearch) => async dispatch => {
  
    await axios({
        method: 'post',
        url: '/search',
        data: {
            OrderSearch,
            mobileNoSearch 
        }
    })
        .then(function (response) {
            if (response.status === 200) {
                if (response.data.result.length > 0 ){
                dispatch(fetchOrderSuccess(response.data.result[0],OrderSearch,mobileNoSearch));
                } else {
                    dispatch(fetchOrderempty(OrderSearch,mobileNoSearch));
                }
            }
            else {
                dispatch(fetchOrderError(OrderSearch,mobileNoSearch));
            }
        })
        .catch(function (error) {
            dispatch(fetchOrderError(OrderSearch,mobileNoSearch));
        });
}


// To map the fetch response with details
export const basketDetails = (
    name,
    Mail,
    Comments,
    Mobileno,
    collection,
    Doorno,
    Addressline1,
    Addressline2,
    Pincode,
    City,
    State,
    orderid   
    ) => {
    return {
        type: 'BASKET_DETAILS',
        name,
        Mail,
        Comments,
        Mobileno,
        collection,
        Doorno,
        Addressline1,
        Addressline2,
        Pincode,
        City,
        State,
        orderid 
    }
}


export const LoginStatus = (loginStatusV) => {
    return {
        type: 'ORDER_LOGIN_STATUS',
        loginStatusV
    }
}

