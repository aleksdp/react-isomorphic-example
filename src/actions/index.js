const test = ({fetchToState}) => {
    return fetchToState('/search/result?type=advert', {
        key: 'adverts'
    })
}

const testFull = ({fetchToState, params}) => {
    return fetchToState(`/adverts/${params.id}`, {
        key: 'advertsFull'
    })
}

export {
    test,
    testFull
}