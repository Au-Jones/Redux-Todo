import{TOGGLE, ADD } from '../Actions/actions';


export default (events = [], Actions) => {
    switch (Actions.type) {
        case ADD:
            return events.concat (Actions.data);
        case TOGGLE:
            events [Actions.data].complete = !events[Actions.data].complete;
            return events;
            default:
                return events
    }
};
