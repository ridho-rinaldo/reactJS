function setObjectToModel(objParams, objReq, model, params) {
    if (objParams === objReq) {
        try {
            if (Array.isArray(model[objReq]) === Array.isArray(params[objParams])) {
                if (typeof (model[objReq]) === typeof (params[objParams])) {
                    return params[objParams]
                } else {
                    throw 'Failed Set Request ' + model + ' ' + objReq + ' & ' + objParams + ' not same variable.'
                }
            } else {
                throw 'Failed Set Request ' + model + ' ' + objReq + ' & ' + objParams + ' not same variable. (Array)'
            }

        } catch (error) {
            console.error('Set Request: ' + error);
        }
    }
    return null
}

function setModel(params, model) {
    for (let objParams in params) {
        for (let objReq in model) {
            let setModel = setObjectToModel(objParams, objReq, model, params)
            if (setModel !== null) {
                model[objReq] = setModel
            }
        }
    }
}

export default setModel