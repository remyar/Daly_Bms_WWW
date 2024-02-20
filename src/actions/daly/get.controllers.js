import createAction from '../../middleware/actions';

async function getControllers({ getState, extra }) {
    let api = extra.api;
    try {
        let obj = await api.get("controllers.json");
        return { controllers: [...obj.controllers] };
    }
    catch (err) {
        throw { message: err.message };
    }
}

export default createAction(getControllers);